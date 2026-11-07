import { STATS } from '../data'
import { Count, Label } from './ui';
import Bg from './image/panels.jpeg'

export default function Practice() {
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center ">
        <div>
          <Label>About the practice</Label>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Experts in solar energy systems.
          </h2>
          <p className="mt-6 text-muted">
            From the first site survey to the final commissioning, I deliver
            solar systems that balance performance, safety, and lasting value.
          </p>
          <a
            href="#about"
            className="inline-block mt-6 text-sm font-semibold text-black hover:text-green-700"
          >
            More about the engineer →
            <div className="h-0.5 w-full bg-black"></div>
          </a>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-line">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold text-slate-700">
                  <Count to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs mt-1 text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Replace with <img src="/your-photo.jpg" className="w-full h-full object-cover" /> */}

        <div className="relative h-80 md:h-[26rem] rounded-2xl overflow-hidden panels border border-line">
          <img src={Bg} alt="work pic" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
}
