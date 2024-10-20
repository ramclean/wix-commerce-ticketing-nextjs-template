import { Dropdown, Flowbite, useTheme } from 'flowbite-react';
import { products } from '@wix/stores';

export function Option({
  onChange,
  option,
  selectedOption,
}: {
  onChange?: (selected: Record<string, string>) => void;
  option: products.ProductOption;
  selectedOption: string;
}) {
  const onSelect = (optionSelected: string) => {
    onChange?.({ [option.name!]: optionSelected });
  };
  const { theme } = useTheme();

  return (
    <Flowbite
      theme={{
        theme: {
          dropdown: {
            floating: {
              target: 'w-full',
              base: `!w-full !left-0 ${theme.dropdown.floating.base}`,
            },
            inlineWrapper: `${theme.dropdown.inlineWrapper} border border-gray-300 bg-white px-2 py-1 justify-between w-full text-sm`,
            content: `${theme.dropdown.content} overflow-y-auto max-h-48 py-1 text-sm w-full`,
          },
        },
      }}
    >
      {option.choices!.map(({ value }) => {
        return (
          <button
            className={
              selectedOption === value
                ? 'btn-main w-full lg:w-1/2'
                : `btn-rev w-full lg:w-1/2`
            }
            key={value}
            onClick={() => onSelect(value!)}
          >
            {value}
          </button>
        );
      })}
    </Flowbite>
  );
}
