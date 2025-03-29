import { CheckIcon } from "@heroicons/react/20/solid";

const plans = [
  {
    name: "Hobby",
    priceMonthly: "NOK 299",
    description:
      "Den perfekte planen for de som nettopp har startet sin treningsreise.",
    features: [
      "Tilgang til grunnleggende utstyr",
      "Begrensede klasser",
      "Online støtte",
    ],
    featured: false,
  },
  {
    name: "Premium",
    priceMonthly: "NOK 499",
    description:
      "For de som ønsker mer, med prioritert tilgang til klasser og trenere.",
    features: [
      "Tilgang til alt utstyr",
      "Ubegrensede klasser",
      "24/7 tilgang til treningssenteret",
      "Prioritert støtte fra trener",
    ],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BliMedlem() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">
          Bli Medlem
        </h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Velg riktig medlemskapsplan
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl/8">
        Velg en plan som passer dine treningsbehov og mål.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {plans.map((plan, planIdx) => (
          <div
            key={plan.name}
            className={classNames(
              plan.featured
                ? "relative bg-gray-900 shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              plan.featured
                ? ""
                : planIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={plan.name}
              className={classNames(
                plan.featured ? "text-indigo-400" : "text-indigo-600",
                "text-base/7 font-semibold"
              )}
            >
              {plan.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  plan.featured ? "text-white" : "text-gray-900",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                {plan.priceMonthly}
              </span>
              <span
                className={classNames(
                  plan.featured ? "text-gray-400" : "text-gray-500",
                  "text-base"
                )}
              >
                /måned
              </span>
            </p>
            <p
              className={classNames(
                plan.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base/7"
              )}
            >
              {plan.description}
            </p>
            <ul
              role="list"
              className={classNames(
                plan.featured ? "text-gray-300" : "text-gray-600",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      plan.featured ? "text-indigo-400" : "text-indigo-600",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#"
              aria-describedby={plan.name}
              className={classNames(
                plan.featured
                  ? "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500"
                  : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Bli Medlem Nå
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
