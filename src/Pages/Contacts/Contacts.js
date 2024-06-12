import './Contacts.css';

function Contacts() {
	return (
		<>
			<section class="contact">
				<div class="container">
					<h2 class="page_tit">Contact Us</h2>
					<form action="" class="form form_book">
						<div class="form_in flex">
							<div class="form_input">
								<span class="form_tit">Name</span>
								<input type="text" class="input" placeholder="Enter your name" />
							</div>
							<div class="form_input">
								<span class="form_tit">Email</span>
								<input type="text" class="input" placeholder="Enter email address" />
							</div>
							<div class="form_input form_input_big">
								<span class="form_tit">Subject</span>
								<input type="text" class="input" placeholder="Write a subject" />
							</div>
							<div class="form_input form_input_big">
								<span class="form_tit">Message</span>
								<input type="text" class="input" placeholder="Write your message" />
							</div>
							<div class="form_btn">
								<button class="btn" type="submit">Send</button>
							</div>
						</div>
					</form>
				</div>
				<div id="map">
					<iframe class="google-map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.060689353338!2d16.36837377563033!3d48.20544694643475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079ea7280281%3A0xb51a2f38712420e1!2z0JzQsNCz0LDQt9C40L0g0KHQstCw0YDQvtCy0YHQutC4!5e0!3m2!1sru!2skg!4v1718124120799!5m2!1sru!2skg"
						width="600"
						height="450"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
				<div class="address">
					<div class="container">
						<div class="address_in flex">
							<div class="address_card">
								<h2 class="address_tit">Call Us:</h2>
								<a href="" class="address_link"> 00800 3242 5056</a>
							</div>
							<div class="address_card">
								<h4 class="address_tit">Hours:</h4>
								<p class="address_txt">Mon-Th: 8am - 17pm </p>
								<p class="address_txt">Fr: 8am - 12pm</p>
							</div>
							<div class="address_card">
								<h4 class="address_tit">FOR EUROPE AND THE REST OF THE WORLD
									CUSTOMER SERVICE:</h4>
								<p class="address_txt">Swarovski-Optik AG & Co KG</p>
								<p class="address_txt">Daniel-Swarovski-Straße 706067 Absam</p>
								<p class="address_txt">Austria</p>
							</div>
						</div>
					</div>
				</div>


			</section>




		</>
	);
}

export default Contacts;