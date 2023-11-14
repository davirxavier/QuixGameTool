import {Engine} from "./classes";
import {ENGINE_IMG} from "./constants";

export const EngineDescricao: {[engine: string]: string} = {
  [Engine.UNITY]: "A Unity é uma das engines mais conhecidas e utilizadas no mundo, possibilitando\n" +
  "a criação de jogos em 2D e 3D apesar de seu foco maior ser os jogos digitais em 3D. Seu uso\n" +
  "tem em foco ser extremamente otimizado e ótimos gráficos, utiliza também da linguagem de\n" +
  "programação C# para definição de eventos e interações do jogo. Alguns jogos criados por ela\n" +
  "são Cuphead, Hollow Knight, Fall Guys, Among Us e Inside.",
  [Engine.UNREAL]: "Unreal é uma engine desenvolvida pela Epic Games, uma das mais conhecidas\n" +
  "empresas de venda de jogos do mundo, tendo seu foco em jogos com gráficos realistas. Seu uso\n" +
  "vem pela linguagem de programação C++ ou também do Blueprints, utilizando uma programação\n" +
  "visual de arrasta e solta, tornando sua utilidade mais dinâmica e prática. Entre diversos jogos\n" +
  "criados por esta engine, alguns são Batman: Arkham City, Fortnite, Mortal Kombat 11, Bioshock\n" +
  "Infinte e Tekken 7.",
  [Engine.GODOT]: "A engine de nome Godot tem seu diferencial por ser totalmente gratuita e open-\n" +
  "source, possibilitando a criação de jogos em 2D e 3D por meio de uma arquitetura baseada em nós\n" +
  "e um editor visual. Por ser open-source, a utilização de linguagens de programação torna-se mais\n" +
  "ampla, possibilitando diversas disponibilizadas pela comunidade, porém as principais utilizadas\n" +
  "são C++, C# e GDScript, uma linguagem baseada em Python. Seu catálogo é composto por\n" +
  "exemplo pelos jogos TailQuest: Defense, Stereobreak, Shipwreck, Grimante e Deep Sixed.",
  [Engine.GAME_MAKER]: "Game Maker tem sua fama consolidada pela comunidade por ser a melhor engine\n" +
  "para criação de jogos em 2D. Obtendo-se também da facilidade de não ser necessário o uso de\n" +
  "linguagens de programação, utilizando uma mecânica de arrasta e solta para interagir com os\n" +
  "componentes, entretanto, ela possibilita escrever linhas de código com o uso da Game Maker\n" +
  "Language (GML). Uma parte moderada de sua utilização tem como exemplos Undertale, Katana\n" +
  "Zero, Deadbolt, Valdis Story e Deaths Gambit.",
  [Engine.RPG_MAKER]: "O RPG Maker busca seu diferencial em desenvolver jogos exclusivamente 2D de\n" +
  "gênero Role-playing Game (RPG), com estilo e design em 16 bits. Para o uso desta engine não\n" +
  "é exigido a escrita de linhas de código e uso de linguagens de programação, optando-se pela\n" +
  "mecânica de arrasta e solta para interagir com os componentes da mesma. Alguns jogos feitos\n" +
  "no Brasil por meio da engine são Lenin the Lion, Sur, Orca: A Lenda dos Mares e Wing of\n" +
  "Misadventure.",
  [Engine.CONSTRUCT]: "A game engine Construct visa sua estrutura de projeto em jogos 2D focada em Web,\n" +
  "tendo sua base em Hypertext Markup Language (HTML5). Permitindo criar seus jogos sem o uso\n" +
  "de linguagens de programação, obtendo-se de uma interface que faz uso da mecânica de arrasta\n" +
  "e solta baseada em lógica e planejamento visual, tendente a condições e eventos. Exemplos de\n" +
  "jogos criados utilizando Construc são Last Moon, Small Saga, Hypnospace Outlaw, Creature\n" +
  "Keeper e Guinea Pig Parkour.\n",
  [Engine.CRY_ENGINE]: "CryEngine é uma engine open source focada em projetar jogos do gênero First\n" +
  "Person Shooter (FPS). Desenvolvida pela empresa Crytek, faz uso de recursos integrados, código\n" +
  "aberto e um editor visual próprio. Seus nomes mais famosos feitos nesta engine são Crysis,\n" +
  "FarCry, Prey, WarFace e The Climb.\n",
  [Engine.PHASER]: "Phaser, em particular, oferece muitos exemplos e documentação para orientação. É\n" +
  "um framework usado para jogos 2D e 3D em HTML5, compatível com dispositivos móveis e\n" +
  "desktop, porem tendo seu foco para mobile. O desenvolvimento pode ser feito tanto em HTML5\n" +
  "quanto em JavaScript. Este framework utiliza os renderizadores Canvas e WebGL.",
  [Engine.GDEVELOP]: "O GDevelop, embora ainda não tenha produzido títulos de grande renome, representa\n" +
  "uma engine em crescimento no mercado. Trata-se de um motor de jogos 2D e 3D de código aberto\n" +
  "gratuito que se concentra na criação de jogos para plataformas como PC, dispositivos móveis\n" +
  "e web. Diferencia-se ao utilizar um sistema de eventos em vez de linguagem de programação,\n" +
  "semelhante ao Construct, o que permite a construção da lógica do jogo por meio de eventos\n" +
  "visuais compostos por condições e ações. Além disso, oferece um editor de Pixel Art integrado\n" +
  "chamado Pascal, bem como uma biblioteca de recursos gratuitos.\n"
};

export const EngineImagens: {[engine: string]: string} = {
  [Engine.UNITY]: ENGINE_IMG + "unity.png",
  [Engine.UNREAL]: ENGINE_IMG + "unreal.png",
  [Engine.GODOT]: ENGINE_IMG + "godot.png",
  [Engine.GAME_MAKER]: ENGINE_IMG + "gamemaker.png",
  [Engine.RPG_MAKER]: ENGINE_IMG + "rpgmaker.png",
  [Engine.CONSTRUCT]: ENGINE_IMG + "construct.png",
  [Engine.CRY_ENGINE]: ENGINE_IMG + "cryengine.png",
  [Engine.PHASER]: ENGINE_IMG + "phaser.png",
  [Engine.GDEVELOP]: ENGINE_IMG + "gdevelop.png"
};

export const EngineLinks: {[engine: string]: string} = {
  [Engine.UNITY]: "https://unity.com/pt",
  [Engine.UNREAL]: "https://www.unrealengine.com/",
  [Engine.GODOT]: "https://godotengine.org/",
  [Engine.GAME_MAKER]: "https://gamemaker.io/",
  [Engine.RPG_MAKER]: "https://www.rpgmakerweb.com/",
  [Engine.CONSTRUCT]: "https://www.construct.net/",
  [Engine.CRY_ENGINE]: "https://www.cryengine.com/",
  [Engine.PHASER]: "https://phaser.io/",
  [Engine.GDEVELOP]: "https://gdevelop.io/"
};
