import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "ai17-outreach-v1";

const baseLeads = [
  {
    id: "lead-brooks",
    ownerName: "Allen Brooks",
    businessName: "Brooks HVAC Services",
    phone: "(312) 555-0198",
    location: "Chicago, IL",
    timezone: "Central",
    industry: "Home Services",
  },
  {
    id: "lead-lopez",
    ownerName: "Sara Lopez",
    businessName: "Lopez Family Dental",
    phone: "(213) 555-0144",
    location: "Pasadena, CA",
    timezone: "Pacific",
    industry: "Dental",
  },
  {
    id: "lead-green",
    ownerName: "Marcus Green",
    businessName: "Greenlight Solar",
    phone: "(801) 555-0199",
    location: "Salt Lake City, UT",
    timezone: "Mountain",
    industry: "Renewable Energy",
  },
  {
    id: "lead-walters",
    ownerName: "Dana Walters",
    businessName: "Walters Legal Group",
    phone: "(470) 555-0103",
    location: "Atlanta, GA",
    timezone: "Eastern",
    industry: "Legal",
  },
  {
    id: "lead-chen",
    ownerName: "Rachel Chen",
    businessName: "BrightWave Marketing",
    phone: "(917) 555-0185",
    location: "New York, NY",
    timezone: "Eastern",
    industry: "Marketing",
  },
  {
    id: "lead-ramirez",
    ownerName: "Luis Ramirez",
    businessName: "Ramirez Property Services",
    phone: "(602) 555-0150",
    location: "Phoenix, AZ",
    timezone: "Mountain",
    industry: "Property Management",
  },
  {
    id: "lead-johnson",
    ownerName: "Camille Johnson",
    businessName: "Johnson Accounting Partners",
    phone: "(615) 555-0117",
    location: "Nashville, TN",
    timezone: "Central",
    industry: "Accounting",
  },
  {
    id: "lead-nguyen",
    ownerName: "Hannah Nguyen",
    businessName: "Nguyen Pediatrics",
    phone: "(425) 555-0124",
    location: "Bellevue, WA",
    timezone: "Pacific",
    industry: "Healthcare",
  },
];

const statusOptions = [
  { value: "not-contacted", label: "Not Contacted" },
  { value: "in-progress", label: "In Progress" },
  { value: "appointment-set", label: "Appointment Set" },
];

const outcomeOptions = [
  { value: "connected", label: "Connected" },
  { value: "left-voicemail", label: "Left Voicemail" },
  { value: "no-answer", label: "No Answer" },
  { value: "appointment-set", label: "Appointment Set" },
];

const createLeadState = () =>
  baseLeads.reduce((acc, lead) => {
    acc[lead.id] = {
      status: "not-contacted",
      notes: "",
      lastOutcome: null,
      lastContact: null,
    };
    return acc;
  }, {});

const loadState = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error("Failed to load outreach data", error);
    return null;
  }
};

const persistState = (state) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save outreach data", error);
  }
};

const StatCard = ({ label, value, subLabel }) => (
  <div className="rounded-xl bg-white p-4 shadow-sm">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
    {subLabel ? (
      <p className="mt-1 text-xs text-gray-400">{subLabel}</p>
    ) : null}
  </div>
);

export default function Outreach() {
  const [state, setState] = useState(() => {
    const saved = loadState();
    const defaultLeadState = createLeadState();

    if (!saved) {
      return {
        outreachName: "",
        leadState: defaultLeadState,
        callLog: [],
        appointments: [],
      };
    }

    const mergedLeadState = { ...defaultLeadState };
    for (const lead of Object.keys(saved.leadState ?? {})) {
      mergedLeadState[lead] = {
        ...defaultLeadState[lead],
        ...saved.leadState[lead],
      };
    }

    return {
      outreachName: saved.outreachName ?? "",
      leadState: mergedLeadState,
      callLog: Array.isArray(saved.callLog) ? saved.callLog : [],
      appointments: Array.isArray(saved.appointments)
        ? saved.appointments
        : [],
    };
  });
  const [callForm, setCallForm] = useState({
    leadId: baseLeads[0]?.id ?? "",
    outcome: "connected",
    followUp: "",
    notes: "",
  });

  useEffect(() => {
    persistState(state);
  }, [state]);

  const leadMetrics = useMemo(() => {
    const totals = { "not-contacted": 0, "in-progress": 0, "appointment-set": 0 };
    for (const lead of baseLeads) {
      const status = state.leadState[lead.id]?.status ?? "not-contacted";
      totals[status] += 1;
    }

    return {
      totals,
      lastCall: state.callLog[0]?.timestamp ?? null,
    };
  }, [state.leadState, state.appointments, state.callLog]);

  const handleStatusChange = (leadId, status) => {
    setState((prev) => ({
      ...prev,
      leadState: {
        ...prev.leadState,
        [leadId]: {
          ...prev.leadState[leadId],
          status,
        },
      },
    }));
  };

  const handleNotesChange = (leadId, notes) => {
    setState((prev) => ({
      ...prev,
      leadState: {
        ...prev.leadState,
        [leadId]: {
          ...prev.leadState[leadId],
          notes,
        },
      },
    }));
  };

  const handleLogCall = (event) => {
    event.preventDefault();

    if (!callForm.leadId) return;

    const timestamp = new Date().toISOString();
    let followUp = null;
    if (callForm.followUp) {
      const parsedFollowUp = new Date(callForm.followUp);
      if (!Number.isNaN(parsedFollowUp.getTime())) {
        followUp = parsedFollowUp.toISOString();
      }
    }
    const trimmedNotes = callForm.notes.trim();
    const callEntry = {
      id: `call-${timestamp}`,
      leadId: callForm.leadId,
      outcome: callForm.outcome,
      notes: trimmedNotes ? trimmedNotes : null,
      timestamp,
      followUp,
    };

    setState((prev) => {
      const updatedLead = {
        ...prev.leadState[callForm.leadId],
        status:
          callForm.outcome === "appointment-set"
            ? "appointment-set"
            : "in-progress",
        lastOutcome: callForm.outcome,
        lastContact: timestamp,
        notes:
          trimmedNotes || prev.leadState[callForm.leadId]?.notes || "",
      };

      const updatedAppointments =
        callForm.outcome === "appointment-set"
          ? [
              {
                id: `appt-${timestamp}`,
                leadId: callForm.leadId,
                time: followUp ?? timestamp,
                notes: trimmedNotes || undefined,
              },
              ...prev.appointments,
            ]
          : prev.appointments;

      return {
        ...prev,
        leadState: {
          ...prev.leadState,
          [callForm.leadId]: updatedLead,
        },
        callLog: [callEntry, ...prev.callLog].slice(0, 25),
        appointments: updatedAppointments,
      };
    });

    setCallForm((prev) => ({
      ...prev,
      outcome: "connected",
      followUp: "",
      notes: "",
    }));
  };

  const handleResetWorkspace = () => {
    setState({
      outreachName: "",
      leadState: createLeadState(),
      callLog: [],
      appointments: [],
    });
    setCallForm({
      leadId: baseLeads[0]?.id ?? "",
      outcome: "connected",
      followUp: "",
      notes: "",
    });
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  const formatDateTime = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleString();
  };

  return (
    <div className="bg-slate-50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <header className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Outreach HQ
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-gray-900">
              Daily Outreach Command Center
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              Work your call list, log every touch, and capture appointments that
              feed directly into the AI17 transformation pipeline.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 lg:w-80">
            <label className="text-sm font-medium text-gray-700" htmlFor="outreachName">
              Your name
            </label>
            <input
              id="outreachName"
              value={state.outreachName}
              onChange={(event) =>
                setState((prev) => ({ ...prev, outreachName: event.target.value }))
              }
              placeholder="e.g. Jordan Williams"
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="button"
              onClick={handleResetWorkspace}
              className="text-sm font-medium text-primary transition hover:text-primary/80"
            >
              Reset workspace
            </button>
          </div>
        </header>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Performance snapshot</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Not contacted" value={leadMetrics.totals["not-contacted"]} />
            <StatCard label="Active conversations" value={leadMetrics.totals["in-progress"]} />
            <StatCard label="Appointments" value={leadMetrics.totals["appointment-set"]} />
            <StatCard
              label="Last logged call"
              value={leadMetrics.lastCall ? formatDateTime(leadMetrics.lastCall) : "--"}
              subLabel={state.outreachName ? `Saved for ${state.outreachName}` : undefined}
            />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Lead queue</h2>
              <Link
                to="https://ai17.jimkettleson.com/book"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-primary transition hover:text-primary/80"
              >
                Open booking calendar
              </Link>
            </div>
            <div className="mt-4 space-y-4">
              {baseLeads.map((lead) => {
                const leadState = state.leadState[lead.id] ?? {
                  status: "not-contacted",
                  notes: "",
                  lastOutcome: null,
                  lastContact: null,
                };
                return (
                  <article key={lead.id} className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {lead.businessName}
                        </p>
                        <p className="text-sm text-gray-500">Owner: {lead.ownerName}</p>
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {lead.industry}
                      </span>
                    </div>
                    <dl className="mt-4 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
                      <div>
                        <dt className="font-medium text-gray-500">Phone</dt>
                        <dd>{lead.phone}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-500">Location</dt>
                        <dd>{lead.location} • {lead.timezone} Time</dd>
                      </div>
                      {leadState.lastContact ? (
                        <div>
                          <dt className="font-medium text-gray-500">Last contact</dt>
                          <dd>{formatDateTime(leadState.lastContact)}</dd>
                        </div>
                      ) : null}
                      {leadState.lastOutcome ? (
                        <div>
                          <dt className="font-medium text-gray-500">Last outcome</dt>
                          <dd className="capitalize">{leadState.lastOutcome.replace("-", " ")}</dd>
                        </div>
                      ) : null}
                    </dl>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <label className="text-sm font-medium text-gray-700">
                        Status
                        <select
                          value={leadState.status}
                          onChange={(event) => handleStatusChange(lead.id, event.target.value)}
                          className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          {statusOptions.map((option) => (
                            <option value={option.value} key={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="text-sm font-medium text-gray-700">
                        Call notes
                        <textarea
                          value={leadState.notes}
                          onChange={(event) => handleNotesChange(lead.id, event.target.value)}
                          placeholder="Gatekeeper, interest level, objections…"
                          rows={3}
                          className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </label>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">Log a call</h2>
              <form className="mt-4 space-y-4" onSubmit={handleLogCall}>
                <label className="block text-sm font-medium text-gray-700">
                  Lead
                  <select
                    value={callForm.leadId}
                    onChange={(event) =>
                      setCallForm((prev) => ({ ...prev, leadId: event.target.value }))
                    }
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {baseLeads.map((lead) => (
                      <option key={lead.id} value={lead.id}>
                        {lead.businessName} — {lead.ownerName}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Outcome
                  <select
                    value={callForm.outcome}
                    onChange={(event) =>
                      setCallForm((prev) => ({ ...prev, outcome: event.target.value }))
                    }
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {outcomeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Follow-up or appointment time
                  <input
                    type="datetime-local"
                    value={callForm.followUp}
                    onChange={(event) =>
                      setCallForm((prev) => ({ ...prev, followUp: event.target.value }))
                    }
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </label>

                <label className="block text-sm font-medium text-gray-700">
                  Notes
                  <textarea
                    value={callForm.notes}
                    onChange={(event) =>
                      setCallForm((prev) => ({ ...prev, notes: event.target.value }))
                    }
                    placeholder="Next steps, commitments, context for handoff…"
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
                >
                  Save call
                </button>
              </form>
            </div>

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Recent calls</h2>
                {state.callLog.length === 0 ? (
                  <p className="mt-3 text-sm text-gray-500">
                    Log your first call to start tracking progress.
                  </p>
                ) : (
                  <ul className="mt-4 space-y-4 text-sm text-gray-600">
                    {state.callLog.map((call) => {
                      const lead = baseLeads.find((item) => item.id === call.leadId);
                      return (
                        <li key={call.id} className="rounded-xl border border-gray-100 p-4">
                          <p className="font-medium text-gray-900">
                            {lead?.businessName ?? "Unknown lead"}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-wide text-gray-400">
                            {formatDateTime(call.timestamp)}
                          </p>
                          <p className="mt-2 text-sm capitalize text-gray-700">
                            Outcome: {call.outcome.replace("-", " ")}
                          </p>
                          {call.notes ? (
                            <p className="mt-2 text-sm text-gray-600">Notes: {call.notes}</p>
                          ) : null}
                          {call.followUp ? (
                            <p className="mt-2 text-sm text-primary">
                              Next action: {formatDateTime(call.followUp)}
                            </p>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Appointments</h2>
                {state.appointments.length === 0 ? (
                  <p className="mt-3 text-sm text-gray-500">
                    Appointment-set outcomes will appear here with timestamps for
                    payout tracking.
                  </p>
                ) : (
                  <ul className="mt-4 space-y-4 text-sm text-gray-600">
                    {state.appointments.map((appointment) => {
                      const lead = baseLeads.find((item) => item.id === appointment.leadId);
                      return (
                        <li key={appointment.id} className="rounded-xl border border-gray-100 p-4">
                          <p className="font-medium text-gray-900">
                            {lead?.businessName ?? "Unknown lead"}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-wide text-gray-400">
                            {formatDateTime(appointment.time)}
                          </p>
                          {appointment.notes ? (
                            <p className="mt-2 text-sm text-gray-600">
                              Notes: {appointment.notes}
                            </p>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
