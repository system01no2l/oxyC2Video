import { ISvgIcon } from '@/interface/common'

export const CallingIcon: React.FC<ISvgIcon> = ({
  width = 20,
  height = 20,
  fillColor = 'var(--color-white)',
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill={fillColor}
        d='m7.772 2.439l1.077-.344c1.008-.322 2.086.199 2.518 1.217l.86 2.028c.375.883.167 1.922-.514 2.568L9.82 9.706c.117 1.076.478 2.135 1.084 3.177a8.68 8.68 0 0 0 2.271 2.595l2.276-.76c.862-.287 1.801.044 2.33.821l1.232 1.81c.616.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.976 1.114-3.052.778c-2.539-.792-4.873-3.143-7.003-7.053c-2.133-3.916-2.885-7.24-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404'
      />
    </svg>
  )
}
