interface Props {
  companyTitle: string;
  role: string;
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  contractType: "full-time" | "part-time"
}

export default function Experience({companyTitle, role, endDate, startDate}: Props) {
  return (<div className="justify-center items-start flex flex-col relative">
    <div className="flex flex-row items-center justify-center">
      <div className="border-2 border-gray-300 border-radius rounded-full w-8 h-8 bg-green-600"></div>
      <div className="ml-2">{companyTitle}</div>
    </div>
    <div className="flex flex-row -mt-1 justify-center">
      <svg viewBox="0 0 163 170" className="ms-2 h-[30px]">
        <path
          fill="#e5e7eb"
          opacity="1.00"
          d=" M 22.00 20.00 C 27.00 20.00 32.00 20.00 37.00 20.00 C 37.01 30.33 36.98 40.66 37.01 50.99 C 37.18 67.01 42.68 82.91 52.45 95.59 C 65.49 112.84 86.35 123.84 107.95 124.89 C 119.29 125.15 130.65 124.93 142.00 125.00 C 142.00 130.00 142.00 135.00 142.00 140.00 C 124.08 139.45 105.73 141.81 88.24 136.81 C 65.20 130.61 44.98 114.77 33.43 93.89 C 25.96 80.57 21.99 65.32 22.00 50.04 C 22.00 40.03 22.00 30.01 22.00 20.00 Z"
        />
      </svg>
      <div>
        <div className="text-nowrap	font-bold h-fit pl-2x ml-1 mt-4">{role}</div>
        <div className="text-gray-300">{startDate}</div>
        - <div>{endDate}</div>
      </div>
    </div>
  </div>)
}