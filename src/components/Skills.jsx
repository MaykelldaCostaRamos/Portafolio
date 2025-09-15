

export default function Skills () {

    const skills = ['HTML', 'CSS3', 'JavaScript', 'React-JS', 'PHP', 'NODE.JS'];

    return (

        <section id="skills">
            <div className="flex w-full pt-6">
                <p className="flex-col bg-slate-100 text-lg font-bold p-2">Work for This</p>
                {skills.map((skill, i) => 
                <span key={i} className="flex-1 py-8 text-white bg-black text-center">{skill}</span>
                )}
            </div>
        </section>

    );

}