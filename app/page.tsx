"use client";
import { useMemo, useState } from "react";

type Lang = "jp" | "en";

type Post = {
  slug: string;
  date: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string[]>;
};

export default function SparkSite() {
  const [page, setPage] = useState<"home" | "about" | "post">("home");
  const [selectedSlug, setSelectedSlug] = useState<string>("why-it-ops-never-change");
  const [lang, setLang] = useState<Lang>("jp");

  const posts: Post[] = [
    {
      slug: "why-it-ops-never-change",
      date: "2026.03.30",
      title: {
        jp: "なぜITサービスは何年経っても変わらないのか",
        en: "Why IT Services Never Really Change",
      },
      excerpt: {
        jp: "同じ作業、同じ疲弊、同じ属人化。変えようとしているのに変わらない背景には、個人の問題ではなく構造の問題があります。",
        en: "The same tasks, the same exhaustion, the same dependence on individuals. If nothing changes despite repeated efforts, the problem may lie not in people, but in structure.",
      },
      content: {
        jp: [
          "ITサービスの現場では、改善という言葉が日常的に使われています。ツールを入れ、手順を増やし、会議を重ね、インシデントが起きるたびに対策を積み上げる。それでも数年後に振り返ると、現場の疲れ方はほとんど変わっていないことがあります。",
          "なぜ変わらないのか。私は、その理由は努力不足ではなく構造にあると思っています。責任分界が曖昧なまま、現場が最後に吸収する。人が抜けると回らない前提のまま、個人の経験に依存する。変えることより止めないことが優先される。そうした前提の積み重なりが、サービスを固定化していきます。",
          "現場には優秀な人が多い。だからこそ、構造が悪いと人が無理をしてしまう。結果として、頑張る人ほど疲弊し、変わらない仕組みだけが残る。問題は人ではなく、変わらない方が安全だと思わせる構造にあります。",
        ],
        en: [
          "In IT services, improvement is a word used almost every day. New tools are introduced, procedures are added, meetings increase, and every incident leads to another layer of countermeasures. Yet when you look back a few years later, the fatigue on the ground often remains the same.",
          "Why does nothing really change? I believe the reason is not a lack of effort, but structure. Responsibilities remain unclear, so the front line absorbs everything in the end. Services depend on the experience of specific individuals, and keeping things running is valued more than changing them. These accumulated assumptions end up fixing the service in place.",
          "There are many capable people in the field. That is exactly why a bad structure becomes dangerous: talented people keep compensating for it. The harder they work, the more exhausted they become, while the unchanged mechanism survives. The problem is not people. It is the structure that makes staying the same feel safer than changing.",
        ],
      },
    },
    {
      slug: "blame-culture",
      date: "2026.03.31",
      title: {
        jp: "なぜ障害対応は責任追及から始まるのか",
        en: "Why Incident Response Begins with Blame",
      },
      excerpt: {
        jp: "障害が起きると、まず『誰の責任か』が問われる。この文化は問題解決を早めるどころか、構造的な改善を遠ざけている可能性があります。",
        en: "When an incident occurs, the first question is often who is responsible. That culture may not accelerate resolution. It may actually push structural improvement further away.",
      },
      content: {
        jp: [
          "障害が発生したとき、多くの現場ではまず原因ではなく『誰がやったのか』に焦点が当たります。もちろん責任の所在を明らかにすること自体は必要です。しかしそれが最初に来ることで、現場の空気は一気に防御的になります。",
          "人は責められる環境では本質的な情報を出しにくくなります。本来であれば共有されるべき判断の迷いや曖昧さ、構造的な問題が隠され、結果として表面的な対策だけが積み上がっていきます。",
          "本当に見るべきは、なぜその判断が起きたのか、なぜその状態を許容していたのかという構造です。責任追及から始まる限り、問題は個人に閉じ込められ、同じことが繰り返されます。",
        ],
        en: [
          "When an incident happens, many organizations focus first not on the cause, but on who did it. Clarifying responsibility is not wrong in itself. But when that becomes the first move, the atmosphere immediately turns defensive.",
          "In an environment where people expect blame, they are less likely to share the most important information. Uncertainty, hesitation, and structural weaknesses that should be discussed openly remain hidden. What accumulates instead are only surface-level countermeasures.",
          "What we really need to examine is the structure: why that judgment was made, and why the condition was tolerated in the first place. As long as blame comes first, the issue stays trapped inside individuals, and the same pattern repeats.",
        ],
      },
    },
    {
      slug: "portal-fails",
      date: "2026.03.27",
      title: {
        jp: "セルフサービスポータルはなぜ定着しないのか",
        en: "Why Self-Service Portals Fail to Take Root",
      },
      excerpt: {
        jp: "ポータルは便利なはずなのに、現場では使われない。そこにはツール以前の問題として、意思決定と業務フローの構造があります。",
        en: "A portal should make things easier, yet people in the field often do not use it. Behind that lies not a tool problem, but a structure problem in decision-making and workflow.",
      },
      content: {
        jp: [
          "セルフサービスポータルという言葉には、いつも希望があります。申請が楽になる、依頼が減る、現場が自律的に動けるようになる。構想だけを聞くと、ほとんどの人が良いものだと感じるはずです。",
          "でも実際には、ポータルを作っただけでは使われません。なぜなら、既存の承認文化や属人的な調整がそのまま残っているからです。結局、最後は誰かに聞いた方が早い。ポータルより、顔なじみの担当者に連絡した方が通る。そういう構造のままでは、新しい入り口だけ作っても流れは変わりません。",
          "ツールを導入することと、使われる構造を作ることは違います。定着しない理由は、現場の理解不足ではなく、仕組みの前提が変わっていないことにあります。",
        ],
        en: [
          "The phrase self-service portal always carries hope. Easier requests, fewer manual handoffs, more autonomy in the field. At the level of concept, almost everyone thinks it sounds right.",
          "But in reality, building a portal is not enough. Existing approval culture and person-dependent coordination remain untouched. In the end, asking a familiar person still feels faster than using the portal. If that structure stays intact, changing the entry point alone changes nothing.",
          "Introducing a tool and creating a structure where the tool is actually used are two different things. The reason it fails to take root is not a lack of understanding in the field. It is that the assumptions behind the workflow have not changed.",
        ],
      },
    },
    {
      slug: "democratizing-expertise",
      date: "2026.03.24",
      title: {
        jp: "サービスの民主化とは、専門家を不要にすることではない",
        en: "Service Democratization Does Not Mean Experts Become Unnecessary",
      },
      excerpt: {
        jp: "専門家の知見を抽象化し、誰もが使える形にする。それは専門性を壊すことではなく、専門性の届き方を変えることです。",
        en: "To abstract expert knowledge and make it usable by more people is not to destroy expertise. It is to change how expertise reaches others.",
      },
      content: {
        jp: [
          "最近、民主化という言葉がいろいろな場所で使われています。コードの民主化、データの民主化、AIの民主化。便利な言葉ですが、誤解されやすい言葉でもあります。",
          "AIを使えば、コードを書いたことがなくてもサービスを作ることができる。それは確かにプログラムの民主化だと思う。ただ、トラブルが起きたときや、セキュリティに関わる問題が発生したとき、どこで何が起きているのかを理解し、正しく対処できるのはやはり専門家です。民主化とは、",
          "専門家を不要にすることではなく、専門家の力が届く範囲を広げることなのだと思います。ITサービスの民主化も同じです。それは、専門家を否定する話ではありません。むしろ逆で、専門家の知見を個人に閉じ込めたままにしないための考え方です。特定の人しかできない状態を、少しずつ",
          "構造に埋め込む。判断基準を明文化し、再現性を持たせ、誰が触っても最低限安全に動けるようにする。",
          "ITサービスも同じです。民主化されるのは操作や入り口であり、設計や深い専門性はむしろ価値が増していく。その境界をどう設計するかが、本当の論点だと思っています。",
        ],
        en: [
          "Recently, the word democratization appears everywhere: democratization of code, data, AI. It is a useful word, but also an easily misunderstood one.",
          "With AI, even someone who has never written code can create a service. In that sense, it does feel like the democratization of programming. But when something breaks, or when a security-related issue occurs, the people who can understand what is happening and respond correctly are still experts. Democratization, then, is not about making experts unnecessary.",
          "It is about extending the reach of expertise. The same applies to IT services. This is not an argument against experts. If anything, it is the opposite: a way to prevent expert knowledge from being trapped inside individuals.",
          "What only a few people can do should gradually be embedded into structure. Make the criteria explicit, create reproducibility, and enable safe action even for those who are not specialists.",
          "The same is true for IT services. What gets democratized are the entry points and the operations. Deep design and deep expertise do not disappear. Their value increases. The real question is where that boundary should be designed.",
        ],
      },
    },
    {
      slug: "why-evolution",
      date: "2026.03.31",
      title: {
        jp: "ITの進化は本当に正しいのか",
        en: "Is IT Progress Always Right?",
      },
      excerpt: {
        jp: "ITの進化は本当に正しいのか。新しい技術やツールの導入が、むしろ複雑さとトラブルを生んでいる可能性があります。",
        en: "Is progress in IT always right? The introduction of new tools and technologies may be creating more complexity and more trouble instead.",
      },
      content: {
        jp: [
          "ITサービスの現場にいると、ふと疑問に思うことがあります。なぜこの業界は、ここまで進化し続けるのだろうかと。",
          "今の仕組みをそのまま維持していれば、実はトラブルはもっと少ないのではないか。そう感じる瞬間があります。",
          "メーカーはしのぎを削り、新しいツールや技術を次々と生み出し、それが市場に投入される。そして企業はそれを取り入れ、更新し、置き換えていく。",
          "一見すると、それは健全な進化のように見えます。しかし現場では、そのたびに変更コストが発生し、サービスは上書きされ、過去と現在が絡み合っていきます。",
          "結果として、構造は単純になるどころか複雑さを増し、新たなトラブルの温床になることも少なくありません。",
          "もちろん、進化そのものを否定することはできません。ただ、進化が常に正しいという前提は、一度立ち止まって見直す必要があるのではないかと思います。",
          "本当に必要なのは、進化することではなく、変えても壊れない構造をつくることなのかもしれません。",
        ],
        en: [
          "Working in IT services, I sometimes find myself wondering: why does this industry keep progressing at such speed?",
          "There are moments when I feel that if we simply kept the current system as it is, there might actually be fewer failures.",
          "Vendors compete fiercely, producing new tools and new technologies one after another. Those are then released into the market, and companies adopt, update, and replace what they already have.",
          "At first glance, that looks like healthy progress. But in the field, every change comes with cost. Services are overwritten, the past and present become entangled, and complexity keeps growing.",
          "As a result, the structure does not become simpler. It becomes more complex, and in many cases, that complexity becomes a breeding ground for new trouble.",
          "Of course, progress itself cannot simply be denied. But the assumption that progress is always right may need to be questioned from time to time.",
          "What we truly need may not be constant progress, but a structure that does not break even when it changes.",
        ],
      },
    },
  ];

  const selectedPost = useMemo(
    () => posts.find((post) => post.slug === selectedSlug) ?? posts[0],
    [posts, selectedSlug]
  );

  const openPost = (slug: string) => {
    setSelectedSlug(slug);
    setPage("post");
  };

  const text = {
    initiative: {
      jp: "INDEPENDENT INITIATIVE",
      en: "INDEPENDENT INITIATIVE",
    },
    about: {
      jp: "ABOUT",
      en: "ABOUT",
    },
    aboutTitle: {
      jp: "同じ違和感を持つ人を、静かに見つけるための場所。",
      en: "A place to quietly find people who feel the same kind of friction.",
    },
    aboutBody1: {
      jp: "SPARKは、ITという具体から出発しながら、その背後にある構造を言葉にしていくための独立した場です。正しいことを教えるための場所でも、議論で勝つための場所でもありません。",
      en: "SPARK is an independent place that starts from the concrete world of IT and tries to put the underlying structures into words. It is not a place to teach what is correct, nor a place to win arguments.",
    },
    aboutBody2: {
      jp: "この業界に違和感を持っているのに、うまく言葉にできない。正しいことは分かっているのに、どこか満たされない。そうした感覚を、そのまま置いておける場所が必要だと思いました。",
      en: "There are times when you feel friction in this industry but cannot fully articulate it. You may understand what is considered correct, yet still feel unsatisfied. I felt there needed to be a place where that sensation could simply remain as it is.",
    },
    aboutBody3: {
      jp: "ここでやりたいのは、仲間を集めることより先に、同じ感覚を持つ人が浮かび上がることです。ITサービス、組織、働き方、責任、属人化。テーマは具体でも、見ているものはいつも構造です。",
      en: "What I want here is not to gather followers first, but to let people with the same sensibility quietly emerge. IT services, organizations, ways of working, responsibility, person-dependence. The themes may be concrete, but what I am always looking at is structure.",
    },
    heroTitle1: {
      jp: "IT業界の構造に、",
      en: "For those who feel friction",
    },
    heroTitle2: {
      jp: "違和感を持っている人へ",
      en: "in the structure of the IT industry",
    },
    heroBody: {
      jp: "正しさではなく、違和感を言葉にする場所。整っていなくていい。結論がなくてもいい。ITという具体から出発しながら、その背後にある構造を静かに見つめる。",
      en: "A place not to insist on correctness, but to give language to friction. It does not have to be polished. It does not have to end in conclusions. Starting from the concrete world of IT, it quietly looks at the structures behind it.",
    },
    reality: {
      jp: "現実",
      en: "Reality",
    },
    realityBody: {
      jp: "現場では、問題が起きるたびに対処を重ね、何とか業務を回し続けています。しかしその裏側では、責任の曖昧さ、属人化、場当たり的な改善が積み重なり、サービスは静かに疲弊していきます。以下は、多くの国内企業で今なお繰り返されている実態です。",
      en: "In the field, people keep responding to one problem after another just to keep operations running. Yet underneath that, ambiguous responsibility, dependence on individuals, and patchwork improvements quietly exhaust the service. The following are realities still repeated in many companies today.",
    },
    realityCard1: {
      jp: "障害や問い合わせのたびに、担当者個人の経験と根性で乗り切っており、夜間や休日の対応が常態化している。",
      en: "Every incident or inquiry is somehow handled through the experience and sheer persistence of specific individuals, making night and weekend responses a normal part of life.",
    },
    realityCard2: {
      jp: "責任分界が曖昧なまま、部門やベンダ間で押し付け合いが起こり、最終的に現場だけが疲弊していく。",
      en: "With responsibilities left ambiguous, departments and vendors push issues onto one another, and in the end only the people on the ground are exhausted.",
    },
    realityCard3: {
      jp: "ツールや人員は増えても業務構造が変わらず、改善施策そのものが新たな複雑さを生んでしまっている。",
      en: "Even as tools and staff increase, the operating structure remains unchanged, and the improvement measures themselves end up creating new complexity.",
    },
    question: {
      jp: "問い",
      en: "Questions",
    },
    q1: {
      jp: "そのサービス、本当に構造から設計されていますか？",
      en: "Is that service truly designed from structure?",
    },
    q2: {
      jp: "なぜ改善は続かないのでしょうか？",
      en: "Why do improvements fail to continue?",
    },
    q3: {
      jp: "それは人の問題ではなく、構造の問題ではありませんか？",
      en: "Could it be not a people problem, but a structure problem?",
    },
    recentPosts: {
      jp: "RECENT POSTS",
      en: "RECENT POSTS",
    },
    recentTitle: {
      jp: "最近の違和感",
      en: "Recent Frictions",
    },
    ctaTitle1: {
      jp: "その違和感を、",
      en: "I want to create a place",
    },
    ctaTitle2: {
      jp: "そのまま置いておける場所をつくりたい。",
      en: "where that friction can remain as it is.",
    },
    ctaBody: {
      jp: "ここは答えを急ぐ場所ではなく、同じ感覚を持つ人が静かに見つかるための起点です。",
      en: "This is not a place that rushes toward answers. It is a starting point where people with the same sensibility can quietly find one another.",
    },
    back: {
      jp: "← BACK",
      en: "← BACK",
    },
    home: {
      jp: "← HOME",
      en: "← HOME",
    },
  } as const;

  if (page === "about") {
    return (
      <div className="min-h-screen bg-zinc-950 text-white bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_28%)]">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <button
            onClick={() => setPage("home")}
            className="text-sm tracking-wider text-emerald-300 transition hover:text-emerald-200"
          >
            {text.back[lang]}
          </button>

          <div className="flex items-center gap-4">
            <div className="text-xs tracking-[0.28em] text-zinc-500">{text.initiative[lang]}</div>
            <div className="flex items-center gap-2 text-xs tracking-[0.18em] text-zinc-500">
              <button
                onClick={() => setLang("jp")}
                className={lang === "jp" ? "text-emerald-300" : "hover:text-zinc-300"}
              >
                JP
              </button>
              <span>/</span>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "text-emerald-300" : "hover:text-zinc-300"}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm tracking-[0.28em] text-emerald-300">ABOUT SPARK</p>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{text.aboutTitle[lang]}</h1>
          <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-300">
            <p>{text.aboutBody1[lang]}</p>
            <p>{text.aboutBody2[lang]}</p>
            <p>{text.aboutBody3[lang]}</p>
          </div>
        </main>
      </div>
    );
  }

  if (page === "post") {
    return (
      <div className="min-h-screen bg-zinc-950 text-white bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.1),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.06),transparent_28%)]">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <button
            onClick={() => setPage("home")}
            className="text-sm tracking-wider text-emerald-300 transition hover:text-emerald-200"
          >
            {text.home[lang]}
          </button>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPage("about")}
              className="text-xs tracking-[0.24em] text-zinc-500 transition hover:text-zinc-300"
            >
              {text.about[lang]}
            </button>
            <div className="flex items-center gap-2 text-xs tracking-[0.18em] text-zinc-500">
              <button
                onClick={() => setLang("jp")}
                className={lang === "jp" ? "text-emerald-300" : "hover:text-zinc-300"}
              >
                JP
              </button>
              <span>/</span>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "text-emerald-300" : "hover:text-zinc-300"}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-6 py-14">
          <p className="text-sm tracking-[0.24em] text-zinc-500">{selectedPost.date}</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {selectedPost.title[lang]}
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-300">{selectedPost.excerpt[lang]}</p>

          <div className="mt-12 space-y-8 text-lg leading-9 text-zinc-300">
            {selectedPost.content[lang].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_28%)]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <button onClick={() => setPage("home")} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-green-300/70 shadow-md shadow-emerald-500/20" />
          <div className="text-left leading-tight">
            <div className="bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-xl font-semibold tracking-[0.2em] text-transparent">
              SPARK
            </div>
            <div className="text-[10px] tracking-[0.25em] text-zinc-500">STRUCTURE / LANGUAGE / RESONANCE</div>
          </div>
        </button>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-xs tracking-[0.24em] text-zinc-500">
            <button className="transition hover:text-zinc-300" onClick={() => setPage("about")}>
              {text.about[lang]}
            </button>
          </nav>

          <div className="flex items-center gap-2 text-xs tracking-[0.18em] text-zinc-500">
            <button
              onClick={() => setLang("jp")}
              className={lang === "jp" ? "text-emerald-300" : "hover:text-zinc-300"}
            >
              JP
            </button>
            <span>/</span>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-emerald-300" : "hover:text-zinc-300"}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 pb-18 pt-20 text-center">
          <p className="text-sm tracking-[0.3em] text-emerald-300">{text.initiative[lang]}</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {text.heroTitle1[lang]}
            <br />
            {text.heroTitle2[lang]}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            {text.heroBody[lang]}
          </p>

          <div className="mt-10 flex justify-center">
            <img
              src="/hero.png"
              alt="abstract structure"
              className="w-full max-w-2xl opacity-80"
            />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-8">
          <div className="rounded-[2rem] border border-emerald-400/15 bg-gradient-to-b from-emerald-500/10 to-white/0 p-8 shadow-2xl shadow-emerald-950/20 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-emerald-300 sm:text-4xl">{text.reality[lang]}</h2>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-8 text-zinc-300 md:text-lg">
              {text.realityBody[lang]}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                <p className="leading-7 text-zinc-200">{text.realityCard1[lang]}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                <p className="leading-7 text-zinc-200">{text.realityCard2[lang]}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                <p className="leading-7 text-zinc-200">{text.realityCard3[lang]}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-emerald-300 sm:text-4xl">{text.question[lang]}</h2>
          <div className="mt-10 space-y-6 text-lg text-zinc-200 sm:text-xl">
            <p>{text.q1[lang]}</p>
            <p>{text.q2[lang]}</p>
            <p className="text-emerald-300">{text.q3[lang]}</p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-sm tracking-[0.24em] text-zinc-500">{text.recentPosts[lang]}</p>
              <h2 className="mt-2 text-3xl font-semibold text-emerald-300">{text.recentTitle[lang]}</h2>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {posts.map((post) => (
              <button
                key={post.slug}
                onClick={() => openPost(post.slug)}
                className="group block w-full border-b border-white/10 pb-8 text-left transition hover:border-emerald-400/30"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-2xl font-semibold text-white transition group-hover:text-emerald-300">
                    {post.title[lang]}
                  </h3>
                  <span className="text-sm tracking-[0.18em] text-zinc-500">{post.date}</span>
                </div>
                <p className="mt-3 max-w-3xl leading-8 text-zinc-400">{post.excerpt[lang]}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-2xl font-semibold leading-snug text-zinc-100 sm:text-3xl">
            {text.ctaTitle1[lang]}
            <br />
            {text.ctaTitle2[lang]}
          </p>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">{text.ctaBody[lang]}</p>
        </section>
      </main>
    </div>
  );
}