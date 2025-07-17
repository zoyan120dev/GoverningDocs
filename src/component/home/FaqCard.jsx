export const FaqCard = ({ q, a, onClick, isActive }) => {
  return (
    <div className='shadow-faq rounded-[20px] py-5 px-[30px] bg-white'>
      <button onClick={onClick} className='inline-flex justify-between items-center gap-5 w-full'>
        <h1 className='font-bold lg:text-[26px] xl:leading-[36px] text-lg  text-secondary '>{q}</h1>
        <div className='text-primary'>
          <i className={`fa-solid fa-arrow-right transform duration-300 ${isActive ? 'rotate-90' : '-rotate-90'}`}></i>
        </div>
      </button>
      {isActive && (
        <p className='text-accent pt-5 lg:text-base text-sm'>{a}</p>
      )}
    </div>
  );
};