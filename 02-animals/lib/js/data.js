const data = {
  animals: [
    {
      name: "Quokka",
      description:
        "The Quokka is a small marsupial known for its friendly and smile-like facial expression. It is native to Western Australia.",
    },
    {
      name: "Xoloitzcuintli",
      description:
        "The Xoloitzcuintli, also known as the Mexican Hairless Dog, is a rare breed native to Mexico. It is a loyal and intelligent companion.",
    },
    {
      name: "Pangolin",
      description:
        "Pangolins are unique mammals covered in scales, resembling armored creatures. They are found in Africa and Asia and are known for their ability to curl into a ball for protection.",
    },
    {
      name: "Axolotl",
      description:
        "The Axolotl is a fascinating amphibian native to Mexico. It retains its juvenile features throughout its life and can regenerate lost body parts.",
    },
    {
      name: "Narwhal",
      description:
        "The Narwhal is a medium-sized whale with a long, spiral tusk protruding from its head. It inhabits Arctic waters and is often referred to as the 'unicorn of the sea.'",
    },
    {
      name: "Zonkey",
      description:
        "A Zonkey is an unusual hybrid animal resulting from the crossbreeding of a zebra and a donkey. It exhibits characteristics of both species.",
    },
    {
      name: "Okapi",
      description:
        "The Okapi is a secretive forest-dwelling mammal native to the Democratic Republic of Congo. It resembles a combination of a giraffe and a zebra.",
    },
    {
      name: "Kakapo",
      description:
        "The Kakapo is a critically endangered parrot species from New Zealand. It is flightless and known for its unique mating call and friendly personality.",
    },
    {
      name: "Quetzal",
      description:
        "The Quetzal is a brilliantly colored bird found in the cloud forests of Central America. It has long, vibrant tail feathers and is considered a symbol of beauty.",
    },
    {
      name: "Coati",
      description:
        "Coatis are small mammals native to the Americas. They have long, flexible snouts and ringed tails, and are known for their climbing and foraging abilities.",
    },
    {
      name: "Wombat",
      description:
        "The Wombat is a sturdy marsupial found in Australia. It has a stocky build, powerful legs, and is well adapted for digging burrows.",
    },
    {
      name: "Marmoset",
      description:
        "Marmosets are small primates native to South America. They have long tails, claw-like nails, and exhibit complex social behaviors.",
    },
    {
      name: "Lemur",
      description:
        "Lemurs are unique primates found only on the island of Madagascar. They have distinctive faces, long tails, and some species can leap remarkable distances.",
    },
    {
      name: "Capybara",
      description:
        "Capybaras are the largest rodents in the world. They are semi-aquatic and can be found in South America, often seen near bodies of water.",
    },
    {
      name: "Kinkajou",
      description:
        "The Kinkajou is a small mammal native to Central and South America. It has a prehensile tail, large eyes, and is known for its ability to rotate its ankles backwards.",
    },
    {
      name: "Dik-dik",
      description:
        "Dik-diks are small antelopes found in Eastern and Southern Africa. They are known for their distinctive, elongated snouts and large, expressive eyes.",
    },
    {
      name: "Tapir",
      description:
        "Tapirs are large herbivorous mammals found in parts of Asia, Central America, and South America. They have short trunks and unusual, elongated snouts.",
    },
    {
      name: "Tarsier",
      description:
        "Tarsiers are small primates with enormous eyes, long tails, and the ability to rotate their heads almost 180 degrees. They are found in Southeast Asia.",
    },
    {
      name: "Numbat",
      description:
        "The Numbat is a small marsupial found in Western Australia. It is also known as the banded anteater and has a long sticky tongue for catching termites.",
    },
    {
      name: "Wallaroo",
      description:
        "Wallaroos are large kangaroo-like marsupials found in Australia. They have powerful hind legs, broad shoulders, and can hop long distances.",
    },
    {
      name: "Aye-aye",
      description:
        "The Aye-aye is a unique lemur native to Madagascar. It has large eyes, bushy tail, and a specialized elongated finger for finding and extracting insects from tree bark.",
    },
    {
      name: "Gerenuk",
      description:
        "Gerenuks are slender antelopes found in East Africa. They have long necks and legs, and are known for their ability to stand on their hind legs to browse high branches.",
    },
    {
      name: "Vicuña",
      description:
        "The Vicuña is a small camelid found in the high Andes mountains of South America. It produces the finest wool of any animal and is highly prized.",
    },
    {
      name: "Fossa",
      description:
        "The Fossa is a carnivorous mammal endemic to Madagascar. It resembles a cross between a cat and a mongoose and is known for its agility and tree-climbing skills.",
    },
    {
      name: "Fennec",
      description:
        "The Fennec Fox is a small fox species found in the Sahara Desert of North Africa. It has large ears, which help dissipate heat, and is well adapted to desert life.",
    },
    {
      name: "Serval",
      description:
        "The Serval is a medium-sized wild cat found in Africa. It has a slender body, long legs, and is known for its exceptional jumping ability.",
    },
    {
      name: "Mandrill",
      description:
        "Mandrills are large monkeys found in the rainforests of Central Africa. They have strikingly colorful faces and are known for their social structures and expressive behaviors.",
    },
    {
      name: "Binturong",
      description:
        "The Binturong, also known as the bearcat, is a carnivorous mammal found in Southeast Asia. It has a prehensile tail and emits a unique odor, resembling popcorn.",
    },
    {
      name: "Kiwi",
      description:
        "The Kiwi is a flightless bird native to New Zealand. It is known for its small size, long beak, and unique ability to lay large eggs relative to its body size.",
    },
    {
      name: "Kookaburra",
      description:
        "Kookaburras are large, terrestrial kingfishers native to Australia and New Guinea. They have a distinctive call that resembles laughter and are known for their hunting prowess.",
    },
    {
      name: "Nene",
      description:
        "The Nene, or Hawaiian Goose, is a rare bird species endemic to Hawaii. It is the state bird and is known for its adaptability to high-altitude environments.",
    },
    {
      name: "Takahe",
      description:
        "The Takahe is a flightless bird found only in New Zealand. It was once thought to be extinct but was rediscovered, making it a symbol of conservation efforts.",
    },
    {
      name: "Kiwa hirsuta",
      description:
        "Kiwa hirsuta, also known as the Yeti crab, is a crustacean discovered in the deep sea near Antarctica. It is notable for its hairy appearance and the presence of filamentous bacteria on its claws.",
    },
    {
      name: "Kiwa puravida",
      description:
        "Kiwa puravida, also known as the Purple-yeti crab, is a species of crab found in the Pacific Ocean off Costa Rica. It has a striking purple coloration and hairy appendages.",
    },
    {
      name: "Kiwa tyleri",
      description:
        "Kiwa tyleri, also known as the Hoff crab, is a deep-sea species found near hydrothermal vents in the Southern Ocean. It has long, spindly legs and is adapted to extreme conditions.",
    },
  ],
  birds: [
    {
      name: "Hoatzin",
      description:
        "The Hoatzin is a unique bird found in the Amazon rainforest. It has a spiky crest, blue facial skin, and a distinctive odor due to its digestive system.",
    },
    {
      name: "Anhinga",
      description:
        "The Anhinga, also known as the snakebird, is a water bird found in the Americas. It has a long neck, sharp beak, and is known for its underwater hunting abilities.",
    },
    {
      name: "Kakapo",
      description:
        "The Kakapo is a critically endangered parrot species from New Zealand. It is flightless and known for its unique mating call and friendly personality.",
    },
    {
      name: "Frigatebird",
      description:
        "Frigatebirds are large seabirds found in tropical and subtropical oceans. They have long wingspans, forked tails, and are known for their aerial agility.",
    },
    {
      name: "Marabou",
      description:
        "The Marabou is a large wading bird found in Africa. It has a bald head, long neck, and is known for its scavenging habits and distinctive appearance.",
    },
    {
      name: "Sunbird",
      description:
        "Sunbirds are small, colorful birds found in Africa, Asia, and Australia. They have curved bills and vibrant plumage, and feed mainly on nectar.",
    },
    {
      name: "Takahe",
      description:
        "The Takahe is a flightless bird found only in New Zealand. It was once thought to be extinct but was rediscovered, making it a symbol of conservation efforts.",
    },
    {
      name: "Quetzal",
      description:
        "The Quetzal is a brilliantly colored bird found in the cloud forests of Central America. It has long, vibrant tail feathers and is considered a symbol of beauty.",
    },
    {
      name: "Motmot",
      description:
        "Motmots are colorful birds found in Central and South America. They have long, racket-shaped tail feathers and are known for their distinctive calls.",
    },
    {
      name: "Avocet",
      description:
        "Avocets are elegant wading birds with long legs and upward-curving bills. They are found in various parts of the world and are known for their graceful movements.",
    },
    {
      name: "Eider",
      description:
        "Eiders are large sea ducks found in the Northern Hemisphere. They have thick down feathers and are known for their distinctive mating displays.",
    },
    {
      name: "Bobolink",
      description:
        "The Bobolink is a small songbird found in North America. It has a black and white plumage, and males have a unique bubbling song during the breeding season.",
    },
    {
      name: "Puffin",
      description:
        "Puffins are seabirds that breed in colonies on cliffs and islands. They have colorful beaks, unique diving abilities, and are often referred to as 'clowns of the sea.'",
    },
    {
      name: "Waxwing",
      description:
        "Waxwings are medium-sized birds known for their silky plumage and waxy red tips on their wing feathers. They are found in the Northern Hemisphere.",
    },
    {
      name: "Ibis",
      description:
        "Ibises are long-legged wading birds found in wetlands around the world. They have curved bills and are known for their distinctive feeding behavior.",
    },
    {
      name: "Gannet",
      description:
        "Gannets are large seabirds that plunge-dive from the air to catch fish. They have long wings, a distinctive head shape, and are excellent swimmers.",
    },
    {
      name: "Cormorant",
      description:
        "Cormorants are aquatic birds found worldwide. They have excellent diving and swimming abilities, and their plumage is adapted for efficient water shedding.",
    },
    {
      name: "Spoonbill",
      description:
        "Spoonbills are large wading birds with distinctive spoon-shaped bills. They are found on every continent except Antarctica and are known for their unique feeding behavior.",
    },
    {
      name: "Tanager",
      description:
        "Tanagers are colorful songbirds found primarily in the Americas. They have bright plumage and melodious songs, and are a popular sight in tropical forests.",
    },
    {
      name: "Lyrebird",
      description:
        "Lyrebirds are ground-dwelling birds native to Australia. They are known for their remarkable ability to mimic sounds, including other bird calls and human-made noises.",
    },
    {
      name: "Rook",
      description:
        "Rooks are medium-sized black birds in the crow family. They are highly social and form large rookeries where they nest and gather in communal roosts.",
    },
    {
      name: "Bowerbird",
      description:
        "Bowerbirds are known for their elaborate courtship behavior. The males build intricate structures called bowers and decorate them with various objects to attract mates.",
    },
    {
      name: "Bee-eater",
      description:
        "Bee-eaters are colorful birds found in Africa, Asia, and Europe. They have long, slender bills and feed mainly on bees and other flying insects.",
    },
  ],
  insects: [
    {
      name: "Goliath Beetle",
      description:
        "Goliath Beetles are among the largest beetles in the world. They have impressive size and colorful exoskeletons, and are found in African rainforests.",
    },
    {
      name: "Atlas Moth",
      description:
        "The Atlas Moth is one of the largest moth species in the world. It has intricately patterned wings and is found in the tropical and subtropical regions of Asia.",
    },
    {
      name: "Luna Moth",
      description:
        "The Luna Moth is a large, pale green moth with long, trailing hindwing tails. It is found in North America and is known for its beautiful appearance.",
    },
    {
      name: "Hornet",
      description:
        "Hornets are large and aggressive wasps found in various parts of the world. They have powerful stings and build intricate paper nests.",
    },
    {
      name: "Walking Stick",
      description:
        "Walking Sticks are long and slender insects that resemble twigs or branches. They are excellent at camouflage and are found in forests around the world.",
    },
    {
      name: "Orchid Mantis",
      description:
        "The Orchid Mantis is a fascinating insect that resembles a flower petal. It is found in Southeast Asia and is known for its remarkable camouflage.",
    },
    {
      name: "Giant Water Bug",
      description:
        "Giant Water Bugs are large predatory insects that live in freshwater habitats. They have powerful front legs used for catching prey and are found worldwide.",
    },
    {
      name: "Elephant Beetle",
      description:
        "Elephant Beetles are large beetles known for their distinctively shaped and elongated mandibles. They are found in various parts of the world.",
    },
    {
      name: "Leafcutter Ant",
      description:
        "Leafcutter Ants are known for their remarkable leaf-cutting behavior. They use the leaves to cultivate a specialized fungus for food and are found in the Americas.",
    },
    {
      name: "Velvet Ant",
      description:
        "Velvet Ants, also known as cow killers, are actually wasps and not true ants. The females have a striking, fuzzy appearance and deliver a painful sting.",
    },
    {
      name: "Giant Mesquite Bug",
      description:
        "Giant Mesquite Bugs are large, colorful insects found in the southwestern United States and Mexico. They feed on mesquite trees and emit a strong odor when disturbed.",
    },
    {
      name: "Mantis Shrimp",
      description:
        "Mantis Shrimps are small, but mighty crustaceans known for their incredible strength and striking colors. They have powerful claws used for hunting and defense.",
    },
    {
      name: "Jewel Beetle",
      description:
        "Jewel Beetles, also known as metallic wood-boring beetles, are known for their brilliant iridescent colors. They are found worldwide and often infest dead wood.",
    },
    {
      name: "Assassin Bug",
      description:
        "Assassin Bugs are predatory insects that feed on other insects. They have a sharp beak used to inject venom into their prey and are found in diverse habitats.",
    },
    {
      name: "Giant Swallowtail",
      description:
        "The Giant Swallowtail is one of the largest butterflies in North America. It has striking black and yellow patterns on its wings and is known for its graceful flight.",
    },
    {
      name: "Atlas Beetle",
      description:
        "Atlas Beetles are large beetles with impressive horns on their heads. They are found in Southeast Asia and are known for their strength and formidable appearance.",
    },
    {
      name: "Praying Mantis",
      description:
        "Praying Mantises are predatory insects with elongated bodies and powerful front legs used for capturing prey. They are known for their distinctive posture.",
    },
    {
      name: "Firefly",
      description:
        "Fireflies, also known as lightning bugs, are beetles known for their bioluminescent ability. They produce light to attract mates and are found worldwide.",
    },
    {
      name: "Leaf Beetle",
      description:
        "Leaf Beetles are a diverse family of beetles known for their vibrant colors and intricate patterns. They are found in various habitats and often feed on plant leaves.",
    },
    {
      name: "Dragonfly",
      description:
        "Dragonflies are large and agile insects with two pairs of wings. They are known for their impressive flying skills and are found near water bodies worldwide.",
    },
  ],
};
