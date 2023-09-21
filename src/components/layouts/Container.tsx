import classnames from "classnames";

type ColProps = {
  children: React.ReactNode;
  className?: string;
};

const styles = classnames("grid", "w-full", "grid-cols-container");

export default function Container({ children, className }: ColProps) {
  return <div className={classnames(styles, className)}>{children}</div>;
}
