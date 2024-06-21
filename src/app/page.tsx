import Calendar from './components/Calendar';
import Nav from './components/Nav';

export default function Home() {
    return (
        <main className="h-full w-full flex flex-col">
            <Nav />
            <Calendar />
            <div></div>
        </main>
    );
}
