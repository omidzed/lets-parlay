import type { Event } from '../../pages/HomePage';

type Props = {
  events: Event[];
};

export function OddsTable({ events }: Props) {
  const formatDateTime = (dateTimeString: Date) => {
    return new Date(dateTimeString).toLocaleDateString('default', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const style = {
    boxStyling:
      'flex my-1 mt-1 text-odds drop-shadow-xl font-bold justify-center items-center rounded-md bg-[#2e2e31] h-[30%] text-red-600 ;',
    boxStyling2:
      'flex m-2 mt-2 text-odds drop-shadow-xl justify-center items-center rounded-md bg-[#2e2e31] h-[28%] text-[#54D338] ;',
    date: 'flex text-smallest justify-center items-center h-1/4 border-b-[1px]',
    thead:
      'flex text-smallest justify-center items-center h-1/4 mb-5 border-b-[1px] border-b-[#343541] w-full',
  };

  const odds = events.map((event) => {
    const { commenceTime, outcomes } = event;

    const moneyline = outcomes[0].moneyline;
    const moneylineTwo = outcomes[1].moneyline;
    const formattedDateTime = formatDateTime(commenceTime);
    const nameOne = outcomes[0].name;
    const nameTwo = outcomes[1].name;

    return (
      <div className="flex justify-center mt-6 2xl: w-full h-56">
        <div className="flex py-2 px-2  rounded-md bg-[#212123e3] w-[80%] h-46 mt-2">
          <div className="flex-col  w-2/5 text-white text-xl">
            <span className={style.thead}>{formattedDateTime}</span>
            <span className="flex text-lg justify-center items-center h-1/3">
              {nameOne}
            </span>
            <span className="flex text-lg justify-center items-center h-1/3">
              {nameTwo}
            </span>
          </div>
          <div className="flex-col w-1/5 text-white text-xs">
            <span className={style.thead}>SPREAD</span>
            <span className={style.boxStyling2}></span>
            <span className={style.boxStyling2}></span>
          </div>
          <div className="flex-col gap-2 w-1/5 text-white text-xs">
            <span className={style.thead}>MONEYLINE</span>
            <span className={`${style.boxStyling2} cursor-pointer`}>
              {moneyline}
            </span>
            <span className={`${style.boxStyling2} cursor-pointer`}>
              {moneylineTwo}
            </span>
          </div>
          <div className="flex-col w-1/5 text-white text-xs pr-2">
            <span className={style.thead}>TOTAL</span>
            <span className={style.boxStyling2}></span>
            <span className={style.boxStyling2}></span>
          </div>
        </div>
      </div>
    );
  });
  return <div>{odds}</div>;
}
