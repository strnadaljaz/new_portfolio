export default function Projects() {
    const projects = [
        { title: "TaskFall", image: "", description: "TaskFall is an online to-do app, made for my graduation thesis", link: "http://taskfall.xyz" },
        { title: "Raylib Dino Dash", image: "", description: "A 2D game writen in C++ with raylib graphics", link: "" },
    ];

    return (
        <div id="Projects" className="bg-[#2C2F36] h-[80vh] items-center align-center">
            <div className="flex items-center align-center">
                <h1>Projects</h1>
            </div>
        </div>
    );
}