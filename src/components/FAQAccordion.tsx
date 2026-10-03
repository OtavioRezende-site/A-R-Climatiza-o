import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
  theme?: 'light' | 'dark';
}

export default function FAQAccordion({ items, theme = 'light' }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const isLight = theme === 'light';

  return (
    <div
      className={`divide-y rounded-2xl border transition-colors ${
        isLight
          ? 'divide-slate-100 border-slate-200 bg-white shadow-sm text-slate-900'
          : 'divide-slate-800 border-slate-800 bg-[#07111B]/90 text-slate-100'
      }`}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="transition-colors">
            <h3>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
                className={`flex w-full items-center justify-between p-5 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#1177B8] ${
                  isLight
                    ? 'text-slate-800 hover:text-[#1177B8]'
                    : 'text-slate-100 hover:text-[#39BDF2]'
                }`}
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? isLight
                        ? 'rotate-180 text-[#1177B8]'
                        : 'rotate-180 text-[#39BDF2]'
                      : 'text-slate-400'
                  }`}
                />
              </button>
            </h3>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
                className={`px-5 pb-5 text-sm leading-relaxed border-t pt-3 ${
                  isLight
                    ? 'border-slate-100 text-slate-600'
                    : 'border-slate-800/40 text-slate-300'
                }`}
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
