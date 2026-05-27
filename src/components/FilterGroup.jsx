const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-6">

      <h3 className="text-[14px] text-(--dark-gray-2) font-bold mb-3">
        {title}
      </h3>
     
      <div className="flex flex-col gap-2">

        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-2"
          >

            <input
              type={inputType}
              value={option.value}
              className="w-[22px] h-[22px] accent-(--primary)"
            />

            <span className="text-[14px] text-(--dark-gray-2)">
              {option.text}
            </span>

          </label>
        ))}

      </div>

    </div>
  )
}

export default FilterGroup