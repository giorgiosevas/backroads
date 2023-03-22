import { socialLinks } from "../data";

const SocialLinks = ({ parentClass, itemClass }) => {
	return (
		<ul className={parentClass} id="nav-links">
			{/*this way for mapping is a little different from the one above(lines 16-27):*/}
			{socialLinks.map((link) => {
				//const { id, href, icon } = link;
				return (
					<li key={link.id}>
						<a
							href={link.href}
							target='_blank'
							rel="noreferrer"
							className={itemClass}
						>
							<i
								className={link.icon}>
							</i>
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialLinks;