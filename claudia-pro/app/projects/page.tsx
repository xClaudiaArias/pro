import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Link from 'next/link';
import Image from 'next/image'

export default function Page() {
    return (
        <div className="container">

            <div className="hero-container">
                <h2 className="title font-sans text-3xl font-extrabold text-transform: uppercase">Graphics Logo</h2>
                <p className="year font-bold">2024</p>
                <p className="description w-xs text-xs text-transform: uppercase">Proejects description will tell us everything we need to know about the project okay?</p>
                <Link href="/"><ArrowBackIcon></ArrowBackIcon></Link>
            </div>
            {/* additional images  */}
            <div className="additional-imgs-container flex">
                <Image src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 1" />
                <Image src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 1" />
            </div>

            {/* about section  */}
            <div className="about">
                <h2>About this project</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quam? Ratione modi eos exercitationem velit eum, earum illo, doloribus saepe quis nobis sit placeat cupiditate nihil dolor odit? Dicta, blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, corporis quam officiis ratione eum eligendi adipisci voluptatum quod, tenetur suscipit incidunt expedita sed ducimus eaque, inventore delectus non illo nihil.</p>
            </div>

            {/* tools section  */}
            <div className="tools">

            </div>

            {/* sitemap and userflow section  */}
            <div className="sitemap-userflow">
                <h2>Sitemap and useflow</h2>
                <Image src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 1" />
                <Image src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 1" />
            </div>

            {/* wireframing and planning section  */}
            <div className="wireframes-planning">
                <h2>Wireframes and Planning</h2>
                <Image src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 1" />
                <Image src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 2" />
                <Image src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 3" />
                <Image src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 4" />
            </div>

            {/* high fidelity design  */}
            <div className="high-fidelity">
                <h2>High Fidelity Design</h2>
                <Image src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 1" />
                <Image src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 2" />
                <Image src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 3" />
                <Image src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 4" />
            </div>
            {/* live demo section  */}
            <div className='live-demo'>
                <Image src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200" width={300} height={300} alt="image 1" />
            </div>

            {/* go up  */}
            <div className="go-up">
                <Link href="/"><ArrowUpwardIcon></ArrowUpwardIcon></Link>
            </div>
        </div>
    );
}