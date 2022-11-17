import { useState } from 'react';
import './App.scss';

function App() {
	const [message, setMessage] = useState('');
	return (
		<div className="App">
			<h2>Zustand Demo</h2>
			<p>Welcome to the demo.</p>
			<main>
				<section className="controlArea">
					<div className="data">
						<label>Message:</label>
						<input
							autoFocus
							type="text"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						TEST: {message}
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
