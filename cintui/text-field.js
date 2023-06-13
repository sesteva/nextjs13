import * as Form from "@radix-ui/react-form"

function TextField({ name, label, autoFocus, ...otherProps }) {
  return (
    <Form.Field className="mb-[10px] grid" name={name}>
      <div className="flex items-baseline justify-between">
        <Form.Label
          className={`
            text-[15px]
            font-medium
            leading-[35px]

          `}
        >
          {label}
        </Form.Label>
      </div>
      <Form.Control asChild>
        <input
          className={`
            inline-flex

            h-[35px]
            w-full
            appearance-none
            items-center
            justify-center
            rounded-md
            border-2
            bg-white
            px-[10px]
            text-[15px]
            leading-none
            text-black
          `}
          autoFocus={autoFocus}
          {...otherProps}
        />
      </Form.Control>
    </Form.Field>
  )
}

export { TextField }
