

function TopTitleIntro(props) {


  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-sky-950 py-5">
        <h1 className="text-white text-4xl py-5">
          {props.title}
        </h1>
        <p className="text-white text-2xl py-5 px-8 text-center">
          {props.paragragh}
        </p>
      </div>
    </div>
  )
}

export default TopTitleIntro