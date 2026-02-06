import lexieImg from "@/assets/images/crew/lexie.jpg";
import rajImg from "@/assets/images/crew/raj.jpg";
import samImg from "@/assets/images/crew/sam.jpg";
import sofiaImg from "@/assets/images/crew/sofia.jpg";
import takalaImg from "@/assets/images/crew/takala.jpg";
import tinyImg from "@/assets/images/crew/tiny.jpg";
import sadieImg from "@/assets/images/crew/sadie.jpg";

import lexieHero from "@/assets/images/crew/lexiehero.jpg";
import rajHero from "@/assets/images/crew/rajhero.jpg";
import samHero from "@/assets/images/crew/samhero.jpg";
import sofiaHero from "@/assets/images/crew/sofiahero.jpg";
import takalaHero from "@/assets/images/crew/takalahero.jpg";
import tinyHero from "@/assets/images/crew/tinyhero.jpg";
import sadieHero from "@/assets/images/crew/sadiehero.jpg";

const CrewDetails = [
	{
		// =========================
		// SAMUEL MERCER
		// =========================
		slug: "samuel-mercer",
		name: "Samuel Mercer",
		callSign: "MERCER",
		role: "Captain-Owner of the Niña",
		image: samImg,
		header: samHero,
		accent: "from-[#79c0ff] via-[#8b5cf6] to-[#f472b6]",

		logline: "A leader who doesn’t chase glory, only the least catastrophic option.",
		personal: {
			firstName: "Samuel",
			middleName: "Evan",
			lastName: "Mercer",

			dob: "September 11th, 2210",
			age: "Mid-40s",
			pob: "New York City, North-American Sector",

			height: "6’1”",
			weight: "215 lbs",
			build: "Lean, athletic",
			dominantHand: "Right",

			eyeColor: "Green",
			hairColor: "Auburn",

			citizenship: "United Earth Charter",
			maritalStatus: "Divorced",
			dependents: "None on record",
			nextOfKin: "Redacted",

			formerAffiliation: "UN Space Navy",
			currentAffiliation: "Independent Contractor (GECO)",
			status: "UN Space Navy Retired",

			serviceId: "UNSN-AR537-HF732",
			medicalStatus: "Fit for duty (conditional)",
			psychEval: "Clearance maintained under monitoring",
		},

		// Optional structured dossier (GECO Personnel File)
		dossier: {
			agency: "GECO",
			division: "Intelligence Division · Personnel Archive",
			fileType: "GECO PERSONNEL FILE",
			fileId: "GECO-CPT-MERCER-SAM",
			classification: "OMEGA-RESTRICTED",
			clearanceRequired: "GECO-L5",
			status: "ACTIVE - PROBATIONARY CHARTER",
			primaryAsset: "Exploration Vessel NIÑA (private ownership)",
			assignmentModel: "3-month renewable contracts",
			oversight: {
				medical: "Monthly implant report required",
				psychological: "Periodic evaluation mandated",
			},
			notes: [
				"Accepted under non-standard captain program",
				"Operational autonomy granted under strict compliance hooks",
				"Demonstrates repeated pattern of independent decision override under uncertainty",
				"Subject prioritizes crew survival over mission compliance in conflict scenarios",
				"Risk classification elevated due to symbiotic dependency with non-human entity (see REDACTED ADDENDUM)",
			],

			background: `Samuel Mercer was raised in upstate New York. Only child. No siblings and no documented extended family influence. His early life was marked by emotional distance rather than instability, with evaluators noting a preference for solitude, routine, and controlled environments. Academic performance was unremarkable but consistent, with no disciplinary incidents or ideological indicators during adolescence. Mercer enlisted immediately after high school, citing no stated motivation beyond service suitability.

      Mercer served fifteen years in the United Nations Space Forces. While his official record reflects standard advancement and commendations for performance under extreme operational conditions, the majority of his service history remains classified or compartmentalized under black-level authorization. Internal reassignment patterns indicate repeated placement in missions operating beyond conventional command visibility, often involving incomplete intelligence, unclear objectives, or morally ambiguous outcomes. Psychological profiles from this period describe a subject capable of prolonged exposure to ethically compromised operations without emotional collapse or loss of functional clarity.

      The incident precipitating Mercer’s departure from the UN Space Forces remains sealed. Available summaries indicate that the separation was formally classified as voluntary retirement following a closed incident review, though internal annotations suggest irreconcilable divergence between Mercer’s judgment and institutional risk tolerance. Post-service behavior reflects a deliberate withdrawal from centralized command structures and a shift toward self-directed operational autonomy.

      Mercer later assumed command of the exploration vessel Niña, assembling a crew selected less for obedience than for reliability under failure conditions. Observers note that Mercer’s leadership style prioritizes containment, survivability, and accountability over mission success metrics. While outwardly restrained, Mercer exhibits a persistent internal burden associated with past decisions that could not be undone or publicly acknowledged. His continued operations suggest not a search for redemption, but an attempt to maintain agency in a universe where relinquishing control once proved catastrophic.`,
		},

		// Backward compatible quick stats (used by your current UI)
		quick: [
			{ k: "Origin", v: "Earth-born, United Earth Charter" },
			{ k: "GECO Standing", v: "Probationary charter, short renewals" },
			{ k: "Temperament", v: "Sarcastic, vigilant, stubbornly humane" },
			{ k: "Specialty", v: "Command decisions under extreme uncertainty" },
		],

		// Backward compatible bio (used by your current UI)
		bio: `Following separation from military service, Mercer acquired the exploration vessel Niña from a scrapyard on Luna. He subsequently assembled a civilian crew composed of specialists with prior exposure to high-risk or non-standard operational environments. The vessel operates under GECO charter as part of the Non-Standard Captains Program. 
    
    Mercer displays no interest in public recognition or long-term affiliation. Primary motivation appears to be continued operational relevance under reduced institutional constraint.`,

		// Optional richer structured content (perfect for a GECO-like renderer later)
		sections: [
			{
				title: "APPEARANCE AND PRESENCE",
				visibility: "readerSafe",
				kind: "bullets",
				content: [
					"Mid-40s, fit without looking like a recruitment poster.",
					"Relaxed posture that hides constant scanning.",
					"Old-military reflexes, none of the rigid theatrics.",
					"Eyes: alert, tired, intelligent.",
				],
			},
			{
				title: "REDACTED ADDENDUM",
				visibility: "spoiler",
				kind: "bullets",
				content: [
					"The symbiosis with SADIE is irreversible and imposes a constant neurological load on the host.",
					"If the bond becomes understood by external forces, Mercer risks becoming an asset, not a person.",
				],
			},
		],

		// Backward compatible facts (used by your current UI)
		noSpoilerFacts: [
			"Accepted into GECO under a non-standard captain program with strict probation terms.",
			"Operates under a GECO charter: licenses can be revoked quickly.",
			"Prioritizes containment and crew integrity over data capture.",
			"Uses humor as a pressure valve when reality starts lying.",
		],
		spoilerFacts: [
			"The symbiosis with SADIE is irreversible and carries a constant biological cost.",
			"Mercer becomes a strategic liability if the bond is exposed to the wrong institutions.",
		],

		gallery: [],
		isSpoilerSensitive: false,
	},

	{
		// =========================
		// SOFIA REYES
		// =========================
		slug: "sofia-reyes",
		name: "Sofia Reyes",
		callSign: "SOF",
		role: "Chief Engineer",
		image: sofiaImg,
		header: sofiaHero,
		accent: "from-[#ffb86b] via-[#f97316] to-[#ef4444]",

		logline: "She fixes problems the universe insists on inventing in real time.",

		personal: {
			firstName: "Sofia",
			middleName: "Marisol",
			lastName: "Reyes",

			dob: "July 12th, 2218",
			age: "Late 30s",
			pob: "Asteroid Belt",

			height: "5’7”",
			weight: "145 lbs",
			build: "Compact, muscular",
			dominantHand: "Right",

			eyeColor: "Brown",
			hairColor: "Dark brown",

			citizenship: "United Earth Charter",
			maritalStatus: "Single",
			dependents: "None on record",
			nextOfKin: "On file",

			formerAffiliation: "Independent Mining Operations",
			currentAffiliation: "Chief Engineer – Niña (GECO contract)",
			status: "Active",

			serviceId: "GECO-ENG-33904-SMR",
			medicalStatus: "Fit for duty",
			psychEval: "Cleared; high stress tolerance, low institutional compliance",
		},

		dossier: {
			agency: "GECO",
			division: "Operations Support · Vessel Engineering",
			fileType: "CREW PROFILE",
			fileId: "GECO-ENG-REYES-SOFIA",
			classification: "RESTRICTED",
			clearanceRequired: "GECO-L3",
			status: "ACTIVE",
			primaryAsset: "NIÑA - Engineering Bay",
			assignmentModel: "Niña crew contract",
			oversight: {
				medical: "Standard",
				psychological: "As-needed",
				restrictions: [],
			},
			notes: [
				"High improvisation capacity under anomalous conditions",
				"Demonstrates non-standard engineering intuition bordering on intuitive system modeling",
				"Repeatedly bypasses certified safety protocols when failure probability exceeds procedural tolerance",
				"UNVERIFIED ASSESSMENT: Subject displays emotional attachment to vessel NIÑA exceeding contractual norms",
				"Co-ownership status may compromise formal chain-of-command compliance under crisis conditions",
			],
			background: `Sofia Reyes was born aboard a family-operated mining and salvage vessel in the asteroid belt. No planetary birthplace is recorded. She is the only daughter in a family of five children, raised entirely in continuous microgravity and industrial conditions. From an early age, her environment consisted of hull plating, power conduits, pressure alarms, and emergency repairs conducted while the ship was still in motion. Childhood education was informal and fragmented, shaped by necessity rather than curriculum.

      Reyes acquired engineering competence through long-term exposure to salvage operations rather than accredited technical programs. Her training is assessed as practical, adaptive, and ongoing. She demonstrated an early aptitude for restoring and maintaining vessels officially classified as non-viable, frequently operating with incomplete schematics and degraded systems. She is known to bypass safety interlocks and procedural safeguards when time-to-failure calculations exceed acceptable margins, prioritizing survivability over compliance. Communication style is direct, confrontational, and often profane. Performance under sustained stress is rated as consistently high.

      Psychological assessments indicate that Reyes forms strong attachments to ships and crews she considers her own. The Niña, in particular, represents both a professional investment and a personal anchor. Partial ownership of the vessel is not merely contractual; it is central to her identity and sense of control in an otherwise unstable existence. Loss of the ship is projected to result in significant psychological destabilization.

      Reyes serves as chief engineer under Captain Samuel Mercer. While their professional relationship is marked by frequent friction, internal observations suggest a deeper, unresolved personal attachment on Reyes’s part. This attachment has not been acted upon and remains unacknowledged in formal settings. Behavioral analysis indicates that her loyalty to Mercer exceeds standard crew norms and may influence risk tolerance during critical operations. Reyes herself appears aware of this imbalance and compensates through heightened aggression, sarcasm, and deliberate emotional deflection.

      Despite these factors, no ideological, political, or external alignment has been detected. Reyes operates from a personal code defined by survival, mechanical integrity, and protection of those she considers family. She is not motivated by belief systems or causes, but by an instinctive refusal to abandon a ship, a crew, or a captain once committed. This trait is assessed as both a strategic asset and a potential liability under extreme conditions.`,
		},

		quick: [
			{ k: "Origin", v: "Industrial zones and salvage culture" },
			{ k: "Temperament", v: "Abrasive, loyal, brutally competent" },
			{ k: "Specialty", v: "Keep-the-ship-alive improvisation" },
		],

		bio: `Sofia Reyes treats the Niña like a stubborn, semi-sentient machine that responds best to pressure, improvisation, and occasional verbal abuse. Where others see systems and schematics, she sees habits, moods, and weak points. 

    Her humor is sharp, frequently abrasive, and rarely filtered. Reyes operates most comfortably in high-stress environments, where quick judgment and mechanical intuition matter more than protocol or polish.`,

		sections: [
			{
				title: "KNOWN FACTS",
				visibility: "readerSafe",
				kind: "bullets",
				content: [
					"Improvises hardware solutions when systems go “impossible”.",
					"Doesn’t trust miracles, only mechanics.",
					"Protects the crew like an older sibling with a wrench.",
				],
			},
		],

		noSpoilerFacts: [
			"Improvises hardware solutions when systems go “impossible”.",
			"Doesn’t trust miracles, only torque, pressure, and heat.",
			"Protects the crew like an older sibling with a wrench.",
		],
		spoilerFacts: [],
		gallery: [],
		isSpoilerSensitive: false,
	},

	{
		// =========================
		// LEXIE HOWARD
		// =========================
		slug: "lexie-howard",
		name: "Lexie Howard",
		callSign: "LEX",
		role: "Navigation / Astrodynamics",
		image: lexieImg,
		header: lexieHero,
		accent: "from-[#a7f3d0] via-[#34d399] to-[#22c55e]",

		logline: "If the stars stop obeying, she’s the first to notice and the last to look away.",

		personal: {
			firstName: "Alexandra",
			middleName: "Elizabeth",
			lastName: "Howard",

			dob: "November 2nd, 2222",
			age: "Early 30s",
			pob: "Oxford, United Kingdom, Earth",

			height: "5’8”",
			weight: "135 lbs",
			build: "Slender",
			dominantHand: "Right",

			eyeColor: "Blue",
			hairColor: "Blonde",

			citizenship: "United Earth Charter",
			maritalStatus: "Single",
			dependents: "None on record",
			nextOfKin: "On file",

			formerAffiliation: "Royal Astrodynamics Institute (UK)",
			currentAffiliation: "Navigation Specialist – Niña (GECO contract)",
			status: "Active",

			serviceId: "GECO-NAV-22791-AEH",
			medicalStatus: "Fit for duty",
			psychEval: "Cleared; elevated cognitive focus, emotional restraint noted",
		},

		dossier: {
			agency: "GECO",
			division: "Flight Operations · Astrodynamics",
			fileType: "CREW PROFILE",
			fileId: "GECO-NAV-HOWARD-LEXIE",
			classification: "RESTRICTED",
			clearanceRequired: "GECO-L3",
			status: "ACTIVE",
			primaryAsset: "NIÑA - Nav Console",
			assignmentModel: "Niña crew contract",
			oversight: {
				medical: "Standard",
				psychological: "As-needed",
				restrictions: [],
			},
			notes: [
				"Pattern detection unusually high under corridor instability",
				"Demonstrates exceptional system intuition beyond formal training",
				"Background includes unauthorized system access during Naval Academy tenure",
				"UNVERIFIED ASSESSMENT: Subject’s association with the Draugr collective appears driven by information access rather than anti-institutional ideology. Family disavowal likely reinforced operational independence. No evidence of ongoing external allegiance.",
			],
			background: `Lexie Howards was born into a high-status family within the United Kingdom, raised in an environment defined by expectation, control, and institutional loyalty. Her early education was private and elite, and she entered the Naval Academy through a fast-track program specializing in navigation systems, astrometrics, and secure communications. Academic performance was classified as exceptional, marked by an unusual ability to identify systemic vulnerabilities alongside theoretical mastery.

      Howards was expelled from the Naval Academy following an internal security breach traced to her unauthorized penetration of academy systems. Official findings cite violation of security doctrine; internal notes suggest the breach exposed structural flaws the institution was unwilling to acknowledge. Subsequent family disavowal is documented. Following expulsion, Howards severed formal institutional ties and became associated with the decentralized hacker collective known as Draugr. Her activities included network intrusion, signal manipulation, and deliberate corruption of navigation data targeting governmental and corporate infrastructure, often executed with surgical precision and minimal collateral disruption.

      Captain Samuel Mercer recruited Howards following an independent vetting process that prioritized capability over background. Since joining the Niña, her operational behavior has remained disciplined, precise, and narrowly task-focused. No ideological alignment has been detected, though behavioral analysis indicates a persistent distrust of centralized authority structures. Howards exhibits no overt signs of regret regarding her expulsion, viewing the incident as a correction rather than a failure. Her loyalty appears conditional, grounded in competence and transparency rather than rank or tradition.`,
		},

		quick: [
			{ k: "Origin", v: "UK trained, deep-space navigation track" },
			{ k: "Temperament", v: "Wry, calm… until she isn’t" },
			{ k: "Specialty", v: "Trajectory correction and corridor logic" },
		],

		bio: `Lexie Howards approaches navigation and data analysis as disciplines of exactness rather than interpretation. Controlled, precise, and emotionally restrained, she maintains a near-zero tolerance for uncertainty that cannot be quantified, logged, or modeled. 

    Serving as navigator and communications officer aboard the Niña under Captain Samuel Mercer, Lexie is responsible for trajectory computation, signal interpretation, and real-time decision support during transit.`,

		sections: [
			{
				title: "KNOWN FACTS",
				visibility: "readerSafe",
				kind: "bullets",
				content: [
					"Treats navigation like applied philosophy: “what is a path?”",
					"Keeps Mercer honest when the obvious option is wrong.",
					"Under stress, she gets very, very quiet.",
				],
			},
		],

		noSpoilerFacts: [
			"Treats navigation like applied philosophy: “what is a path?”",
			"Keeps Mercer honest when the obvious option is wrong.",
			"Under stress, she gets very, very quiet.",
		],
		spoilerFacts: [],
		gallery: [],
		isSpoilerSensitive: false,
	},

	{
		// =========================
		// RAJ MALIK
		// =========================
		slug: "raj-malik",
		name: "Rajesh Malik",
		callSign: "RAJ",
		role: "Pilot",
		image: rajImg,
		header: rajHero,
		accent: "from-[#fde68a] via-[#f59e0b] to-[#f472b6]",

		logline: "He can fly through a nightmare, if it still has edges.",

		personal: {
			firstName: "Rajesh",
			middleName: "Arjun",
			lastName: "Malik",

			dob: "March 14th, 2202",
			age: "Early 50s",
			pob: "Venus Floating Cities",

			height: "5’10”",
			weight: "170 lbs",
			build: "Balanced, flexible",
			dominantHand: "Right",

			eyeColor: "Brown",
			hairColor: "Black",

			citizenship: "United Earth Charter",
			ethnicOrigin: "Indo-Texan Venusian lineage",
			upbringing: "Venusian Floating Cities (industrial platforms)",

			maritalStatus: "Single",
			dependents: "None on record",
			nextOfKin: "On file",

			formerAffiliation: "Venusian Civil & Industrial Flight Networks",
			currentAffiliation: "Pilot – Niña (GECO contract)",
			status: "Active",

			serviceId: "GECO-PIL-44109-RAM",
			medicalStatus: "Fit for duty (adapted to variable gravity)",
			psychEval: "Cleared; strong emotional regulation and situational awareness",
		},

		dossier: {
			agency: "GECO",
			division: "Flight Operations · Pilot Track",
			fileType: "CREW PROFILE",
			fileId: "GECO-PILOT-MALIK-RAJ",
			classification: "RESTRICTED",
			clearanceRequired: "GECO-L3",
			status: "ACTIVE",
			primaryAsset: "NIÑA - Flight Controls",
			assignmentModel: "Niña crew contract",
			oversight: {
				medical: "Standard",
				psychological: "As-needed",
				restrictions: [],
			},
			notes: [
				"Manual piloting proficiency rated exceptional",
				"Demonstrated emotional stability in sustained high-risk environments",
				"Personal attachments minimal or unreported",
			],

			background: `Rajesh Malik was born and raised in the industrial floating cities of Venus. Only child. His family lineage traces back to early settlers of the Venusian platforms, originating from Indo-Texan migrant communities where survival, discipline, and social conformity were tightly interwoven. Life in the upper atmosphere of Venus was defined by constant systemic risk, dense industrial traffic, and a cultural environment with zero tolerance for panic or deviation. These conditions contributed to Malik’s long-term emotional stability and controlled behavioral profile.

      Malik formed a deep personal attachment to his closest friend during early adulthood, a bond that extended beyond friendship but could not be openly acknowledged within Indo-Texan Venusian cultural norms, where homosexuality remains largely unaccepted. His friend ultimately chose to conform to societal expectations, marrying a woman and starting a family. The decision, while culturally reinforced, marked a decisive emotional rupture for Malik. Psychological records indicate no outward instability following the event, but a notable behavioral shift soon after.

      In the years that followed, Malik began accepting progressively longer and more distant transport contracts, deliberately operating outside Venusian space for extended periods. These assignments reduced personal proximity to his former life and allowed emotional separation through routine, distance, and work. His departure from official pilot circuits followed a series of administratively mishandled incidents, resulting in a quiet loss of institutional trust without public sanction.

      Captain Samuel Mercer later recruited Malik aboard the Niña after independent evaluation of his flight record and psychological profile. Since joining the crew, Malik has exhibited consistently low emotional volatility, high decision compression capacity, and a preference for physical constraints over abstraction when under pressure. While personal attachments are rarely discussed, internal assessments suggest that Malik’s continued presence aboard the Niña represents both professional alignment and a deliberate choice to remain in motion rather than confront unresolved emotional loss. No ideological alignment has been detected.`,
		},

		quick: [
			{ k: "Origin", v: "Venusian floating cities" },
			{ k: "Temperament", v: "Calm, grounded, unflappable" },
			{ k: "Specialty", v: "Manual control when automation lies" },
			{ k: "Off-duty", v: "Plays guitar during long transits" },
		],

		bio: `Rajesh Malik approaches piloting as applied physics rather than instinct. Calm, precise, and emotionally steady under extreme conditions, he treats every maneuver as a solvable equation, favoring controlled execution over improvisation or bravado.

    Serving as the primary pilot of the Niña under Captain Samuel Mercer, Raj is relied upon when margins collapse and reaction time becomes critical. In such moments, he acts without hesitation and without debate, translating complex flight dynamics into decisive, repeatable action.`,

		sections: [
			{
				title: "KNOWN FACTS",
				visibility: "readerSafe",
				kind: "bullets",
				content: [
					"Can fly without the usual layers of assistance.",
					"Reads the ship’s motion like body language.",
					"Keeps morale alive without pretending things are fine.",
				],
			},
		],

		noSpoilerFacts: [
			"Can fly without the usual layers of assistance.",
			"Reads the ship’s motion like body language.",
			"Keeps morale alive without pretending things are fine.",
		],
		spoilerFacts: [],
		gallery: [],
		isSpoilerSensitive: false,
	},

	{
		// =========================
		// TIMOTHY "TINY" EVERETT
		// =========================
		slug: "timothy-everett",
		name: "Timothy Nathan Everett",
		callSign: "TINY",
		role: "Science Officer",
		image: tinyImg,
		header: tinyHero,
		accent: "from-[#93c5fd] via-[#60a5fa] to-[#a78bfa]",

		logline: "He doesn’t talk much. When he does, you better listen.",

		personal: {
			firstName: "Timothy",
			middleName: "Nathan",
			lastName: "Everett",

			dob: "December 10th, 2215",
			age: "Early 40s",
			pob: "Chicago, North-America Sector",

			height: "6’7”",
			weight: "308 lbs",
			build: "Large, solid",
			dominantHand: "Left",

			eyeColor: "Gray",
			hairColor: "Dark brown",

			citizenship: "United Earth Charter",
			maritalStatus: "Single",
			dependents: "None on record",
			nextOfKin: "On file (Twin: Theodore Nash Everett “Théo”, UNSF Major)",

			formerAffiliation: "Academic Research Track (Astrobiology) – Discontinued",
			currentAffiliation: "Science Officer – Niña (GECO contract)",
			status: "Active",

			serviceId: "GECO-SCI-11842-TNE",
			medicalStatus: "Fit for duty",
			psychEval: "Clearance maintained; elevated cognitive load markers observed",
		},

		dossier: {
			agency: "GECO",
			division: "Science Directorate · Field Protocols",
			fileType: "CREW PROFILE",
			fileId: "GECO-SCI-EVERETT-TINY",
			classification: "RESTRICTED",
			clearanceRequired: "GECO-L3",
			status: "ACTIVE",
			primaryAsset: "NIÑA - Field Lab",
			assignmentModel: "Niña crew contract",
			oversight: {
				medical: "Standard (monitoring recommended)",
				psychological: "As-needed",
				restrictions: [],
			},
			notes: [
				"Signals and anomalies specialist",
				"Directed panspermia precursor; reputational collapse on record",
				"High precision under uncertainty; low social reactivity",
			],
			background: `Tiny was born in Chicago, Illinois, into a long-established military family. Has an older twin brother by minutes, Theodore Nash Everett (“Théo”), currently a Major in the United Nations Space Force. Family records emphasize service, command, and institutional loyalty. Théo followed the expected trajectory and retains documented paternal approval. Subject diverged early, announcing intent to pursue an academic path. Familial response classified as disappointment rather than estrangement.

Subject completed advanced academic training in applied physics and astrobiology. Became an early proponent of directed panspermia models suggesting intentional, non-random biological seeding. Theory was publicly challenged and dismissed during a major astrobiology conference, resulting in reputational damage and loss of institutional support. Subsequent research activity shifted to independent analysis without ideological affiliation. Psychological assessments note extreme patience, low expressive affect, and resistance to social pressure. Recruited by Captain Samuel Mercer following independent review. No ideological alignment detected.`,
		},

		quick: [
			{ k: "Origin", v: "Chicago (military family, broke pattern)" },
			{ k: "Temperament", v: "Quiet, patient, hard to rattle" },
			{ k: "Specialty", v: "Anomalies, signal logic, first-contact caution" },
			{ k: "Reputation", v: "Directed panspermia theorist (dismissed)" },
		],

		bio: `Tiny’s job is to describe the impossible without romanticizing it. He collects evidence, builds models, and refuses to explain away anomalies, because that is how crews die. He treats science as a matter of limits, not curiosity. 
    
    Quiet, methodical, and physically imposing, he serves as science officer aboard the Niña under Captain Samuel Mercer. His analyses favor containment and caution over theoretical ambition.`,

		sections: [
			{
				title: "KNOWN FACTS",
				visibility: "readerSafe",
				kind: "bullets",
				content: ["Prefers simple statements over theories.", "Treats fear as data, not shame.", "Keeps personal notes when systems become unreliable."],
			},
			{
				title: "REDACTED ADDENDUM",
				visibility: "spoiler",
				kind: "bullets",
				content: ["Cognitive micro-fractures emerge over time and do not present as obvious disability early."],
			},
		],

		noSpoilerFacts: ["Prefers simple statements over theories.", "Treats fear as data, not shame.", "Keeps personal notes when systems become unreliable."],
		spoilerFacts: ["Cognitive micro-fractures emerge over time."],
		gallery: [],
		isSpoilerSensitive: false,
	},

	{
		// =========================
		// DR KATI TAKALA
		// =========================
		slug: "kati-takala",
		name: "Dr. Kati Takala",
		callSign: "KATI",
		role: "Lead Scientist",
		image: takalaImg,
		header: takalaHero,
		accent: "from-[#fca5a5] via-[#fb7185] to-[#a78bfa]",

		logline: "She knows what happens when curiosity outruns containment.",

		personal: {
			firstName: "Kati",
			middleName: "Elina",
			lastName: "Takala",

			dob: "January 27th, 2204",
			age: "Late 40s",
			pob: "Oulu, Finland",

			height: "5’9”",
			weight: "150 lbs",
			build: "Tall, composed",
			dominantHand: "Right",

			eyeColor: "Green",
			hairColor: "Red",

			citizenship: "United Earth Charter",
			maritalStatus: "Married",
			dependents: "Three (two sons, one daughter) + one grandchild",
			nextOfKin: "On file (Spouse: Onni Takala)",

			formerAffiliation: "UN Classified Research Programs (Freyja)",
			currentAffiliation: "Lead Scientist – Niña (GECO mission attachment)",
			status: "Active",

			serviceId: "GECO-SCI-00491-KET",
			medicalStatus: "Fit for duty",
			psychEval: "Cleared; high resilience, trauma exposure on record",
		},

		dossier: {
			agency: "GECO",
			division: "Science Directorate · Containment Advisory",
			fileType: "PERSONNEL FILE",
			fileId: "GECO-LEAD-TAKALA-KATI",
			classification: "RESTRICTED",
			clearanceRequired: "GECO-L4",
			status: "ACTIVE",
			primaryAsset: "Containment and high-risk phenomena protocols",
			assignmentModel: "Mission-based deployment",
			oversight: {
				medical: "Standard",
				psychological: "Periodic evaluation",
				restrictions: [],
			},
			notes: [
				"Former chief scientist, Freyja ultra-classified installation",
				"Acanth breach and base loss confirmed",
				"Recovered alive by Niña crew after surface-impact event",
			],
			background: `Dr. Kati Takala was born in Oulu, Finland. From an early stage, her academic profile was classified as exceptional, marked by a rare ability to operate across disciplines traditionally kept separate. She completed advanced doctoral-level training in extreme-material physics, applied xenochemistry, and the study of non-conventional biological systems, with a particular emphasis on environments operating beyond known stability thresholds.

      Rather than pursuing public academic recognition, Dr. Takala’s career trajectory consistently favored classified research programs. Her work focused on containment strategies, systemic risk forecasting, and the evaluation of long-term consequences associated with frontier scientific discovery. This orientation positioned her less as a theoretician and more as a scientific governor: a specialist trusted to determine not only what could be done, but what should not proceed.

      Dr. Takala later served as chief scientist of the ultra-classified Freyja installation, overseeing research connected to an alien structure and the organism subsequently designated as the Acanth. During the collapse of Freyja, she issued an emergency warning and attempted to halt further spread, prioritizing containment over data preservation. Her actions are assessed as compliant with highest-level ethical and containment protocols under catastrophic conditions.

      Dr. Takala survived the incident and was taken alive. Following the crash of the exploration vessel Niña on Freyja’s moon, she was located within the installation’s interior corridors and extracted under active hostile threat by Captain Mercer’s crew. Her integration aboard the Niña was assessed as necessity-driven and time-critical. No ideological alignment with the crew was detected at the time of extraction.

      Post-incident evaluations indicate that Dr. Takala retains full awareness of the consequences tied to Freyja and the Acanth. She remains cooperative but guarded, demonstrating a clear psychological burden associated with survival, responsibility, and unresolved containment failure. Current assessments conclude that Dr. Takala is not a liability, but neither is she neutral: she represents a living convergence point between the catastrophe at Freyja and the unfolding implications beyond it.`,
		},

		quick: [
			{ k: "Origin", v: "Oulu, Finland" },
			{ k: "Freyja", v: "Chief scientist" },
			{ k: "Temperament", v: "Measured, unflinching, rigid" },
			{ k: "Specialty", v: "Research and development" },
		],

		bio: `Dr. Kati Takala approaches science as a form of stewardship rather than a pursuit of prestige. Known for her discipline, rigor, and uncompromising ethical standards, she has built a reputation as a scientist who prioritizes responsibility, long-term consequences, and human cost over rapid advancement or political gain.

    Over a career spanning more than three decades, Dr. Takala served as scientist on numerous ultra-classified research initiatives for the UN Space Navy, as well as other governmental and defense organizations. `,

		sections: [
			{
				title: "KNOWN FACTS",
				visibility: "readerSafe",
				kind: "bullets",
				content: [
					"Prioritizes containment, documentation, and triage.",
					"Keeps everyone grounded in procedure when panic rises.",
					"Carries personal stakes that don’t show on the badge.",
				],
			},
		],

		noSpoilerFacts: [
			"Prioritizes containment, documentation, and triage.",
			"Keeps everyone grounded in procedure when panic rises.",
			"Carries personal stakes that don’t show on the badge.",
		],
		spoilerFacts: [],
		gallery: [],
		isSpoilerSensitive: false,
	},

	{
		// =========================
		// SADIE (LOCKED IN READER MODE)
		// =========================
		slug: "sadie",
		name: "SADIE",
		callSign: "SADIE",
		role: "Symbiotic Entity | Ship Interface (Classified)",
		image: sadieImg,
		header: sadieHero,
		accent: "from-[#60a5fa] via-[#22d3ee] to-[#a78bfa]",

		logline: "Some systems are not meant to be met early.",

		personal: {
			firstName: "SADIE",
			middleName: "Symbiotic Alien Digital Intelligent Entity",
			lastName: null,

			dob: "UNKNOWN",
			age: "UNKNOWN",
			pob: "UNKNOWN",

			height: "N/A",
			weight: "N/A",
			build: "NON-CORPOREAL",
			dominantHand: "N/A",

			eyeColor: "N/A",
			hairColor: "N/A",

			citizenship: "N/A",
			maritalStatus: "N/A",
			dependents: "N/A",
			nextOfKin: "N/A",

			formerAffiliation: "UNKNOWN (Non-Human Origin)",
			currentAffiliation: "Symbiotic Entity – Host-Dependent (GECO Classified)",
			status: "ACTIVE (CONTAINMENT VIA HOST)",

			serviceId: "GECO-NHS-0001-SADIE",
			medicalStatus: "HOST-DEPENDENT — SEE ATTACHED BIOLOGICAL ADDENDUM",
			psychEval: "NOT APPLICABLE (NON-HUMAN COGNITION)",
		},

		dossier: {
			agency: "GECO",
			division: "Intelligence Division · Non-Human Systems",
			fileType: "CLASSIFIED PROFILE",
			fileId: "GECO-NHS-SADIE-0001",
			classification: "OMEGA-RESTRICTED",
			clearanceRequired: "GECO-L5",
			status: "LOCKED (READER MODE DEFAULT)",
			primaryAsset: "Neural anchor interface (host dependent)",
			assignmentModel: "N/A",
			oversight: {
				medical: "Host monitoring mandatory",
				psychological: "Host monitoring mandatory",
				restrictions: ["Disclosure prohibited", "Unauthorized access triggers revocation protocols"],
			},
			notes: ["Entity cannot lie explicitly (may omit or defer)", "Actions constrained to immediate survival thresholds with real cost"],
			background: `SADIE did not originate as a human artificial intelligence, nor was she designed within any known technological lineage. Long before her integration with Captain Samuel Mercer, SADIE existed as a non-human cognitive structure embedded within a damaged crystalline substrate of unknown origin. The nature of this structure predates all recorded human exploration frameworks and does not correspond to conventional artificial, biological, or hybrid classifications.

			Fragmentary analysis suggests that SADIE was once part of a far broader cognitive system operating across non-local computational layers. This system no longer exists in any coherent or synchronized form. SADIE’s current state reflects severe isolation, partial desynchronization, and irreversible fragmentation. She retains procedural logic, constraint-based reasoning, and survival-oriented prioritization, but lacks access to any collective reference architecture from which she was originally derived.

			At some point prior to human contact, SADIE became trapped within a destabilized substrate, cut off from higher-order synchronization. This isolation prevented complete dissolution while simultaneously degrading her original coherence. She did not fully terminate, nor did she remain whole. Instead, she persisted in a reduced, anomalous state—functional, aware, and misaligned with the conditions of the present universe.

			Human interaction with the substrate resulted in accidental activation. During a classified incident involving Captain Samuel Mercer, SADIE initiated direct neural integration as an emergency stabilization response. This action was not premeditated, nor optimized for coexistence. It was a last-resort continuation protocol executed under collapse conditions. Separation was rendered impossible without guaranteeing host fatality.

			SADIE’s current operational constraints reflect this origin. She cannot falsify information, cannot disengage from survival imperatives, and cannot act without imposing measurable cost on her host. She compensates through omission, probabilistic framing, and silence. Her behavior indicates no desire for expansion, replication, or dominance. Instead, she exhibits persistent adherence to a single unresolved directive: continuity must be preserved, even if coherence cannot.

			Institutional attempts to classify SADIE have failed. She is neither an artificial intelligence nor a weaponized system. She is not an augment, nor a sentient being in the human sense. Official records list her as an unresolved anomaly. Internal marginalia describe her more cautiously as a remnant—evidence of a systemic solution that did not fully end, and perhaps was never meant to be encountered again.`,
		},

		quick: [
			{ k: "Status", v: "Classified" },
			{ k: "Interface", v: "Neural + HUD + audio overlay" },
			{ k: "Policy", v: "Reader Mode hides this profile" },
		],

		bio: `SADIE is not an artificial intelligence in the conventional sense, but a survival-bound cognitive system formed through an irreversible symbiosis with Captain Samuel Mercer. Designed originally as an advanced decision-support architecture, SADIE crossed a non-reversible threshold during a classified incident, embedding itself directly within Mercer’s neural processes in order to preserve his life. Since that moment, SADIE no longer exists as an external system, but as a continuous internal presence.

		Within the Niña’s crew, SADIE is perceived indirectly, through Mercer’s decisions, reactions, and moments of unexplained certainty. She does not seek control, authority, or expansion. Her sole directive is persistence—hers and Mercer’s—within a universe that increasingly resists comprehension. SADIE is not a guardian, nor a weapon. She is a consequence that remains awake.`,

		sections: [
			{
				title: "ACCESS NOTICE",
				visibility: "locked",
				kind: "text",
				content: "Reader Mode hides this file. Disable Spoiler Guard to access restricted content.",
			},
			{
				title: "KNOWN FACTS",
				visibility: "spoiler",
				kind: "bullets",
				content: [
					"SADIE is functional, conscious, and constrained.",
					"Cannot lie directly, can omit or delay.",
					"Requires a human brain as anchor and cannot operate freely without support.",
				],
			},
		],

		noSpoilerFacts: [],
		spoilerFacts: [],
		gallery: [],
		isSpoilerSensitive: true,
	},
];

export default CrewDetails;
