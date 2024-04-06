import Link from "next/link";
import Image from "next/image";
import vector from "../public/Icons/vector.svg";

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav className="text-sm font-normal leading-5" aria-label="breadcrumbs">
      <ol className="list-none p-0 inline-flex">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            <Link href={breadcrumb.href}>
              <p className="text-gray-500 active:text-gray-700">
                {breadcrumb.label}
              </p>
            </Link>
            {index !== breadcrumbs.length - 1 && (
              <span className="mx-2">
                <Image src={vector} alt="" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
