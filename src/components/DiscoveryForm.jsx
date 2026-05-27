import { motion } from "framer-motion";
import {
  CalendarRange,
  Clock3,
  Loader2,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

const meetingTypes = ["Google Meet", "Zoom", "Phone Call"];

const projectTypes = [
  "Branding",
  "Website Design",
  "Creative Production",
  "Digital Marketing",
  "Product Design",
  "Corporate Branding",
  "UI /UX Design",
  "Motion Graphics",
];

const budgetRanges = [
  "Below ₹5K",
  "₹5K – ₹20K",
  "₹20K – ₹40K",
  "₹40K – ₹70K",
  "₹70K – ₹1L+",
];

function DiscoveryForm({
  formData,
  errors,
  onChange,
  onSubmit,
  isSubmitting,
  fieldLabels,
  submitError,
}) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
      className="mt-6 space-y-5"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          <span className="mb-2 block">{fieldLabels.fullName} *</span>
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-[#6F00FF] focus-within:ring-2 focus-within:ring-[#CCCCFF]">
            <UserRound className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={onChange}
              placeholder="Your name"
              className="w-full border-0 bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
          {errors.fullName && (
            <p className="mt-2 text-sm text-rose-600">{errors.fullName}</p>
          )}
        </label>

        <label className="text-sm font-semibold text-slate-700">
          <span className="mb-2 block">{fieldLabels.email} *</span>
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-[#6F00FF] focus-within:ring-2 focus-within:ring-[#CCCCFF]">
            <Mail className="h-4 w-4 text-slate-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="name@company.com"
              className="w-full border-0 bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-rose-600">{errors.email}</p>
          )}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          <span className="mb-2 block">{fieldLabels.phone} *</span>
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-[#6F00FF] focus-within:ring-2 focus-within:ring-[#CCCCFF]">
            <Phone className="h-4 w-4 text-slate-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              placeholder="+91 98765 43210"
              inputMode="tel"
              className="w-full border-0 bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
          {errors.phone && (
            <p className="mt-2 text-sm text-rose-600">{errors.phone}</p>
          )}
        </label>

        <label className="text-sm font-semibold text-slate-700">
          <span className="mb-2 block">{fieldLabels.company}</span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={onChange}
            placeholder="Studio name or brand"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#6F00FF] focus:ring-2 focus:ring-[#CCCCFF]"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          <span className="mb-2 block">{fieldLabels.projectType} *</span>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={onChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-300 focus:border-[#6F00FF] focus:ring-2 focus:ring-[#CCCCFF]"
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-2 text-sm text-rose-600">{errors.projectType}</p>
          )}
        </label>

        <label className="text-sm font-semibold text-slate-700">
          <span className="mb-2 block">{fieldLabels.budget} *</span>
          <select
            name="budget"
            value={formData.budget}
            onChange={onChange}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-300 focus:border-[#6F00FF] focus:ring-2 focus:ring-[#CCCCFF]"
          >
            <option value="">Select a budget</option>
            {budgetRanges.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="mt-2 text-sm text-rose-600">{errors.budget}</p>
          )}
        </label>
      </div>

      <label className="block text-sm font-semibold text-slate-700">
        <span className="mb-2 block">{fieldLabels.brief} *</span>
        <textarea
          name="brief"
          value={formData.brief}
          onChange={onChange}
          rows={5}
          placeholder="Tell us about your brand, audience, goals, timelines, and what kind of support you need."
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#6F00FF] focus:ring-2 focus:ring-[#CCCCFF]"
        />
        {errors.brief && (
          <p className="mt-2 text-sm text-rose-600">{errors.brief}</p>
        )}
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          <span className="mb-2 block">Preferred Meeting Date *</span>
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-[#6F00FF] focus-within:ring-2 focus-within:ring-[#CCCCFF]">
            <CalendarRange className="h-4 w-4 text-slate-400" />
            <input
              type="date"
              name="meetingDate"
              value={formData.meetingDate}
              onChange={onChange}
              className="w-full border-0 bg-transparent text-slate-900 outline-none"
            />
          </div>
          {errors.meetingDate && (
            <p className="mt-2 text-sm text-rose-600">{errors.meetingDate}</p>
          )}
        </label>

        <label className="text-sm font-semibold text-slate-700">
          <span className="mb-2 block">Preferred Meeting Time *</span>
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-[#6F00FF] focus-within:ring-2 focus-within:ring-[#CCCCFF]">
            <Clock3 className="h-4 w-4 text-slate-400" />
            <input
              type="time"
              name="meetingTime"
              value={formData.meetingTime}
              onChange={onChange}
              className="w-full border-0 bg-transparent text-slate-900 outline-none"
            />
          </div>
          {errors.meetingTime && (
            <p className="mt-2 text-sm text-rose-600">{errors.meetingTime}</p>
          )}
        </label>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-slate-700">
          Meeting Type *
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {meetingTypes.map((type) => {
            const isChecked = formData.meetingType === type;

            return (
              <label
                key={type}
                className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isChecked
                    ? "border-[#6F00FF] bg-[#6F00FF]/5 text-[#6F00FF]"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                <span>{type}</span>
                <input
                  type="radio"
                  name="meetingType"
                  value={type}
                  checked={isChecked}
                  onChange={onChange}
                  className="h-4 w-4 accent-[#6F00FF]"
                />
              </label>
            );
          })}
        </div>
      </div>

      <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={onChange}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#6F00FF] focus:ring-[#CCCCFF]"
        />
        <span>I agree to receive project communication.</span>
      </label>
      {errors.agreement && (
        <p className="-mt-2 text-sm text-rose-600">{errors.agreement}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6F00FF] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(111,0,255,0.28)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(111,0,255,0.32)] disabled:cursor-not-allowed disabled:opacity-80"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Scheduling...
          </>
        ) : (
          "Schedule Discovery Call"
        )}
      </button>
      {submitError && (
        <p className="mt-3 text-sm text-rose-600">{submitError}</p>
      )}
    </motion.form>
  );
}

export default DiscoveryForm;
