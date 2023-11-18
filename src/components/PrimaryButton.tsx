type PrymaryButtonProps = { action?: string };

function PrimaryButton({ action = "Add" }: PrymaryButtonProps) {
  return (
    <div>
      <button>Click to {action}</button>
    </div>
  );
}

export default PrimaryButton;
