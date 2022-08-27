import Link from "next/link";
import { NAV_ITEMS } from "../constants";
import { Layout } from "../components";
import { Button, Card } from "react-daisyui";

export default function Home() {
	return (
		<Layout>
			<div className='grid gap-16 sm:grid-cols-2 grid-flow-row'>
				{NAV_ITEMS.map(({ name, href, description, icon }) => {
					const ReactIcon = icon;
					return (
						<Card key={name} className='shadow-xl shadow-black'>
							<div className='flex justify-center py-6 bg-blue-600'>
								<ReactIcon size={90} />
							</div>
							<Card.Body className='bg-gray-900'>
								<Card.Title tag='h2' className='uppercase'>
									{name}
								</Card.Title>
								<p>{description}</p>
								<Card.Actions className='justify-end'>
									<Button className='bg-yellow-300 text-black hover:scale-105 hover:bg-yellow-300'>
										<Link href={href}>
											<a>go to {name}</a>
										</Link>
									</Button>
								</Card.Actions>
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</Layout>
	);
}
