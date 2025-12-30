type StatusBadgeProps<T extends string> = {
  status: T;
  variant?: "success" | "warning" | "error";
};

const StatusBadge = <T extends string>({
  status,
  variant = "warning",
}: StatusBadgeProps<T>) => {
  const styles = {
    success: "bg-[#E7F2ED] text-[#0A814A]",
    warning: "bg-[#FFEEBE] text-[#674A00]",
    error: "bg-[#FDECEA] text-[#B00020]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-medium capitalize ${styles[variant]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
