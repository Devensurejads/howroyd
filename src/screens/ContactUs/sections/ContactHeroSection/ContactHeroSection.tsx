import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { RECAPTCHA_SITE_KEY } from "../../../../lib/recaptcha";

const rawAccessKey = "9d5d1758-de16-472d-ac41-a40b21a2b45e";
const WEB3FORMS_ACCESS_KEY =
  rawAccessKey && !rawAccessKey.startsWith("REPLACE_WITH_")
    ? rawAccessKey
    : undefined;

type FieldId = "full-name" | "phone-number" | "company" | "note";

const formFields: {
    id: FieldId;
    label: string;
    type: "input" | "textarea";
    className: string;
    required: boolean;
}[] = [
    {
        id: "full-name",
        label: "Full Name*",
        type: "input",
        className: "md:col-span-2",
        required: true,
    },
    {
        id: "phone-number",
        label: "Phone Number*",
        type: "input",
        className: "",
        required: true,
    },
    {
        id: "company",
        label: "Company / Organization",
        type: "input",
        className: "",
        required: false,
    },
    {
        id: "note",
        label: "Note",
        type: "textarea",
        className: "md:col-span-2",
        required: false,
    },
];

const consentText =
    "I understand that Howroyd Group will temporarily store the data I submit here for the purpose of replying to my message";

const phonePattern = /^[+]?[0-9\s()-]{7,20}$/;

const brandSectionTitle = "Organisations we've worked with";

const brandLogos = Array.from({ length: 10 }, (_, index) => ({
  src: `/images/c-${index + 1}.svg`,
  alt: `Client logo ${index + 1}`,
}));

export const ContactHeroSection = (): JSX.Element => {
    const [values, setValues] = useState<Record<FieldId, string>>({
        "full-name": "",
        "phone-number": "",
        company: "",
        note: "",
    });
    const [errors, setErrors] = useState<Partial<Record<FieldId, string>>>({});
    const [consent, setConsent] = useState(false);
    const [consentError, setConsentError] = useState("");
    const [status, setStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const recaptchaContainerRef = useRef<HTMLDivElement>(null);
    const recaptchaWidgetIdRef = useRef<number | null>(null);
    const onRecaptchaVerifiedRef = useRef<(token: string) => void>(() => {});

    useEffect(() => {
        const siteKey = RECAPTCHA_SITE_KEY;
        if (!siteKey) return;

        let cancelled = false;
        let waitId: number | undefined;

        const renderWidget = () => {
            if (
                cancelled ||
                !recaptchaContainerRef.current ||
                recaptchaWidgetIdRef.current !== null ||
                !window.grecaptcha
            ) {
                return;
            }

            recaptchaWidgetIdRef.current = window.grecaptcha.render(
                recaptchaContainerRef.current,
                {
                    sitekey: siteKey,
                    size: "invisible",
                    callback: (token) => onRecaptchaVerifiedRef.current(token),
                    "error-callback": () => {
                        setStatus("error");
                        setStatusMessage(
                            "reCAPTCHA verification failed. Please try again.",
                        );
                    },
                },
            );
        };

        const waitForApi = () => {
            if (cancelled) return;
            if (window.grecaptcha?.ready) {
                window.grecaptcha.ready(renderWidget);
            } else {
                waitId = window.setTimeout(waitForApi, 200);
            }
        };

        waitForApi();

        return () => {
            cancelled = true;
            if (waitId !== undefined) window.clearTimeout(waitId);
        };
    }, []);

    const validate = (): boolean => {
        const nextErrors: Partial<Record<FieldId, string>> = {};

        if (values["full-name"].trim().length < 2) {
            nextErrors["full-name"] = "Please enter your full name.";
        }

        if (!phonePattern.test(values["phone-number"].trim())) {
            nextErrors["phone-number"] = "Please enter a valid phone number.";
        }

        const nextConsentError = consent
            ? ""
            : "Please confirm you understand how your data will be used.";

        setErrors(nextErrors);
        setConsentError(nextConsentError);

        return Object.keys(nextErrors).length === 0 && !nextConsentError;
    };

    const handleChange = (id: FieldId, value: string) => {
        setValues((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: undefined }));
    };

    const submitForm = async (recaptchaToken?: string) => {
        if (!WEB3FORMS_ACCESS_KEY) {
            setStatus("error");
            setStatusMessage(
                "This form isn't fully set up yet — an email delivery key is missing.",
            );
            return;
        }

        setStatus("submitting");
        setStatusMessage("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: "New enquiry from the Howroyd Group website",
                    name: values["full-name"],
                    phone: values["phone-number"],
                    company: values.company,
                    message: values.note,
                    ...(recaptchaToken
                        ? { "g-recaptcha-response": recaptchaToken }
                        : {}),
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setStatusMessage(
                    "Thanks for reaching out — we'll be in touch shortly.",
                );
                setValues({
                    "full-name": "",
                    "phone-number": "",
                    company: "",
                    note: "",
                });
                setConsent(false);
            } else {
                setStatus("error");
                setStatusMessage(
                    "Something went wrong sending your message. Please try again.",
                );
            }
        } catch {
            setStatus("error");
            setStatusMessage(
                "Something went wrong sending your message. Please try again.",
            );
        } finally {
            if (recaptchaWidgetIdRef.current !== null) {
                window.grecaptcha?.reset(recaptchaWidgetIdRef.current);
            }
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validate()) return;

        if (RECAPTCHA_SITE_KEY && recaptchaWidgetIdRef.current !== null) {
            onRecaptchaVerifiedRef.current = (token) => {
                void submitForm(token);
            };
            window.grecaptcha?.execute(recaptchaWidgetIdRef.current);
            return;
        }

        void submitForm();
    };

    return (
        <>
        <section className="relative w-full px-5 pt-16 pb-16 sm:px-8 lg:px-20 lg:pt-[72px] lg:pb-[100px]">
            <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-[72px] lg:gap-[100px]">
                <div className="flex w-full flex-col items-start gap-14 lg:gap-20">
                    <div className="flex w-full flex-col items-start gap-8">
                        <h1 className="[font-family:'Google_Sans_Flex',Helvetica] text-[52px] font-normal leading-[62px] tracking-[-2px] text-[#363535] md:text-[64px] md:leading-[76px] lg:text-[80px] lg:leading-[96px]">
                            How can we help?
                        </h1>
                        <p className="max-w-[1056px] [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-[#363535b2] md:text-lg">
                            Every successful project begins with a conversation. If you'd like to discuss an idea, ask a question or explore how we might work together, we'd be pleased to hear from you.
                        </p>
                        <div className="flex flex-col items-start gap-1.5">
                                <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-black md:text-lg">
                                    Director: Jim McCormick
                                </p>
                                <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-black md:text-lg">
                                    Regents Court, 59-62 Regency Square
                                    Brighton, United Kingdom BN1 2FF
                                </p>
                                <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-black md:text-lg">
                                    Telephone: 01273 288 577
                                </p>
                                <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-black md:text-lg">
                                    Linkedin:{" "}
                                    <a
                                        href="https://www.linkedin.com/in/jamespatrickmccormick/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:opacity-70"
                                    >
                                        https://www.linkedin.com/in/jamespatrickmccormick/
                                    </a>
                                </p>
                            </div>
                    </div>
                    <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
                        <Card className="h-full rounded-none border-0 bg-[#00000008] shadow-none">
                            <CardContent className="flex h-full flex-col justify-between gap-12 p-6">
                                <form
                                    className="flex flex-1 flex-col gap-10"
                                    noValidate
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2">
                                        {formFields.map((field) => (
                                            <div
                                                key={field.id}
                                                className={`flex flex-col items-start gap-3 ${field.className}`}
                                            >
                                                <Label
                                                    htmlFor={field.id}
                                                    className="[font-family:'Google_Sans_Flex',Helvetica] text-lg font-normal leading-[25.2px] tracking-[0] text-[#363535]"
                                                >
                                                    {field.label}
                                                </Label>
                                                {field.type === "textarea" ? (
                                                    <Textarea
                                                        id={field.id}
                                                        name={field.id}
                                                        value={values[field.id]}
                                                        onChange={(event) =>
                                                            handleChange(field.id, event.target.value)
                                                        }
                                                        aria-invalid={Boolean(errors[field.id])}
                                                        className="min-h-[199px] rounded-[19px] border-[#00000033] bg-transparent px-4 py-3 shadow-none focus-visible:ring-0"
                                                    />
                                                ) : (
                                                    <Input
                                                        id={field.id}
                                                        name={field.id}
                                                        value={values[field.id]}
                                                        onChange={(event) =>
                                                            handleChange(field.id, event.target.value)
                                                        }
                                                        aria-invalid={Boolean(errors[field.id])}
                                                        className="h-[57px] rounded-[19px] border-[#00000033] bg-transparent px-4 shadow-none focus-visible:ring-0"
                                                    />
                                                )}
                                                {errors[field.id] ? (
                                                    <p className="[font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal text-red-600">
                                                        {errors[field.id]}
                                                    </p>
                                                ) : null}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col items-start gap-6">
                                        <div className="flex flex-col items-start gap-2">
                                            <label className="flex cursor-pointer items-start gap-3">
                                                <Checkbox
                                                    checked={consent}
                                                    onChange={(event) => {
                                                        setConsent(event.target.checked);
                                                        setConsentError("");
                                                    }}
                                                    className="mt-0.5"
                                                    aria-invalid={Boolean(consentError)}
                                                />
                                                <span className="[font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal leading-[19.6px] tracking-[0] text-[#363535b2]">
                                                    {consentText}
                                                </span>
                                            </label>
                                            {consentError ? (
                                                <p className="[font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal text-red-600">
                                                    {consentError}
                                                </p>
                                            ) : null}
                                        </div>
                                        <div className="flex flex-col items-start gap-3">
                                            <div ref={recaptchaContainerRef} />
                                            <Button
                                                type="submit"
                                                disabled={status === "submitting"}
                                                className="h-auto rounded-md border border-[#363535] bg-[#363535] px-7 py-3.5 text-base leading-[22.4px] [font-family:'Google_Sans_Flex',Helvetica] font-normal text-white hover:bg-white hover:text-[#363535] disabled:opacity-60"
                                            >
                                                {status === "submitting" ? "Sending..." : "Submit"}
                                            </Button>
                                            {statusMessage ? (
                                                <p
                                                    className={`[font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal ${
                                                        status === "success"
                                                            ? "text-green-700"
                                                            : "text-red-600"
                                                    }`}
                                                >
                                                    {statusMessage}
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                        <section
                            aria-label="Office information"
                            className="flex min-h-[634px] w-full items-end bg-[url(/images/contact-hero.png)] bg-cover bg-[50%_50%] p-6"
                        >
                            
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative flex w-full self-stretch px-5 pb-[100px] sm:px-8 lg:px-20">
        <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-16 lg:gap-20">
          <section className="flex w-full flex-col items-center gap-8 py-5">
            <h3 className="[font-family:'Google_Sans_Flex',Helvetica] text-center text-xl font-normal leading-7 text-[#363535]">
              {brandSectionTitle}
            </h3>
            <div className="group flex w-full overflow-hidden [--duration:35s] [--gap:4rem] [gap:var(--gap)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {Array.from({ length: 4 }, (_, groupIndex) => (
                <div
                  key={groupIndex}
                  aria-hidden={groupIndex > 0}
                  className="flex shrink-0 animate-marquee items-center [gap:var(--gap)] group-hover:[animation-play-state:paused]"
                >
                  {brandLogos.map((logo) => (
                    <img
                      key={logo.alt}
                      className="h-11 w-auto shrink-0 object-contain"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
        </>
    );
};
