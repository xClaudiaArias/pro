import Image from "next/image";

export default function Page() {
    return (
        <div className="flex p-8">
            <div className="contact-left">
                <Image src="https://images.pexels.com/photos/31046966/pexels-photo-31046966/free-photo-of-stunning-winter-snow-covered-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={300} height={300} alt="Claudia headshot" />
                <div className="about-me">
                    <h2 className="text-black text-3xl font-black mb-8">LETS WORK TOGETHER</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod inventore suscipit, est, quasi officia totam iste eligendi ipsam reprehenderit dolor quia ut earum minus ipsa incidunt adipisci laudantium et minima.
                    Neque, totam officiis? Nemo velit reiciendis autem necessitatibus consequuntur nobis, aspernatur, doloribus aperiam incidunt eum non praesentium. Id sequi aut quia. Ullam quaerat sequi similique odit aperiam nobis animi ex.
                    Ipsum illo facilis amet, natus nulla blanditiis. Libero aperiam mollitia consectetur fuga ipsam, iure earum et distinctio eius numquam nam provident facere at aliquid. A pariatur repudiandae accusantium architecto tempore!
                    <br></br>
                    Ullam enim consectetur officiis optio, architecto cumque reiciendis, quis asperiores ipsa minus nesciunt dolorum et delectus. Enim aut earum perspiciatis quidem assumenda nobis nesciunt rem. Nobis, esse. Repellendus, eligendi impedit?
                    Optio obcaecati maxime sequi hic, sunt repudiandae? Eaque, possimus modi architecto, cupiditate impedit id sunt veritatis repellat nisi illo numquam obcaecati excepturi aliquam qui perspiciatis. Dolorum nisi consequuntur ab nobis?</p>
                </div>
            </div>

            <div className="contact-right">
                <h2 className="text-black text-3xl font-black mb-8">CONTACT ME</h2>

                <form action="/">
                    <div className="full-name">
                        <label htmlFor="">FULL NAME</label>
                        <input className="fullname" id="fullname" type="text" placeholder="Fullname"/>
                    </div>
                    <div className="email">
                        <label htmlFor="">EMAIL ADDRESS</label>
                        <input className="email" id="email" type="text" placeholder="email"/>
                    </div>
                    <div className="full-name">
                        <label htmlFor="message">MESSAGE</label>
                        <textarea id="message" name="message" rows={7} cols={50} defaultValue="">
                            
                        </textarea>
                    </div>
                    <div className="send-btn">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    );
}