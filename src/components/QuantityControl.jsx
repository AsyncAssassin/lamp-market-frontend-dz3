export function QuantityControl({ value, min = 1, max, onChange, label = 'Количество' }) {
  const decrease = () => onChange(Math.max(min, value - 1))
  const increase = () => onChange(Math.min(max, value + 1))

  return (
    <div className="quantity-control" aria-label={label}>
      <button type="button" onClick={decrease} disabled={value <= min} aria-label="Уменьшить">
        -
      </button>
      <input
        aria-label={label}
        inputMode="numeric"
        min={min}
        max={max}
        type="number"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button type="button" onClick={increase} disabled={value >= max} aria-label="Увеличить">
        +
      </button>
    </div>
  )
}
