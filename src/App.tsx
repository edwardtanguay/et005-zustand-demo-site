import { useStore } from './store';
import './App.scss';
import { InfoBox } from './components/InfoBox';

function App() {
	const store = useStore((state) => state);
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
							value={store.message}
							onChange={(e) => store.setMessage(e.target.value)}
						/>
						TEST: {store.message}
					</div>
				</section>
				<section className="dataArea">
					<InfoBox />
				</section>
			</main>
		</div>
	);
}

export default App;
