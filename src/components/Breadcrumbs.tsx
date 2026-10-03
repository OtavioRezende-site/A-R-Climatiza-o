interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export default function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav aria-label="Navegação estrutural" className="py-2">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <li>
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="hover:text-slate-200 transition-colors"
          >
            Início
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              <span className="text-slate-600" aria-hidden="true">/</span>
              {isLast || !item.path ? (
                <span className="text-slate-300 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate(item.path!)}
                  className="hover:text-slate-200 transition-colors"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
