import fullLogo from '/assets/icons/full-logo.svg'

export default function Splash() {
  return (
    <section className="bg-[#E7F2ED] w-screen h-screen grid place-items-center">
        <div className="bg-white rounded-3xl w-5/12 h-[55%] grid place-items-center">
            <img src={fullLogo} width={305} height={80} />
        </div>
    </section>
  )
}
