"use client";
import { useMemo, useState } from "react";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

export default function SparkSite() {
  const [page, setPage] = useState<"home" | "about" | "post">("home");
  const [selectedSlug, setSelectedSlug] = useState<string>("why-it-ops-never-change");

  const posts: Post[] = [
    {
      slug: "why-it-ops-never-change",
      title: "なぜITサービスは何年経っても変わらないのか",
      date: "2026.03.30",
      excerpt:
        "同じ作業、同じ疲弊、同じ属人化。変えようとしているのに変わらない背景には、個人の問題ではなく構造の問題があります。",
      content: [
        "ITサービスの現場では、改善という言葉が日常的に使われています。ツールを入れ、手順を増やし、会議を重ね、インシデントが起きるたびに対策を積み上げる。それでも数年後に振り返ると、現場の疲れ方はほとんど変わっていないことがあります。",
        "なぜ変わらないのか。私は、その理由は努力不足ではなく構造にあると思っています。責任分界が曖昧なまま、現場が最後に吸収する。人が抜けると回らない前提のまま、個人の経験に依存する。変えることより止めないことが優先される。そうした前提の積み重なりが、サービスを固定化していきます。",
        "現場には優秀な人が多い。だからこそ、構造が悪いと人が無理をしてしまう。結果として、頑張る人ほど疲弊し、変わらない仕組みだけが残る。問題は人ではなく、変わらない方が安全だと思わせる構造にあります。",
      ],
    },
    {
      slug: "blame-culture",
      title: "なぜ障害対応は責任追及から始まるのか",
      date: "2026.03.31",
      excerpt:
        "障害が起きると、まず『誰の責任か』が問われる。この文化は問題解決を早めるどころか、構造的な改善を遠ざけている可能性があります。",
      content: [
        "障害が発生したとき、多くの現場ではまず原因ではなく『誰がやったのか』に焦点が当たります。もちろん責任の所在を明らかにすること自体は必要です。しかしそれが最初に来ることで、現場の空気は一気に防御的になります。",
        "人は責められる環境では本質的な情報を出しにくくなります。本来であれば共有されるべき判断の迷いや曖昧さ、構造的な問題が隠され、結果として表面的な対策だけが積み上がっていきます。",
        "本当に見るべきは、なぜその判断が起きたのか、なぜその状態を許容していたのかという構造です。責任追及から始まる限り、問題は個人に閉じ込められ、同じことが繰り返されます。",
      ],
    },
    {
      slug: "portal-fails",
      title: "セルフサービスポータルはなぜ定着しないのか",
      date: "2026.03.27",
      excerpt:
        "ポータルは便利なはずなのに、現場では使われない。そこにはツール以前の問題として、意思決定と業務フローの構造があります。",
      content: [
        "セルフサービスポータルという言葉には、いつも希望があります。申請が楽になる、依頼が減る、現場が自律的に動けるようになる。構想だけを聞くと、ほとんどの人が良いものだと感じるはずです。",
        "でも実際には、ポータルを作っただけでは使われません。なぜなら、既存の承認文化や属人的な調整がそのまま残っているからです。結局、最後は誰かに聞いた方が早い。ポータルより、顔なじみの担当者に連絡した方が通る。そういう構造のままでは、新しい入り口だけ作っても流れは変わりません。",
        "ツールを導入することと、使われる構造を作ることは違います。定着しない理由は、現場の理解不足ではなく、仕組みの前提が変わっていないことにあります。",
      ],
    },
    {
      slug: "democratizing-expertise",
      title: "サービスの民主化とは、専門家を不要にすることではない",
      date: "2026.03.24",
      excerpt:
        "専門家の知見を抽象化し、誰もが使える形にする。それは専門性を壊すことではなく、専門性の届き方を変えることです。",
      content: [
        "最近、民主化という言葉がいろいろな場所で使われています。コードの民主化、データの民主化、AIの民主化。便利な言葉ですが、誤解されやすい言葉でもあります。",
        "AIを使えば、コードを書いたことがなくてもサービスを作ることができる。それは確かにプログラムの民主化だと思う。ただ、トラブルが起きたときや、セキュリティに関わる問題が発生したとき、どこで何が起きているのかを理解し、正しく対処できるのはやはり専門家です。民主化とは、",
        "専門家を不要にすることではなく、専門家の力が届く範囲を広げることなのだと思います。ITサービスの民主化も同じです。それは、専門家を否定する話ではありません。むしろ逆で、専門家の知見を個人に閉じ込めたままにしないための考え方です。特定の人しかできない状態を、少しずつ",
        "構造に埋め込む。判断基準を明文化し、再現性を持たせ、誰が触っても最低限安全に動けるようにする。",
        "ITサービスも同じです。民主化されるのは操作や入り口であり、設計や深い専門性はむしろ価値が増していく。その境界をどう設計するかが、本当の論点だと思っています。",
      ],
    },
    {
      slug: "why-evolution",
      title: "ITの進化は本当に正しいのか",
      date: "2026.03.31",
      excerpt:
        "ITの進化は本当に正しいのか。新しい技術やツールの導入が、むしろ複雑さとトラブルを生んでいる可能性があります。",
      content: [
          "ITサービスの現場にいると、ふと疑問に思うことがあります。なぜこの業界は、ここまで進化し続けるのだろうかと。",
          "今の仕組みをそのまま維持していれば、実はトラブルはもっと少ないのではないか。そう感じる瞬間があります。",
          "メーカーはしのぎを削り、新しいツールや技術を次々と生み出し、それが市場に投入される。そして企業はそれを取り入れ、更新し、置き換えていく。",
          "一見すると、それは健全な進化のように見えます。しかし現場では、そのたびに変更コストが発生し、サービスは上書きされ、過去と現在が絡み合っていきます。",
          "結果として、構造は単純になるどころか複雑さを増し、新たなトラブルの温床になることも少なくありません。",
          "もちろん、進化そのものを否定することはできません。ただ、進化が常に正しいという前提は、一度立ち止まって見直す必要があるのではないかと思います。",
          "本当に必要なのは、進化することではなく、構造として安定していることなのかもしれません。",
  ],
},
    {
      slug: "air-over-value",
      title: "なぜ組織は「価値」ではなく「空気」に最適化されるのか",
      date: "2026.04.01",
      excerpt:
         "DXが進まない理由は技術ではなく構造にあるのかもしれません。組織のエネルギーが内に向くとき、変革は形だけのものになります。",
      content: [
          "組織の中で仕事をしていると、価値よりも空気に最適化されていると感じる瞬間があります。",
          "上からは、新しいツールやAIの導入が求められる。変化に乗り遅れてはいけない、という空気が作られる。",
          "もちろん、それ自体が間違っているわけではありません。ただ、その変化が本当に必要なものなのか、現場の状況と噛み合っているのかは、十分に検討されていないこともあります。",
          "実際には、最新のツールを入れなくても安定しているサービスがある。むしろ、構造やプロセス、責任の整理といった、より本質的な部分に投資すべき場面も少なくありません。",
          "それでも、方向は変わらない。",
          "なぜか。",
          "現場はその違和感を感じながらも、言葉にすることをためらう。",
          "現場を深く知らない上位の判断に対しても、正面から異を唱えることは難しい。",
          "結果として、人は価値ではなく、「評価される可能性」に最適化していく。",
          "明日の自分の評価を守るために、空気に合わせる。",
          "その積み重ねが、組織のエネルギーを外ではなく内に向けていく。",
          "本来であれば顧客や価値に向かうはずのエネルギーが、評価や空気を守るために使われ始める。",
          "そうなったとき、変革は形だけのものになる。",
          "DXが進まない理由は、新しい技術が足りないからではなく、組織のエネルギーが外ではなく内に向いていることにあるのかもしれません。"
  ],
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

  if (page === "about") {
    return (
      <div className="min-h-screen bg-zinc-950 text-white bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_28%)]">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <button
            onClick={() => setPage("home")}
            className="text-sm tracking-wider text-emerald-300 transition hover:text-emerald-200"
          >
            ← BACK
          </button>
          <div className="text-xs tracking-[0.28em] text-zinc-500">INDEPENDENT INITIATIVE</div>
        </header>

        <main className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm tracking-[0.28em] text-emerald-300">ABOUT SPARK</p>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">同じ違和感を持つ人を、静かに見つけるための場所。</h1>
          <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              SPARKは、ITという具体から出発しながら、その背後にある構造を言葉にしていくための独立した場です。正しいことを教えるための場所でも、議論で勝つための場所でもありません。
            </p>
            <p>
              この業界に違和感を持っているのに、うまく言葉にできない。正しいことは分かっているのに、どこか満たされない。そうした感覚を、そのまま置いておける場所が必要だと思いました。
            </p>
            <p>
              ここでやりたいのは、仲間を集めることより先に、同じ感覚を持つ人が浮かび上がることです。IT運用、組織、働き方、責任、属人化。テーマは具体でも、見ているものはいつも構造です。
            </p>
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
            ← HOME
          </button>
          <button
            onClick={() => setPage("about")}
            className="text-xs tracking-[0.24em] text-zinc-500 transition hover:text-zinc-300"
          >
            ABOUT
          </button>
        </header>

        <article className="mx-auto max-w-3xl px-6 py-14">
          <p className="text-sm tracking-[0.24em] text-zinc-500">{selectedPost.date}</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">{selectedPost.title}</h1>
          <p className="mt-6 text-xl leading-8 text-zinc-300">{selectedPost.excerpt}</p>

          <div className="mt-12 space-y-8 text-lg leading-9 text-zinc-300">
            {selectedPost.content.map((paragraph, index) => (
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
        <button
          onClick={() => setPage("home")}
          className="flex items-center gap-3"
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-green-300/70 shadow-md shadow-emerald-500/20" />
          <div className="leading-tight text-left">
            <div className="bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-xl font-semibold tracking-[0.2em] text-transparent">
              SPARK
            </div>
            <div className="text-[10px] tracking-[0.25em] text-zinc-500">STRUCTURE / LANGUAGE / RESONANCE</div>
          </div>
        </button>

        <nav className="flex items-center gap-6 text-xs tracking-[0.24em] text-zinc-500">
          <button className="transition hover:text-zinc-300" onClick={() => setPage("about")}>ABOUT</button>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 pb-18 pt-20 text-center">
          <p className="text-sm tracking-[0.3em] text-emerald-300">INDEPENDENT INITIATIVE</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            IT業界の構造に、
            <br />
            違和感を持っている人へ
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            正しいことより、違和感を言葉にする場所。整っていなくていい。結論がなくてもいい。
            ITという具体から出発しながら、その背後にある構造を静かに見つめるために、SPARKを作りました。
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-8">
          <div className="rounded-[2rem] border border-emerald-400/15 bg-gradient-to-b from-emerald-500/10 to-white/0 p-8 md:p-10 shadow-2xl shadow-emerald-950/20">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-emerald-300 sm:text-4xl">現実</h2>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-8 text-zinc-300 md:text-lg">
              現場では、問題が起きるたびに対処を重ね、何とか業務を回し続けています。しかしその裏側では、責任の曖昧さ、属人化、場当たり的な改善が積み重なり、運用は静かに疲弊していきます。以下は、多くの国内企業で今なお繰り返されている実態です。
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                <p className="leading-7 text-zinc-200">
                  障害や問い合わせのたびに、担当者個人の経験と根性で乗り切っており、夜間や休日の対応が常態化している。
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                <p className="leading-7 text-zinc-200">
                  責任分界が曖昧なまま、部門やベンダ間で押し付け合いが起こり、最終的に現場だけが疲弊していく。
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
                <p className="leading-7 text-zinc-200">
                  ツールや人員は増えても業務構造が変わらず、改善施策そのものが新たな複雑さを生んでしまっている。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-emerald-300 sm:text-4xl">問い</h2>
          <div className="mt-10 space-y-6 text-lg text-zinc-200 sm:text-xl">
            <p>その運用、本当に構造から設計されていますか？</p>
            <p>なぜ改善は続かないのでしょうか？</p>
            <p className="text-emerald-300">それは人の問題ではなく、構造の問題ではありませんか？</p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-sm tracking-[0.24em] text-zinc-500">RECENT POSTS</p>
              <h2 className="mt-2 text-3xl font-semibold text-emerald-300">最近の違和感</h2>
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
                  <h3 className="text-2xl font-semibold text-white transition group-hover:text-emerald-300">{post.title}</h3>
                  <span className="text-sm tracking-[0.18em] text-zinc-500">{post.date}</span>
                </div>
                <p className="mt-3 max-w-3xl leading-8 text-zinc-400">{post.excerpt}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-2xl font-semibold leading-snug text-zinc-100 sm:text-3xl">
            その違和感を、
            <br />
            そのまま置いておける場所をつくりたい。
          </p>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            ここは答えを急ぐ場所ではなく、同じ感覚を持つ人が静かに見つかるための起点です。
          </p>
        </section>
      </main>
    </div>
  );
}
