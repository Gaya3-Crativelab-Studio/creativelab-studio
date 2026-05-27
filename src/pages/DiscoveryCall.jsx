import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import DiscoveryForm from "../components/DiscoveryForm";
import BenefitsCard from "../components/BenefitsCard";
import SuccessModal from "../components/SuccessModal";
import { db } from "../lib/firebase";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  brief: "",
  meetingDate: "",
  meetingTime: "",
  meetingType: "Google Meet",
  agreement: false,
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const slideIn = {
  hidden: { opacity: 0, x: 38 },
  visible: { opacity: 1, x: 0 },
};

const benefits = [
  {
    title: "Strategic discussion",
    description:
      "Translate your goal into a focused creative brief and next-step roadmap.",
    icon: "Sparkles",
  },
  {
    title: "Project clarity",
    description:
      "Clarify the problem, audience, and brand direction before any production work starts.",
    icon: "Compass",
  },
  {
    title: "Brand direction",
    description:
      "Align messaging, visuals, and positioning with a premium brand system.",
    icon: "BrushCleaning",
  },
  {
    title: "Timeline planning",
    description:
      "Set realistic milestones so your launch, campaign, or redesign moves smoothly.",
    icon: "CalendarRange",
  },
  {
    title: "Budget understanding",
    description:
      "Define scope, investment level, and deliverables with complete transparency.",
    icon: "Wallet",
  },
  {
    title: "Creative consultation",
    description:
      "Get tailored recommendations around strategy, design, and production.",
    icon: "Lightbulb",
  },
];

const fieldLabels = {
  fullName: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  company: "Company / Brand Name",
  projectType: "Project Type",
  budget: "Budget Range",
  brief: "Project Brief",
  meetingDate: "Preferred Meeting Date",
  meetingTime: "Preferred Meeting Time",
  meetingType: "Meeting Type",
  agreement: "Agreement",
};

function DiscoveryCall() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const completion = useMemo(() => {
    const filled = Object.entries(formData).filter(([key, value]) => {
      if (key === "agreement") return value;
      return value !== "";
    }).length;

    return Math.round((filled / 10) * 100);
  }, [formData]);

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^[+]?[(]?[0-9\s-]{8,}$/.test(formData.phone)) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.projectType) {
      nextErrors.projectType = "Please select a project type.";
    }

    if (!formData.budget) {
      nextErrors.budget = "Please select a budget range.";
    }

    if (!formData.meetingDate) {
      nextErrors.meetingDate = "Please choose a meeting date.";
    }

    if (!formData.meetingTime) {
      nextErrors.meetingTime = "Please choose a meeting time.";
    }

    if (!formData.brief.trim()) {
      nextErrors.brief = "Please share your project brief.";
    } else if (formData.brief.trim().length < 40) {
      nextErrors.brief =
        "Your project brief should be at least 40 characters long.";
    }

    if (!formData.agreement) {
      nextErrors.agreement =
        "Please confirm your agreement to receive project communication.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      console.log("Submitting started");

      const docRef = await addDoc(collection(db, "discovery_calls"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      console.log("Success:", docRef.id);

      setFormData(initialForm);

      setIsOpen(true);
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);

      setSubmitError(error.message || "Something went wrong.");
    } finally {
      console.log("Loading stopped");

      setIsSubmitting(false);
    }
  };

  const closeModal = () => setIsOpen(false);

  const goHome = () => {
    closeModal();
    navigate("/");
  };

  const goPortfolio = () => {
    closeModal();
    navigate("/portfolio");
  };

  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 pt-28 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -18, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-12 h-56 w-56 rounded-full bg-[#6F00FF]/18 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-[#C0FF00]/25 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -12, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/3 bottom-16 h-64 w-64 rounded-full bg-[#CCCCFF]/30 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#6F00FF]/20 bg-[#6F00FF]/5 px-4 py-2 text-sm font-semibold text-[#6F00FF]"
            >
              <span className="h-2 w-2 rounded-full bg-[#C0FF00]" />
              Discovery call booking
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl xl:text-6xl"
            >
              Let&apos;s Build Something Extraordinary Together
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
            >
              Choose a suitable time and tell us about your project vision. Our
              team will shape the right strategy, creative direction, and next
              step for your brand.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:gap-8"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-[28px] border border-slate-200 bg-white/95 p-5 shadow-[0_24px_80px_rgba(111,0,255,0.12)] backdrop-blur sm:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Project intake
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                    Schedule your discovery call
                  </h2>
                </div>
                <div className="rounded-full border border-[#6F00FF]/20 bg-[#6F00FF]/5 px-4 py-2 text-sm text-slate-700">
                  {completion}% ready
                </div>
              </div>

              <DiscoveryForm
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                fieldLabels={fieldLabels}
                submitError={submitError}
              />
            </motion.div>

            <motion.div variants={slideIn} className="space-y-6">
              <BenefitsCard benefits={benefits} />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.45 }}
                className="rounded-[28px] border border-[#6F00FF]/10 bg-linear-to-br from-[#6F00FF] to-[#4d00c4] p-6 text-white shadow-[0_24px_80px_rgba(111,0,255,0.2)]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#CCCCFF]">
                  What to expect
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  A focused, premium 30-minute consultation
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/90">
                  We&apos;ll map your brand goals, identify the right creative
                  strategy, and outline the next phase of work with clear
                  timelines and budgets.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-white/15 px-3 py-1">
                    30 min
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1">
                    Strategy-first
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1">
                    No pressure
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <SuccessModal
          isOpen={isOpen}
          onClose={closeModal}
          onReturnHome={goHome}
          onViewPortfolio={goPortfolio}
        />
      </div>
    </>
  );
}

export default DiscoveryCall;
