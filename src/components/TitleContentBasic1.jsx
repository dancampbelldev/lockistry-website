

function TitleContentBasic1(props) {



  return (
    <div>
      <div className={`flex flex-col justify-center items-center text-stone-100 ${props.bgcolor}`}>
        <h3 className="text-3xl pt-10 text-center">
          {props.title}
        </h3>
        <p className="text-xl pt-8 pb-12 px-10 font-light max-w-[1000px]">
          {props.content}
        </p>
      </div>
    </div>
  )
}

export default TitleContentBasic1