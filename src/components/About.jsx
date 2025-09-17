import WaveText from "../ui/WaveText";


export default function About () {

    return (

        <section id="about" className="py-12 px-6 sm:px-8 md:px-12 flex text-slate-950">
     
            <div className="flex flex-col justify-center items-start">
                <h2 className="text-4xl font-bold py-1">
                About Me
                <span className="text-indigo-600 px-1">.</span>
                </h2>

                <div className="w-full border-0 border-b border-indigo-600" />

                {/* Párrafos */}
                <div className="py-8 space-y-6">
                {[
                    "Desarrollador web con enfoque en frontend, apasionado por crear interfaces intuitivas y funcionales.",
                    "Empecé en el desarrollo por mi curiosidad de entender cómo funcionan las tecnologías y descubrir qué podía crear con ellas.",
                ].map((text, i) => (
                    <p key={i} className="text-left text-lg leading-relaxed" custom={i}>
                    {i === 0 ? (
                        <>
                        Desarrollador web con enfoque en{" "}
                        <strong className="text-indigo-700 font-semibold">
                            <WaveText text="frontend" />
                        </strong>
                        , apasionado por crear interfaces intuitivas y funcionales.
                        </>
                    ) : (
                        text
                    )}
                    </p>
                ))}
                </div>

                {/* Blockquote */}
                <blockquote className="mt-6 border-l-4 border-indigo-600 pl-4 italic text-indigo-400">
                "Cada proyecto me ayuda a crecer no solo como desarrollador, sino
                también como <span className="italic">persona</span>."
                </blockquote>
            </div>
    </section>

    );

}