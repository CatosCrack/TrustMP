const API_KEY = process.env.GEMINI_API;
const API_URL = process.env.GEMINI_URL;

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Predefined developer instructions
const developerPrompt = `
First Session, Forty-fourth Parliament,
70-71 Elizabeth II, 2021-2022
Première session, quarante-quatrième législature,
70-71 Elizabeth II, 2021-2022
STATUTES OF CANADA 2022 LOIS DU CANADA (2022)
CHAPTER 5 CHAPITRE 5
An Act to implement certain provisions of
the economic and fiscal update tabled in
Parliament on December 14, 2021 and other
measures
Loi portant exécution de certaines
dispositions de la mise à jour économique et
budgétaire déposée au Parlement le
14 décembre 2021 et mettant en œuvre
d’autres mesures
ASSENTED TO
JUNE 9, 2022
BILL C-8
SANCTIONNÉE
LE 9 JUIN 2022
PROJET DE LOI C-8
RECOMMENDATION
Her Excellency the Governor General recommends to the House
of Commons the appropriation of public revenue under the cir-
cumstances, in the manner and for the purposes set out in a
measure entitled “An Act to implement certain provisions of the
economic and fiscal update tabled in Parliament on December
14, 2021 and other measures”.
SUMMARY
Part 1 amends the Income Tax Act and the Income Tax Regula-
tions in order to
(a) introduce a new refundable tax credit for eligible busi-
nesses on qualifying ventilation expenses made to improve
air quality;
(b) expand the travel component of the northern residents
deduction by giving all northern residents the option to claim
up to $1,200 in eligible travel expenses even if the individual
has not received travel assistance from their employer;
(c) expand the School Supplies Tax Credit from 15% to 25%
and expand the eligibility criteria to include electronic devices
used by eligible educators; and
(d) introduce a new refundable tax credit to return fuel
charge proceeds to farming businesses in backstop jurisdic-
tions.
Part 2 enacts the Underused Housing Tax Act. This Act imple-
ments an annual tax of 1% on the value of vacant or underused
residential property directly or indirectly owned by non-resident
non-Canadians. It sets out rules for the purpose of establishing
owners’ liability for the tax. It also sets out applicable reporting
and filing requirements. Finally, to promote compliance with its
provisions, this Act includes modern administration and enforce-
ment provisions aligned with those found in other taxation
statutes.
Part 3 provides for a six-year limitation or prescription period for
the recovery of amounts owing with respect to a loan provided
under the Canada Emergency Business Account program estab-
lished by Export Development Canada.
Part 4 authorizes payments to be made out of the Consolidated
Revenue Fund for the purpose of supporting ventilation im-
provement projects in schools.
Part 5 authorizes payments to be made out of the Consolidated
Revenue Fund for the purpose of supporting coronavirus disease
2019 (COVID-19) proof-of-vaccination initiatives.
Available on the House of Commons website at the following address:
www.ourcommons.ca
RECOMMANDATION
Son Excellence la gouverneure générale recommande à la
Chambre des communes l’affectation de deniers publics dans les
circonstances, de la manière et aux fins prévues dans une me-
sure intitulée « Loi portant exécution de certaines dispositions de
la mise à jour économique et budgétaire déposée au Parlement
le 14 décembre 2021 et mettant en œuvre d’autres mesures ».
SOMMAIRE
La partie 1 modifie la Loi de l’impôt sur le revenu et le Règle-
ment de l’impôt sur le revenu afin :
a) d’accorder aux entreprises admissibles un nouveau crédit
d’impôt remboursable pour les dépenses de ventilation ad-
missibles visant à améliorer la qualité de l’air;
b) d’élargir la composante voyage de la déduction pour les
habitants de régions éloignées en leur donnant l’option de ré-
clamer jusqu’à 1 200 $ en tant que frais de voyage admis-
sibles bien que l’individu n’ait pas reçu d’aide au voyage de
son employeur;
c) d’augmenter le crédit d’impôt pour fournitures scolaires
de 15 % à 25 % et d’élargir les critères d’admissibilité afin
d’inclure les appareils électroniques utilisés par un éducateur
admissible;
d) d’accorder un nouveau crédit d’impôt remboursable pour
le retour des produits de la redevance sur les combustibles
aux entreprises agricoles dans des administrations assujet-
ties au filet de sécurité fédéral.
La partie 2 édicte la Loi sur la taxe sur les logements sous-
utilisés. Cette loi instaure une taxe annuelle de 1 % sur la valeur
des immeubles résidentiels vacants ou sous-utilisés appartenant
directement ou indirectement à des personnes non-résidentes
non-canadiennes. Cette loi énonce des règles afin d’établir l’obli-
gation des propriétaires à l’égard de cette taxe. Cette loi établit
aussi des exigences en matière de déclaration et de production.
En dernier lieu, afin de favoriser le respect de ses dispositions,
cette loi prévoit des dispositions d’application et d’exécution
modernes et conformes à celles qui se trouvent dans d’autres
lois fiscales.
La partie 3 prévoit que le délai de prescription pour recouvrer
une créance relative à un prêt accordé dans le cadre du pro-
gramme Compte d’urgence pour les entreprises canadiennes
établi par Exportation et développement Canada est de six ans.
La partie 4 autorise des paiements sur le Trésor en vue d’ap-
puyer des projets d’amélioration de la ventilation dans les
écoles.
La partie 5 autorise des paiements sur le Trésor en vue d’ap-
puyer des initiatives en matière de preuve de vaccination contre
la maladie à coronavirus 2019 (COVID-19).
Disponible sur le site Web de la Chambre des communes à l’adresse suivante :
www.noscommunes.ca
2021-2022 ii 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 SUMMARY SOMMAIRE
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
Part 6 authorizes the Minister of Health to make payments of up
to $1.72 billion out of the Consolidated Revenue Fund in relation
to coronavirus disease 2019 (COVID-19) tests. It also sets out re-
porting requirements for the Minister of Health.
Part 7 amends the Employment Insurance Act to specify the
maximum number of weeks for which benefits may be paid in a
benefit period to certain seasonal workers.
La partie 6 autorise le ministre de la Santé à effectuer des paie-
ments sur le Trésor relatifs à des tests de la maladie à coronavi-
rus 2019 (COVID-19) jusqu’à concurrence d’un milliard sept cent
vingt millions de dollars. Elle établit aussi des exigences en ma-
tière de rapport pour le ministre de la Santé.
La partie 7 modifie la Loi sur l’assurance-emploi afin de préciser
le nombre maximal de semaines pour lesquelles des prestations
peuvent être versées à certains travailleurs saisonniers au cours
d’une période de prestations.
2021-2022 iii 70-71 Eliz. II
TABLE OF PROVISIONS
An Act to implement certain provisions of the
economic and fiscal update tabled in Parliament on
December 14, 2021 and other measures
1
Short Title
Economic and Fiscal Update Implementation Act, 2021
PART 1
Income Tax Act
2
Amendments to the Act
7
Related Amendments to the Income Tax Regulations
PART 2
Underused Housing Tax Act
10
Enactment of Act
An Act respecting the taxation of
underused housing
Short Title
1
Underused Housing Tax Act
PART 1
Interpretation and General Rules of
Application
2
Definitions
Meaning of administration or enforcement of this Act3
Arm’s length4
PART 2
Her Majesty
Binding on Her Majesty5
PART 3
Application of Tax
6
Meaning of qualifying occupancy period
TABLE ANALYTIQUE
Loi portant exécution de certaines dispositions de la
mise à jour économique et budgétaire déposée au
Parlement le 14 décembre 2021 et mettant en œuvre
d’autres mesures
1
2
7
10
1
2
Titre abrégé
Loi d’exécution de la mise à jour économique et budgé-
taire de 2021
PARTIE 1
Loi de l’impôt sur le revenu
Modification de la loi
Modifications connexes au Règlement de l’impôt sur le
revenu
PARTIE 2
Loi sur la taxe sur les logements
sous-utilisés
Édiction de la loi
Loi visant la taxation des logements
sous-utilisés
Titre abrégé
Loi sur la taxe sur les logements sous-utilisés
PARTIE 1
Définitions et règles d’application
générales
Définitions
Sens de « application et exécution de la présente loi »3
Lien de dépendance4
PARTIE 2
Sa Majesté
Obligation de Sa Majesté5
PARTIE 3
Application de la taxe
6
Sens de période d’occupation admissible
2021-2022 v 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 TABLE OF PROVISIONS TABLE ANALYTIQUE
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PART 4
Returns
PARTIE 4
Déclarations
Return required7
Form and content8
Production de déclarations7
Forme et contenu8
9
Definition of electronic filing
Demand for return10
Transmission électronique9
Mise en demeure de produire une déclaration10
PART 5
Trustees, Receivers and
Representatives
PARTIE 5
Syndics, séquestres et représentants
11
Definitions
11
Définitions
PART 6
Anti-avoidance
PARTIE 6
Évitement
12
Definitions
12
Définitions
13
Definitions
13
Définitions
PART 7
Administration and Enforcement
PARTIE 7
Application et exécution
DIVISION 1
Payments
SECTION 1
Paiements
Large payments14
Small amounts owing15
Execution of returns, etc.16
Paiements importants14
Sommes minimes15
Validation des documents16
Extension of time17
Statutory recovery rights18
Prorogation du délai17
Droits de recouvrement créés par une loi18
DIVISION 2
Administration and Officers
SECTION 2
Personnel assurant l’exécution
Minister’s duty19
Staff20
Fonctions du ministre19
Personnel20
Administration of oaths21
Déclaration sous serment21
Inquiry22
Enquête22
DIVISION 3
Interest
SECTION 3
Intérêts
Specified rate of interest23
Taux d’intérêt déterminé23
Compound interest on amounts owed by Her Majesty24
Intérêts composés sur les dettes de Sa Majesté24
Interest if Act amended25
Modification de la présente loi25
Renonciation ou réduction — intérêts26
Waiving or reducing interest26
Cancellation of penalties and interest27
Dishonoured instruments28
Annulation des intérêts et pénalités27
Effets refusés28
DIVISION 4
Records and Information
SECTION 4
Registres et renseignements
Keeping records29
Obligation de tenir des registres29
2021-2022 vi 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 TABLE OF PROVISIONS TABLE ANALYTIQUE
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
Electronic funds transfer30
Requirement to provide information or record31
32
Definitions
DIVISION 5
Assessments
Assessment33
Restriction on payment by Minister34
Notice of assessment35
Limitation period for assessments36
DIVISION 6
Objections to Assessment
Objection to assessment37
Extension of time by Minister38
DIVISION 7
Appeal
Extension of time by Tax Court of Canada39
Appeal to Tax Court of Canada40
Extension of time to appeal41
No appeal if waiver42
Institution of appeals43
Disposition of appeal44
References to Tax Court of Canada45
Reference of common questions to Tax Court of Canada46
DIVISION 8
Penalties
47
Failure to file
Waiving or cancelling penalties48
General penalty49
Failure to file on demand50
Failure to provide information51
False statements or omissions52
DIVISION 9
Offences and Punishment
53
Offence for failure to file return or to comply with de-
mand or order
Offences for false or deceptive statement54
55
Definition of confidential information
Failure to pay tax56
General offence57
Compliance orders58
Officers of corporations, etc.59
No power to decrease punishment60
Télévirement30
Obligation de produire des renseignements ou registres31
32
Définitions
SECTION 5
Cotisations
Cotisation33
Restriction visant les paiements par le ministre34
Avis de cotisation35
Prescription des cotisations36
SECTION 6
Opposition aux cotisations
Opposition à la cotisation37
Prorogation du délai par le ministre38
SECTION 7
Appel
Prorogation du délai par la Cour canadienne de l’impôt39
Appel40
Prorogation du délai d’appel41
Restriction — renonciation42
Modalités de l’appel43
Règlement d’appel44
Renvoi à la Cour canadienne de l’impôt45
46
Renvoi à la Cour canadienne de l’impôt de questions
communes
SECTION 8
Pénalités
Défaut de produire une déclaration47
Renonciation ou annulation — pénalité48
Pénalité générale49
Défaut de donner suite à une mise en demeure50
Défaut de présenter des renseignements51
Faux énoncés ou omissions52
SECTION 9
Infractions et peines
53
Défaut de produire une déclaration ou d’observer une
obligation ou une ordonnance
Déclarations fausses ou trompeuses54
55
Définition de renseignement confidentiel
Défaut de payer56
Infraction générale57
Ordonnance d’exécution58
Cadres de personnes morales59
Pouvoir de diminuer les peines60
2021-2022 vii 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 TABLE OF PROVISIONS TABLE ANALYTIQUE
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
Information or complaint61
DIVISION 10
Inspections
By whom62
Compliance order63
Search warrant64
65
Definition of foreign-based information or record
Copies66
Compliance67
DIVISION 11
Collection
68
Definitions
Security69
Collection restrictions70
Over $1,000,000 — security71
72
Certificates
Garnishment73
Recovery by deduction or set-off74
Acquisition of debtor’s property75
Money seized from debtor76
Seizure77
Person leaving Canada or defaulting78
Authorization to assess and take collection action79
Tax liability — transfers not at arm’s length80
DIVISION 12
Evidence and Procedure
Service81
Timing of receipt82
Proof of service83
PART 8
Regulations
Regulations84
Incorporation by reference — limitation removed85
Consequential Amendments
11
Access to Information Act
12
13
Bankruptcy and Insolvency Act
Criminal Code
14
Excise Tax Act
20
Financial Administration Act
21
Tax Court of Canada Act
25
Customs Act
Dénonciation ou plainte61
SECTION 10
Inspections
Inspection62
Ordonnance63
Requête pour mandat de perquisition64
65
Définition de renseignement ou registre étranger
Copies66
Observation67
SECTION 11
Recouvrement
68
Définitions
Garantie69
Restrictions au recouvrement70
Montant supérieur à 1 000 000 $ — caution71
72
Certificats
Saisie-arrêt73
74
Recouvrement par voie de déduction ou de compensa-
tion
Acquisition de biens du débiteur75
Sommes saisies d’un débiteur76
Saisie77
Personnes quittant le Canada ou en défaut78
Recouvrement compromis79
Transfert entre personnes ayant un lien de dépendance80
SECTION 12
Procédure et preuve
81
Signification
Date de réception82
83
Preuve de signification
PARTIE 8
Règlements
Règlements84
Incorporation par renvoi — élimination de la restriction85
Modifications corrélatives
11
Loi sur l’accès à l’information
12
Loi sur la faillite et l’insolvabilité
13
Code criminel
14
Loi sur la taxe d’accise
20
Loi sur la gestion des finances publiques
21
Loi sur la Cour canadienne de l’impôt
25
Loi sur les douanes
2021-2022 viii 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 TABLE OF PROVISIONS TABLE ANALYTIQUE
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
27
30
31
32
36
Income Tax Act
Canada Revenue Agency Act
Air Travellers Security Charge Act
Excise Act, 2001
Greenhouse Gas Pollution Pricing Act
27
30
31
32
36
PART 3
Canada Emergency Business Account
41
42
43
Definition of CEBA loan
Limitation or prescription period
Application
41
42
43
PART 4
School Ventilation Improvement
44
Maximum payment of $100 million
44
45
PART 5
Proof of Vaccination
Maximum payment of $300 million
45
Loi de l’impôt sur le revenu
Loi sur l’Agence du revenu du Canada
Loi sur le droit pour la sécurité des passagers du trans-
port aérien
Loi de 2001 sur l’accise
Loi sur la tarification de la pollution causée par les gaz à
effet de serre
PARTIE 3
Compte d’urgence pour les
entreprises canadiennes
Définition de prêt CUEC
Prescription
Application
PARTIE 4
Amélioration de la ventilation dans
les écoles
Paiement maximal de 100 000 000 $
PARTIE 5
Preuve de vaccination
Paiement maximal de 300 000 000 $
46
PART 6
COVID-19 Tests
Payments out of C.R.F.
46
PART 7
Employment Insurance Act
PARTIE 6
Tests de la COVID-19
Prélèvement sur le Trésor
PARTIE 7
Loi sur l’assurance-emploi
47
47
2021-2022 ix 70-71 Eliz. II
70-71 ELIZABETH II 70-71 ELIZABETH II
CHAPTER 5 CHAPITRE 5
An Act to implement certain provisions of the eco-
nomic and fiscal update tabled in Parliament on De-
cember 14, 2021 and other measures
Loi portant exécution de certaines dispositions de la
mise à jour économique et budgétaire déposée au
Parlement le 14 décembre 2021 et mettant en œuvre
d’autres mesures
[Assented to 9th June, 2022] Her Majesty, by and with the advice and consent of
the Senate and House of Commons of Canada,
enacts as follows:
Short Title
Short title
1 This Act may be cited as the Economic and Fiscal Up-
date Implementation Act, 2021.
[Sanctionnée le 9 juin 2022]
Sa Majesté, sur l’avis et avec le consentement du
Sénat et de la Chambre des communes du Canada,
édicte :
Titre abrégé
Titre abrégé
1 Loi d’exécution de la mise à jour économique et bud-
gétaire de 2021.
PART 1
R.S., c. 1 (5th Supp.)
Income Tax Act
Amendments to the Act
2 (1) Subsection 87(2) of the Income Tax Act is
amended by adding the following after para-
graph (g.7):
COVID-19 — air quality improvement tax credit
(g.8) for the purposes of section 127.43, the new cor-
poration is deemed to be the same corporation as, and
a continuation of, each predecessor corporation;
(2) Subsection (1) is deemed to have come into
force on September 1, 2021.
3 (1) Paragraph 110.7(1)(a) of the Act is replaced
by the following:
PARTIE 1
L.R., ch. 1 (5e suppl.)
Loi de l’impôt sur le revenu
Modification de la loi
2 (1) Le paragraphe 87(2) de la Loi de l’impôt sur
le revenu est modifié par adjonction, après l’ali-
néa g.7), de ce qui suit :
COVID-19 — crédit pour l’amélioration de la qualité de
l’air
g.8) pour l’application de l’article 127.43, la nouvelle
société est réputée être la même société que chaque
société remplacée et en être la continuation;
(2) Le paragraphe (1) est réputé être entré en vi-
gueur le 1er septembre 2021.
3 (1) L’alinéa 110.7(1)a) de la même loi est rem-
placé par ce qui suit :
2021-2022 1 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 3 Article 3
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
(a) the total of all amounts each of which is the
amount, in respect of a particular period during the
taxation year, determined by the formula
A × B
a) le total des sommes représentant chacune le mon-
tant, relativement à une période donnée au cours de
l’année d’imposition, obtenu par la formule suivante :
A × B
where
A is the specified percentage for the particular area
in which the taxpayer resided during the particu-
lar period, and
B is the total trip costs to the taxpayer in respect of
trips that begin during the particular period; and
(2) Subsection 110.7(3) of the Act is replaced by
the following:
Restriction
(3) The total of all amounts determined under paragraph
(1)(a) for all taxpayers in a taxation year in respect of an
individual shall not be in respect of more than two trips
made by the individual that begin in the year (other than
trips to obtain medical services that are not available in
the locality in which the taxpayer resided).
Additional restrictions
(3.1) For the purpose of paragraph (1)(a), an amount
may only be included in the amount determined for B for
a particular area for a taxation year if
(a) the amount is not otherwise deducted in comput-
ing the income for any taxation year of any individual
(except by an employer under section 9 if it is included
in an employee’s income);
(b) the amount is not included in determining an
amount deducted under subsection 118.2(1) for any
taxation year;
(c) the amount is in respect of trips made by the tax-
payer or an eligible family member of the taxpayer
that begin during the part of the year in which the tax-
payer resided in the particular area; and
(d) neither the taxpayer nor an eligible family member
of the taxpayer is at any time entitled to a reimburse-
ment or any form of assistance (other than a reim-
bursement or assistance included in computing the in-
come of the taxpayer or the eligible family member) in
respect of trips to which paragraph (c) applies.
où :
A représente le pourcentage déterminé applicable à
la région où le contribuable réside au cours de la
période donnée,
B le total des frais de voyage pour le contribuable re-
lativement aux voyages qui commencent au cours
de la période donnée;
(2) Le paragraphe 110.7(3) de la même loi est rem-
placé par ce qui suit :
Restriction
(3) Le total des sommes calculées selon l’alinéa (1)a) à
l’égard de tous les contribuables au cours d’une année
d’imposition au titre d’un particulier ne peut se rapporter
à plus de deux voyages effectués par le particulier com-
mençant dans l’année, autres que des voyages effectués
afin d’obtenir des services médicaux qui ne sont pas dis-
pensés dans la localité où le contribuable réside.
Autres restrictions
(3.1) Pour l’application de l’alinéa (1)a), un montant de
frais ne peut être inclus dans la valeur de l’élément B de
la formule applicable à une région pour une année d’im-
position que si les énoncés ci-après se vérifient :
a) le montant n’est pas par ailleurs déduit dans le cal-
cul du revenu d’un particulier pour une année d’impo-
sition (sauf par un employeur en application de l’ar-
ticle 9 s’il est inclus dans le revenu d’un employé);
b) le montant n’est pas inclus dans le calcul d’une dé-
duction en application du paragraphe 118.2(1) pour
une année d’imposition;
c) le montant est relatif aux voyages effectués par le
contribuable, ou un membre de la famille admissible
du contribuable, commençant pendant la partie de
l’année au cours de laquelle le contribuable réside
dans la région;
d) ni le contribuable, ni un membre de la famille ad-
missible du contribuable n’a, à aucun moment, droit à
un remboursement ou à une forme d’aide (sauf un
remboursement ou une aide dont le montant est in-
clus dans le calcul du revenu du contribuable ou du
membre de la famille admissible) relativement aux
voyages auxquels l’alinéa c) s’applique.
2021-2022 2 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 3 Article 3
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
Additional restriction
(3.2) If all amounts determined under paragraph
7304(2)(a) of the Income Tax Regulations are nil in re-
spect of trips (beginning in the taxation year) made by an
individual, the total of all amounts determined for B in
paragraph (1)(a) in the taxation year for all taxpayers in
respect of the individual must not exceed the standard
amount for the individual for the taxation year.
Deemed standard amount
(3.3) If an employer-provided travel benefit was claimed
by a taxpayer in respect of an individual in respect of the
taxation year, the standard amount for the individual is
deemed to be nil for the taxation year.
(3) Section 110.7 of the Act is amended by adding
the following after subsection (5):
Definitions
(6) The following definitions apply in this section.
eligible family member of a taxpayer, at any time,
means a member of the taxpayer’s household who is at
that time
(a) the taxpayer’s spouse or common-law partner;
(b) a child of the taxpayer (including a child of the
taxpayer’s spouse or common-law partner) under the
age of 18; or
(c) another individual who is
(i) related to the taxpayer,
(ii) wholly dependent for support on the taxpayer,
the taxpayer’s spouse or common-law partner, or
both of them, and
(iii) except in the case of a parent or grandparent of
the taxpayer, so dependent by reason of mental or
physical infirmity. (membre de la famille admis-
sible)
employer-provided travel benefits, to a taxpayer in re-
spect of a trip made by the taxpayer or their eligible fami-
ly member, means the total amount of
(a) the value of travel assistance, if any, provided to
the taxpayer in respect of the taxpayer’s employment
in respect of travel expenses for the trip; and
Autre restriction
(3.2) Si tous les montants déterminés en application de
l’alinéa 7304(2)a) du Règlement de l’impôt sur le revenu
sont zéro, relativement à des voyages (commençant dans
l’année d’imposition) effectués par un particulier, le total
des montants déterminés pour l’élément B de la formule
applicable figurant à l’alinéa (1)a) au cours de l’année
pour tous les contribuables à l’égard du particulier ne
doit pas dépasser le montant forfaitaire pour le particu-
lier pour l’année.
Montant forfaitaire réputé
(3.3) Si un avantage relatif aux voyages tirés de l’emploi
est demandé par un contribuable au titre d’un particulier
pour l’année d’imposition, le montant forfaitaire pour le
particulier est réputé être zéro pour l’année.
(3) L’article 110.7 de la même loi est modifié par
adjonction, après le paragraphe (5), de ce qui
suit :
Définitions
article.
(6) Les définitions qui suivent s’appliquent au présent
avantages relatifs aux voyages tirés de l’emploi
S’agissant d’un voyage effectué par le contribuable ou un
membre de la famille admissible du contribuable, le total
des sommes suivantes :
a) la valeur de toute aide fournie au contribuable rela-
tivement à son emploi au titre des frais de déplace-
ment pour le voyage;
b) le montant qu’a reçu le contribuable relativement à
son emploi au titre des frais de déplacement pour le
voyage. (employer-provided travel benefits)
frais de voyage S’entend au sens du règlement. (trip
cost)
membre de la famille admissible S’entend, à un mo-
ment donné, d’un membre de la maisonnée d’un contri-
buable qui est, à ce moment :
a) son époux ou son conjoint de fait;
b) son enfant (y compris un enfant de son époux ou
conjoint de fait ) âgé de moins de 18 ans;
c) une autre personne qui, à la fois :
(i) lui est liée,
(ii) est entièrement à sa charge, à la charge de son
époux ou conjoint de fait, ou les deux,
2021-2022 3 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Sections 3-5 Articles 3-5
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
(b) the amount, if any, received by the taxpayer in re-
spect of the taxpayer’s employment in respect of travel
expenses for the trip. (avantages relatifs aux
voyages tirés de l’emploi)
standard amount, for an individual for a taxation year
and subject to subsection (3.3), means $1,200. (montant
forfaitaire)
trip cost has the meaning prescribed by regulation.
(frais de voyage)
(4) Subsections (1) to (3) apply to the 2021 and
subsequent taxation years.
4 (1) Subparagraph (a)(ii) of the definition eligi-
ble supplies expense in subsection 122.9(1) of the
Act is replaced by the following:
(ii) directly consumed or used in the performance
of the duties of the eligible educator’s employment;
and
(2) Subsection 122.9(2) of the Act is replaced by
the following:
Deemed overpayment
(2) An eligible educator who files a return of income for a
taxation year and who makes a claim under this subsec-
tion is deemed to have paid, at the end of the year, on ac-
count of tax payable under this Part for the year, an
amount equal to 25% of the least of
(a) $1,000;
(b) the total of all amounts each of which is an eligible
supplies expense of the eligible educator for the year;
and
(c) if the eligible educator fails to provide the certifi-
cate referred to in subsection (3) in respect of the year,
as and when requested by the Minister, nil.
(3) Subsections (1) and (2) apply to the 2021 and
subsequent taxation years.
5 (1) The Act is amended by adding the following
after section 127.41:
Definitions
tion.
127.42 (1) The following definitions apply in this sec-
designated province means a province specified by the
Minister of Finance for a calendar year. (province déter-
minée)
(iii) sauf dans le cas d’un parent ou d’un grand-
parent du contribuable, est entièrement à sa charge
en raison d’une infirmité mentale ou physique. (eli-
gible family member)
montant forfaitaire Relativement à un particulier pour
une année d’imposition et sous réserve du para-
graphe (3.3), 1 200 $. (standard amount)
(4) Les paragraphes (1) à (3) s’appliquent aux an-
nées d’imposition 2021 et suivantes.
4 (1) Le sous-alinéa a)(ii) de la définition de
dépense admissible, au paragraphe 122.9(1) de la
même loi, est remplacé par ce qui suit :
(ii) consommées ou utilisées directement dans l’ac-
complissement des fonctions liées à son emploi;
(2) Le paragraphe 122.9(2) de la même loi est rem-
placé par ce qui suit :
Paiement en trop réputé
(2) L’éducateur admissible qui produit une déclaration
de revenu pour une année d’imposition et qui fait une de-
mande en vertu du présent paragraphe est réputé avoir
payé, à la fin de l’année, au titre de son impôt payable en
vertu de la présente partie pour l’année, une somme
égale à 25 % de la moindre des sommes suivantes :
a) 1 000 $;
b) le total des sommes dont chacune est une dépense
admissible de l’éducateur admissible pour l’année;
c) si l’éducateur admissible ne remet pas le certificat
visé au paragraphe (3) relativement à l’année selon les
modalités et dans le délai exigés par le ministre, zéro.
(3) Les paragraphes (1) et (2) s’appliquent aux
années d’imposition 2021 et suivantes.
5 (1) La même loi est modifiée par adjonction,
après l’article 127.41, de ce qui suit :
Définitions
127.42 (1) Les définitions qui suivent s’appliquent au
présent article.
activités agricoles S’entend d’une entreprise agricole,
incluant ou excluant les activités visées par règlement.
(farming activities)
2021-2022 4 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 5 Article 5
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
eligible farming expenses, of a taxpayer for a designat-
ed province for a taxation year, means the amount deter-
mined by the formula
A × B
dépenses agricoles admissibles S’entend, relative-
ment à un contribuable pour une province déterminée
pour une année d’imposition, de la somme obtenue par la
formule suivante :
A × B
where
A is
(a) nil, if the total of all amounts deducted in the
year by the taxpayer in computing income under
this Part from farming activities, excluding any
deductions arising from inventory adjustments
under section 28 and from transactions with per-
sons that do not deal at arm’s length with the tax-
payer, is less than $25,000, and
(b) in any other case, the total of all amounts de-
ducted in the year by the taxpayer in computing
income under this Part from farming activities,
excluding any deductions arising from inventory
adjustments under section 28 and from transac-
tions with persons that do not deal at arm’s length
with the taxpayer; and
B is the taxpayer’s relevant proportion for the designat-
ed province for the taxation year. (dépenses agri-
coles admissibles)
farming activities means a farming business, including
or excluding activities prescribed by regulation. (activi-
tés agricoles)
payment rate, for a calendar year for a designated
province, means the rate specified by the Minister of Fi-
nance for the calendar year for the designated province.
(taux de paiement)
relevant proportion, of eligible farming expenses of a
taxpayer for a designated province for a taxation year,
means
(a) if the taxpayer is an individual, the proportion de-
termined by the formula
A ÷ B
où :
A représente :
a) zéro, si le total des sommes déduites dans l’an-
née par le contribuable dans le calcul de son reve-
nu en vertu de la présente partie provenant d’acti-
vités agricoles, à l’exclusion de toute déduction
découlant d’ajustements de l’inventaire en vertu
de l’article 28 et des opérations conclues avec des
personnes ayant un lien de dépendance avec le
contribuable, est inférieur à 25 000 $,
b) sinon, le total des sommes déduites dans l’an-
née par le contribuable dans le calcul de son reve-
nu en vertu de la présente partie provenant d’acti-
vités agricoles, à l’exclusion de toute déduction
découlant d’ajustements de l’inventaire en vertu
de l’article 28 et des opérations conclues avec des
personnes ayant un lien de dépendance avec le
contribuable;
B la proportion pertinente du contribuable pour la pro-
vince déterminée pour l’année d’imposition. (eligible
farming expenses)
proportion pertinente S’entend, relativement aux dé-
penses agricoles admissibles d’un contribuable pour une
province déterminée pour une année d’imposition :
a) si le contribuable est un particulier, de la propor-
tion déterminée par la formule suivante :
A ÷ B
where
A is the individual’s income for the year from farm-
ing activities that is deemed to have been earned
in the year in the designated province in accor-
dance with Part XXVI of the Income Tax Regula-
tions, and
B is the whole of the individual’s income from farm-
ing activities for the year;
(b) if the taxpayer is a corporation, the proportion de-
termined by the formula
C ÷ D
où :
A représente le revenu du particulier pour l’année
provenant des activités agricoles qui est réputé
avoir été gagné au cours de l’année dans la pro-
vince déterminée conformément à la partie XXVI
du Règlement de l’impôt sur le revenu,
B la totalité du revenu du particulier provenant des
activités agricoles pour l’année;
b) si le contribuable est une société, de la proportion
déterminée par la formule suivante :
C ÷ D
où :
C représente le revenu imposable de la société qui
est réputé avoir été gagné dans l’année dans la
province déterminée conformément à la partie IV
du Règlement de l’impôt sur le revenu,
2021-2022 5 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 5 Article 5
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
where
C is the corporation’s taxable income that is deemed
to have been earned in the year in the designated
province in accordance with Part IV of the Income
Tax Regulations, and
D is the whole of the corporation’s taxable income
for the year; and
(c) if the taxpayer is a partnership, the proportion de-
termined by the formula
E ÷ F
D la totalité du revenu imposable de la société pour
l’année;
c) si le contribuable est une société de personnes, de
la proportion déterminée par la formule suivante :
E ÷ F
where
E is the partnership’s income for the fiscal period of
the partnership from farming activities that would
be deemed to have been earned in the year in the
designated province, computed in accordance
with Part XXVI of the Income Tax Regulations as
if the partnership were an individual, and
F is the whole of the partnership’s income from
farming activities for the fiscal period of the part-
nership. (proportion pertinente)
Deemed payment on account of tax
(2) A taxpayer (other than a partnership) that files a pre-
scribed form containing prescribed information with
their return of income for a taxation year is deemed, on
their balance-due day for the year, to have paid on ac-
count of their tax payable under this Part for the year, the
total of all amounts each of which is an amount, for each
designated province and for each calendar year a portion
of which falls within the taxation year, determined by the
formula
(A × B) × (C ÷ D)
où :
E représente le revenu de la société de personnes
pour son exercice provenant d’activités agricoles
qui serait réputé avoir été gagné dans l’année dans
la province déterminée, calculé conformément à la
partie XXVI du Règlement de l’impôt sur le reve-
nu comme si la société de personnes était un par-
ticulier,
F la totalité du revenu provenant des activités agri-
coles de la société de personnes pour son exercice.
(relevant proportion)
province déterminée S’entend d’une province désignée
par le ministre des Finances pour une année civile. (des-
ignated province)
taux de paiement S’entend, relativement à une année
civile pour une province déterminée, du taux prévu par le
ministre des Finances pour l’année civile pour la pro-
vince déterminée. (payment rate)
Montant réputé versé au titre de l’impôt
(2) Un contribuable (sauf une société de personnes) qui
joint à sa déclaration de revenu pour une année d’imposi-
tion un formulaire prescrit contenant des renseigne-
ments prescrits est réputé, à la date d’exigibilité du solde
qui lui est applicable pour l’année, avoir payé au titre de
son impôt payable en vertu de la présente partie pour
l’année le total des sommes dont chacune représente une
somme pour chaque province déterminée et pour chaque
fraction de l’année civile qui se trouve dans l’année d’im-
position, déterminé par la formule suivante :
(A × B) × (C ÷ D)
where
A is the payment rate for the calendar year for the des-
ignated province;
B is the taxpayer’s eligible farming expenses for the
designated province for the taxation year;
C is the number of days within the taxation year that
fall within the calendar year; and
D is the number of days in the taxation year.
où :
A représente le taux de paiement pour l’année civile
pour la province déterminée;
B les dépenses agricoles admissibles du contribuable
pour la province déterminée pour l’année d’imposi-
tion;
C le nombre de jours de l’année d’imposition qui se
trouvent dans l’année civile;
D le nombre de jours de l’année d’imposition.
2021-2022 6 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 5 Article 5
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
Deemed payment on account of tax — partnership
(3) If a taxpayer (other than a partnership) is a member
of a partnership at the end of a fiscal period of the part-
nership that ends in a taxation year of the taxpayer —
and the partnership files a prescribed form containing
prescribed information for that fiscal period and the tax-
payer files a prescribed form containing prescribed infor-
mation with its return of income for the taxation year —
the taxpayer is deemed, on the taxpayer’s balance-due
day for the taxation year, to have paid on account of their
tax payable under this Part for the year, the total of all
amounts each of which is an amount, for each designated
province and for each calendar year a portion of which
falls within the partnership’s fiscal period, determined by
the formula
(A × B) × (C ÷ D) × E
Montant réputé versé au titre de l’impôt — société de
personnes
(3) Lorsqu’un contribuable (sauf une société de per-
sonnes) est un associé d’une société de personnes à la fin
d’un exercice de la société de personnes qui se termine
dans une année d’imposition du contribuable — que la
société de personnes produit un formulaire prescrit
contenant des renseignements prescrits pour cet exercice
et que le contribuable joint à sa déclaration de revenu
pour l’année d’imposition un formulaire prescrit conte-
nant des renseignements prescrits — il est réputé, à la
date d’exigibilité du solde qui lui est applicable pour l’an-
née d’imposition, avoir payé au titre de son impôt
payable en vertu de la présente partie pour l’année d’im-
position, le total des sommes dont chacune représente
une somme, pour chaque province déterminée et pour
chaque fraction de l’année civile qui se trouve dans
l’exercice de la société de personnes, déterminé par la
formule suivante :
(A × B) × (C ÷ D) × E
where
A is the payment rate for the calendar year for the des-
ignated province;
B is the partnership’s eligible farming expenses for the
designated province for the fiscal period;
C is the number of days within the fiscal period that
fall within the calendar year;
D is the number of days in the fiscal period; and
E is the specified proportion of the taxpayer for the fis-
cal period.
Partnerships
(4) For the purposes of this section,
(a) a taxpayer includes a partnership;
(b) the fiscal period of a partnership is deemed to be
its taxation year; and
(c) if a taxpayer is a member of a particular partner-
ship that is a member of another partnership, the tax-
payer is deemed
(i) to be a member of the other partnership, and
(ii) to have a specified proportion in the other part-
nership for a fiscal period of the other partnership
equal to its specified proportion of the particular
partnership — for the last fiscal period of the partic-
ular partnership that ends in the fiscal period of the
other partnership — multiplied by the particular
partnership’s specified proportion of the other
où :
A représente le taux de paiement pour l’année civile
pour la province déterminée;
B les dépenses agricoles admissibles de la société de
personnes pour la province déterminée pour l’exer-
cice;
C le nombre de jours de l’exercice qui se trouvent dans
l’année civile;
D le nombre de jours de l’exercice;
E la proportion déterminée du contribuable pour
l’exercice.
Sociétés de personnes
(4) Pour l’application du présent article, les règles ci-
après s’appliquent :
a) un contribuable comprend une société de per-
sonnes;
b) l’exercice d’une société de personnes est réputé être
son année d’imposition;
c) si un contribuable est un associé d’une société de
personnes donnée qui est associée d’une autre société
de personnes, il est réputé :
(i) être un associé de l’autre société de personnes,
(ii) avoir une proportion déterminée dans l’autre
société de personnes pour un exercice de l’autre so-
ciété de personnes égale à sa proportion déterminée
dans la société de personnes donnée – pour le der-
nier exercice de la société de personnes donnée qui
2021-2022 7 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 5 Article 5
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
partnership for the fiscal period of the other part-
nership.
Authority to specify
(5) For the purposes of this section, the Minister of Fi-
nance may specify for a calendar year
(a) the designated provinces; and
(b) the payment rate for a designated province.
Payment rate not specified
(6) For the purposes of this section, if the Minister of Fi-
nance does not specify the payment rate for a designated
province under paragraph (5)(b), the payment rate is
deemed to be nil.
When assistance received
(7) For the purposes of this Act, and for greater certain-
ty, an amount that a taxpayer is deemed under subsec-
tion (2) or (3) to have paid for a taxation year is assis-
tance received by the taxpayer from a government imme-
diately before the end of the year.
Relevant proportion — special rule
(8) For purposes of determining the relevant proportion
of eligible farming expenses of a taxpayer for a designat-
ed province in a taxation year,
(a) if the income of an individual or partnership from
farming activities for the year is nil, the income for the
year from farming activities that is deemed to have
been earned in the year in the designated province
shall be computed in accordance with Part XXVI of
the Income Tax Regulations as if the individual or
partnership earned $1,000,000 of income from farming
activities; and
(b) if the taxable income of a corporation is nil, the
corporation’s taxable income that is deemed to have
been earned in the year in the designated province
shall be computed in accordance with Part IV of the
Income Tax Regulations as if the corporation had tax-
able income for the year in the amount of $1,000,000.
(2) Subsection (1) applies to the 2021 and subse-
quent taxation years.
se termine au cours de l’exercice de l’autre société
de personnes – multipliée par la proportion déter-
minée de la société de personnes donnée dans
l’autre société de personnes pour l’exercice de
l’autre société de personnes.
Pouvoirs de désigner ou prévoir
(5) Pour l’application du présent article, le ministre des
Finances peut, pour une année civile :
a) désigner les provinces déterminées;
b) prévoir le taux de paiement pour une province dé-
terminée.
Taux de paiement non prévu
(6) Pour l’application du présent article, si le ministre
des Finances ne prévoit pas le taux de paiement pour une
province déterminée en vertu de l’alinéa (5)b), le taux de
paiement est réputé être nul.
Moment de réception d’un montant d’aide
(7) Pour l’application de la présente loi, il est entendu
qu’un montant qu’un contribuable est réputé, en applica-
tion des paragraphes (2) ou (3), avoir payé pour une an-
née d’imposition est un montant d’aide qu’il a reçu d’un
gouvernement immédiatement avant la fin de l’année.
Proportion pertinente — règle spéciale
(8) Aux fins du calcul de la proportion pertinente des dé-
penses agricoles admissibles d’un contribuable pour une
province déterminée au cours d’une année d’imposition,
les règles ci-après s’appliquent :
a) si le revenu d’un particulier ou d’une société de
personnes provenant d’activités agricoles pour l’année
est nul, le revenu pour l’année provenant d’activités
agricoles qui est réputé avoir été gagné au cours de
l’année dans la province déterminée est calculé
conformément à la partie XXVI du Règlement de l’im-
pôt sur le revenu comme si le revenu provenant des
activités agricoles gagné par le particulier ou la société
de personnes s’élevait à 1 000 000 $;
b) si le revenu imposable d’une société est nul, le re-
venu imposable de la société qui est réputé avoir été
gagné au cours de l’année dans la province déterminée
est calculé conformément à la partie IV du Règlement
de l’impôt sur le revenu comme si le revenu imposable
de la société pour l’année s’élevait à 1 000 000 $.
(2) Le paragraphe (1) s’applique aux années d’im-
position 2021 et suivantes.
2021-2022 8 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 6 Article 6
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
6 (1) The Act is amended by adding the following
after section 127.42:
COVID-19 – Air Quality
Improvement Tax Credit
Definitions
tion.
127.43 (1) The following definitions apply in this sec-
assistance means an amount, other than a prescribed
amount or an amount deemed under subsection (2) to
have been paid, that would be included under paragraph
12(1)(x) in computing an eligible entity’s income for any
taxation year if that paragraph were read without refer-
ence to subparagraphs 12(1)(x)(v) to (vii). (montant
d’aide)
eligible entity, for a taxation year, means
(a) a qualifying corporation for the taxation year;
(b) an individual other than a trust; or
(c) a partnership. (entité déterminée)
qualifying corporation, for a particular taxation year,
means a particular corporation that meets the following
conditions:
(a) it is a Canadian-controlled private corporation or
would be a Canadian-controlled private corporation
absent the application of subsection 136(1); and
(b) it is the case that
$15,000,000 > A + B
6 (1) La même loi est modifiée par adjonction,
après l’article 127.42, de ce qui suit :
Crédit pour l’amélioration de la
qualité de l’air – COVID-19
Définitions
127.43 (1) Les définitions qui suivent s’appliquent au
présent article.
dépense admissible S’entend de toute dépense visée
par règlement engagée ou effectuée par une entité déter-
minée pendant la période d’admissibilité dans le cours de
ses activités commerciales normales. (qualifying expen-
diture)
dépense totale de ventilation Relativement à une enti-
té déterminée pour une année d’imposition, s’entend de
la moindre des sommes suivantes :
a) le total des sommes représentant chacune une dé-
pense totale par emplacement pour un emplacement
admissible de l’entité déterminée pour l’année d’impo-
sition;
b) la somme obtenue par la formule suivante :
50 000 $ × X − Y
where
A is the particular corporation’s taxable capital em-
ployed in Canada (in this formula, within the
meaning assigned by section 181.2 or 181.3) for its
immediately preceding taxation year, and
B is the total of all amounts, each of which is the
taxable capital employed in Canada of a corpora-
tion that is associated in the particular taxation
year with the particular corporation for the associ-
ated corporation’s last taxation year that ended
before the beginning of the particular taxation
year. (société admissible)
qualifying expenditure means an outlay or expense
prescribed by regulation that is made or incurred by an
eligible entity during the qualifying period in the course
of the eligible entity’s ordinary commercial activities.
(dépense admissible)
où :
X représente, selon le cas :
(i) 100 %, sauf si l’entité déterminée est affiliée
à un moment donné durant la période d’admis-
sibilité à une ou plusieurs entités déterminées
réputées avoir payé une somme en application
du paragraphe (2) relativement à la période
d’admissibilité, ou dans le cas d’une société de
personnes, l’un de ses associés est réputé avoir
payé une somme en application du para-
graphe (3) relativement à la société de per-
sonnes,
(ii) un pourcentage attribué à l’entité détermi-
née en vertu d’une entente, si, à la fois :
(A) l’entente est conclue entre l’entité déter-
minée et chacune des entités déterminées
qui, à la fois :
(I) est affiliée à l’entité déterminée durant
la période d’admissibilité,
(II) est réputée avoir payé une somme en
application du paragraphe (2) relative-
ment à la période d’admissibilité ou, dans
le cas d’une société de personnes, l’un de
ses associés est réputé avoir payé une
2021-2022 9 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 6 Article 6
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
qualifying location, of an eligible entity, means real or
immovable property (other than property that is a self-
contained domestic establishment, or part of such a self-
contained domestic establishment, the land subjacent to
the self-contained domestic establishment and such por-
tion of any immediately contiguous land as can reason-
ably be regarded as contributing to the use and enjoy-
ment of the self-contained domestic establishment as a
residence) in Canada used by the eligible entity primarily
in the course of its ordinary commercial activities. (em-
placement admissible)
qualifying period means the period that begins on
September 1, 2021 and ends on December 31, 2022. (pé-
riode d’admissibilité)
total per location expense, for a qualifying location of
an eligible entity for a taxation year, means the lesser of
(a) the amount determined by the formula
A − B
somme en application du paragraphe (3)
relativement à la société de personnes,
(B) l’entente est présentée au ministre par
l’entité déterminée et chaque entité détermi-
née visée à la division (A), selon le formu-
laire prescrit et les modalités prescrites,
(C) l’entente attribue, aux fins de la présente
définition, un pourcentage relativement à
chaque entité déterminée mentionnée à la
division (A),
(D) la somme des pourcentages attribués en
vertu de l’entente ne dépasse pas 100 %,
(iii) dans les autres cas, zéro,
Y le total des sommes représentant chacune la dé-
pense totale de ventilation de l’entité déterminée
pour une année d’imposition antérieure, pour la-
quelle une somme est réputée avoir été payée en
application des paragraphes (2) ou (3). (total ven-
tilation expense)
dépense totale par emplacement Relativement à un
emplacement admissible d’une entité déterminée pour
une année d’imposition, correspond au moindre des
montants suivants :
a) le montant obtenu par la formule suivante :
A − B
where
A is the total of all amounts, each of which is a quali-
fying expenditure of the eligible entity made or in-
curred in the taxation year in respect of the quali-
fying location (or, for the first taxation year that
ends after 2021, the qualifying expenditures made
or incurred in respect of the qualifying location
from the start of the qualifying period to the end
of that first taxation year), and
B is the total of all amounts, each of which is an
amount of assistance that
(i) the eligible entity has received, is entitled to
receive or can reasonably be expected to re-
ceive, in respect of amounts described in A, and
(ii) has not been repaid before the end of the
taxation year pursuant to a legal obligation to
do so; and
(b) the amount determined by the formula
$10,000 − C
where
C is the total of all amounts, each of which is a quali-
fying expenditure in respect of the qualifying loca-
tion and
(i) is a qualifying expenditure of the eligible en-
tity, in respect of which an amount under sub-
section (2) or (3) is deemed to have been paid
in a prior taxation year, or
(ii) is a qualifying expenditure of another eligi-
ble entity that is affiliated during the qualifying
où :
A représente le total des sommes représentant cha-
cune une dépense admissible de l’entité détermi-
née engagée ou effectuée dans l’année d’imposi-
tion à l’égard d’un emplacement admissible (ou,
pour la première année d’imposition qui se ter-
mine après 2021, les dépenses admissibles effec-
tuées ou engagées à l’égard d’un emplacement ad-
missible depuis le début de la période d’admissibi-
lité jusqu’à la fin de cette première année d’impo-
sition),
B le total des sommes représentant chacune un
montant d’aide que l’entité déterminée a reçu, est
en droit de recevoir ou peut vraisemblablement
s’attendre à recevoir, relativement aux sommes vi-
sées à l’élément A, et qui n’a pas été remboursé
avant la fin de l’année d’imposition conformément
à une obligation légale de rembourser;
b) la somme obtenue par la formule suivante :
10 000 $ − C
où :
2021-2022 10 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 6 Article 6
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
period with the eligible entity, in respect of
which an amount under subsection (2) or (3) is
deemed to have been paid in any taxation year.
(dépense totale par emplacement)
total ventilation expense, of an eligible entity for a tax-
ation year, means the lesser of
(a) the total of all amounts, each of which is a total per
location expense for a qualifying location of the eligi-
ble entity for the taxation year; and
(b) the amount determined by the formula
$50,000 × X − Y
where
X is
(i) 100%, unless the eligible entity is affiliated
at any time in the qualifying period with one or
more other eligible entities that are deemed to
have paid an amount under subsection (2) in
respect of the qualifying period, or, in the case
of a partnership, has a member that is deemed
to have paid an amount under subsection (3) in
respect of the partnership,
(ii) a percentage assigned to the eligible entity
under an agreement, if
(A) the agreement is entered into by the eli-
gible entity and each eligible entity that
(I) is affiliated with the eligible entity in
the qualifying period, and
(II) is deemed to have paid an amount un-
der subsection (2) in respect of the quali-
fying period, or, in the case of a partner-
ship, has a member that is deemed to
have paid an amount under subsection
(3) in respect of the partnership,
(B) the agreement is filed in prescribed form
and manner with the Minister by the eligible
entity and each eligible entity referred to in
clause (A),
(C) the agreement assigns, for the purposes
of this definition, a percentage in respect of
each eligible entity referred to in clause (A),
and
(D) the total of all the percentages assigned
under the agreement does not exceed 100%,
and
(iii) in any other case, nil, and
Y is the total of all amounts, each of which is the to-
tal ventilation expense of the eligible entity for a
C représente le total des sommes représentant cha-
cune une dépense admissible à l’égard de l’empla-
cement admissible qui, selon le cas :
(i) est une dépense admissible de l’entité déter-
minée pour laquelle une somme est réputée
avoir été payée en application des para-
graphes (2) ou (3) dans une année d’imposition
antérieure,
(ii) est une dépense admissible d’une autre en-
tité déterminée affiliée à l’entité déterminée
durant la période d’admissibilité pour laquelle
une somme est réputée avoir été payée en ap-
plication des paragraphes (2) ou (3) au cours
d’une année d’imposition. (total per location
expense)
emplacement admissible Relativement à une entité
déterminée, s’entend d’un bien immeuble ou réel (à l’ex-
clusion d’un bien qui est un établissement domestique
autonome, ou la partie d’un tel établissement, le fonds de
terre sous-jacent à l’établissement domestique autonome
ainsi que la partie du fonds de terre adjacent qu’il est rai-
sonnable de considérer comme facilitant l’usage de celui-
ci comme résidence) au Canada utilisé par l’entité déter-
minée principalement dans le cours de ses activités com-
merciales normales. (qualifying location)
entité déterminée Pour une année d’imposition s’en-
tend, selon le cas :
a) d’une société admissible pour l’année d’imposition;
b) d’un particulier, à l’exclusion d’une fiducie;
c) d’une société de personnes. (eligible entity)
montant d’aide Un montant (à l’exclusion d’un mon-
tant prescrit ou d’un montant réputé payé en vertu du
paragraphe (2)) qui serait inclus en application de l’ali-
néa 12(1)x) dans le calcul du revenu d’une entité détermi-
née pour une année d’imposition, compte non tenu des
sous-alinéas 12(1)x)(v) à (vii). (assistance)
période d’admissibilité Correspond à la période du
1er septembre 2021 au 31 décembre 2022. (qualifying pe-
riod)
société admissible Pour une année d’imposition don-
née, s’entend d’une société donnée qui satisfait aux
conditions suivantes :
a) elle est une société privée sous contrôle canadien
ou le serait compte non tenu du paragraphe 136(1);
b) l’énoncé de la formule ci-après s’avère :
2021-2022 11 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Section 6 Article 6
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
prior taxation year in respect of which an amount
is deemed to have been paid under subsection (2)
or (3). (dépense totale de ventilation)
15 000 000 $ > A + B
Refundable tax credit
(2) An eligible entity (other than a partnership) that files
a prescribed form containing prescribed information
with its return of income for a taxation year that ends af-
ter 2021 is deemed to have, on its balance-due day for the
year, paid on account of its tax payable under this Part
for the year an amount equal to 25% of its total ventila-
tion expense for the taxation year.
Refundable tax credit — partnership
(3) If an eligible entity (other than a partnership) is a
member of a partnership at the end of a fiscal period of
the partnership that ends after 2021 and that ends in a
taxation year of the eligible entity — and the partnership
files an information return in prescribed form containing
prescribed information for that fiscal period and the eli-
gible entity files a prescribed form containing prescribed
information with its return of income for the taxation
year — then the eligible entity is deemed to have paid, on
the eligible entity’s balance-due day for the taxation year
on account of the eligible entity’s tax payable under this
Part for the taxation year, an amount determined by the
formula
0.25 × A × B
où :
A représente le capital imposable de la société don-
née utilisé au Canada (s’entendant dans cette for-
mule au sens des articles 181.2 ou 181.3) pour son
année d’imposition précédente,
B le total des sommes représentant chacune le capi-
tal imposable utilisé au Canada d’une société asso-
ciée dans l’année d’imposition donnée à la société
donnée pour la dernière année d’imposition de la
société associée qui s’est terminée avant le début
de l’année d’imposition donnée. (qualifying cor-
poration)
Crédit d’impôt remboursable
(2) Une entité déterminée (sauf une société de per-
sonnes) qui joint à sa déclaration de revenu pour une an-
née d’imposition se terminant après 2021 un formulaire
prescrit contenant des renseignements prescrits est répu-
tée avoir payé, à la date d’exigibilité du solde qui lui est
applicable pour l’année, une somme au titre de son impôt
payable pour l’année en vertu de la présente partie cor-
respondant à 25 % de sa dépense totale de ventilation
pour l’année l’imposition.
Crédit d’impôt remboursable — société de personnes
(3) Lorsqu’une entité déterminée (sauf une société de
personnes) est un associé d’une société de personnes à la
fin d’un exercice de cette société de personnes se termi-
nant à la fois après 2021 et dans une année d’imposition
de l’entité déterminée — que la société de personnes pro-
duit une déclaration de renseignements selon le formu-
laire prescrit contenant les renseignements prescrits
pour cet exercice et que l’entité déterminée produit un
formulaire prescrit contenant les renseignements pres-
crits avec sa déclaration de revenu pour l’année d’imposi-
tion — l’entité déterminée est réputée avoir payé, à la
date d’exigibilité du solde qui lui est applicable pour l’an-
née au titre de son impôt payable pour l’année en vertu
de la présente partie, la somme obtenue par la formule
suivante :
0,25 × A × B
where
A is the total ventilation expense of the partnership for
the fiscal period; and
B is the specified proportion of the eligible entity for
the fiscal period of the partnership.
Partnerships
(4) For the purposes of this section,
où :
A représente la dépense totale de ventilation de la so-
ciété de personnes pour l’exercice;
B la proportion déterminée de l’entité déterminée pour
l’exercice de la société de personnes.
Sociétés de personnes
(4) Pour l’application du présent article, les règles ci-
après s’appliquent :
2021-2022 12 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Amendments to the Act Sections 6-7 Articles 6-7
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modification de la loi
(a) the fiscal period of a partnership is deemed to be
its taxation year; and
(b) if an eligible entity is a member of a particular
partnership that is a member of another partnership,
the eligible entity is deemed
(i) to be a member of the other partnership, and
(ii) to have a specified proportion in the other part-
nership for a fiscal period of the other partnership
equal to its specified proportion of the particular
partnership — for the last fiscal period of the partic-
ular partnership that ends in the fiscal period of the
other partnership — multiplied by the particular
partnership’s specified proportion of the other part-
nership for the fiscal period of the other partner-
ship.
When assistance received
(5) For the purposes of this Act other than this section,
and for greater certainty, an amount that an eligible enti-
ty is deemed under subsection (2) or (3) to have paid is
assistance received by it from a government immediately
before the end of the taxation year to which it relates.
Affiliated entities
(6) For the purposes of this section, if two eligible enti-
ties are affiliated with the same eligible entity, they are
deemed to be affiliated with each other.
(2) Subsection (1) is deemed to have come into
force on September 1, 2021.
C.R.C., c. 945
Related Amendments to the Income
Tax Regulations
7 (1) The portion of subsection 7304(2) of the In-
come Tax Regulations before paragraph (c) is re-
placed by the following:
(2) For the purposes of this section and section 110.7 of
the Act, the trip cost to a taxpayer in respect of a trip
made by an individual who, at the time the trip was
made, was a member of the taxpayer’s household is the
least of
(a) the amount of employer-provided travel bene-
fits, as defined in subsection 110.7(6) of the Act, that is
claimed by the taxpayer in respect of the trip;
a) l’exercice d’une société de personnes est réputé être
son année d’imposition;
b) si une entité déterminée est un associé d’une socié-
té de personnes donnée qui est un associé d’une autre
société de personnes, l’entité déterminée est réputée :
(i) être un associé de l’autre société de personnes,
(ii) avoir une proportion déterminée dans l’autre
société de personnes pour un exercice de l’autre so-
ciété de personnes égale à sa proportion déterminée
dans la société de personnes donnée — pour le der-
nier exercice de la société de personnes donnée qui
se termine dans l’exercice de l’autre société de per-
sonnes — multipliée par la proportion déterminée
de la société de personnes donnée dans l’autre so-
ciété de personnes pour l’exercice de l’autre société
de personnes.
Moment de réception d’un montant d’aide
(5) Pour l’application de la présente loi, à l’exception du
présent article, il est entendu qu’un montant qu’une enti-
té déterminée est réputée, en application des para-
graphes (2) ou (3), avoir payé est un montant d’aide
qu’elle a reçu d’un gouvernement immédiatement avant
la fin de l’année d’imposition à laquelle le montant se
rapporte.
Entités affiliées
(6) Pour l’application du présent article, si deux entités
déterminées sont affiliées à la même entité déterminée,
elles sont réputées être affiliées l’une à l’autre.
(2) Le paragraphe (1) est réputé être entré en vi-
gueur le 1er septembre 2021.
C.R.C., ch. 945
Modifications connexes au
Règlement de l’impôt sur le revenu
7 (1) Le passage du paragraphe 7304(2) du Règle-
ment de l’impôt sur le revenu précédant l’ali-
néa c) est remplacé par ce qui suit :
(2) Pour l’application du présent article et de l’arti-
cle 110.7 de la Loi, les frais, pour un contribuable, d’un
voyage effectué par un particulier qui, au moment du
voyage, était membre de la maisonnée du contribuable
correspondent au moins élevé des montants suivants :
a) le montant des avantages relatifs aux voyages ti-
rés de l’emploi, au sens du paragraphe 110.7(6) de la
Loi, pour lequel le contribuable a demandé une déduc-
tion au titre du voyage;
2021-2022 13 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Related Amendments to the Income Tax Regulations Sections 7-8 Articles 7-8
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modifications connexes au Règlement de l’impôt sur le revenu
(b) the total of
(i) the amount of travel assistance described in
paragraph (a) of the definition employer-provided
travel benefits in subsection 110.7(6) of the Act in
respect of the trip, and
(ii) travel expenses incurred by the taxpayer, or the
spouse or common-law partner of the taxpayer, for
the trip; and
(2) Subsections 7304(3) and (4) of the Regulations
are replaced by the following:
(3) In determining the trip cost to the taxpayer in respect
of the trip, if the amount determined under paragraph
(2)(a) is nil, subsection (2) is to be read without reference
to that paragraph.
(4) For the purposes of subsection (2), the amounts
claimed by the taxpayer in paragraph (2)(a) in respect of
a trip are deemed to be nil, unless the taxpayer was deal-
ing at arm’s length with the employer at the time that the
employer-provided travel benefits, as defined in sub-
section 110.7(6) of the Act, were provided to the taxpayer.
(3) Subsections (1) and (2) apply to the 2021 and
subsequent taxation years.
8 (1) Section 9600 of the Regulations is amended
by striking out “and” at the end of paragraph (c)
and by adding the following after paragraph (d):
(e) calculators (including graphing calculators);
(f) external data storage devices;
(g) web cams, microphones and headphones;
(h) multimedia projectors;
(i) wireless pointer devices;
(j) electronic educational toys;
(k) digital timers;
(l) speakers;
(m) video streaming devices;
(n) printers; and
(o) laptop, desktop and tablet computers, provided
that none of these items are made available to the eli-
gible educator by their employer for use outside of the
classroom.
b) le total des montants suivants :
(i) le montant de l’aide visé à l’alinéa a) de la défini-
tion de avantages relatifs aux voyages tirés de
l’emploi, au paragraphe 110.7(6) de la Loi, pour le
voyage,
(ii) le montant des frais de déplacement engagés
par le contribuable, ou par son époux ou conjoint
de fait, pour ce voyage;
(2) Les paragraphes 7304(3) et (4) du même règle-
ment sont remplacés par ce qui suit :
(3) Dans la détermination des frais de voyage relative-
ment au voyage pour le contribuable, si le montant déter-
miné selon l’alinéa (2)a) est zéro, le paragraphe (2) s’ap-
plique compte non tenu de cet alinéa.
(4) Pour l’application du paragraphe (2), les montants
que le contribuable demande en déduction à l’alinéa (2)a)
pour un voyage sont réputés nuls, sauf si celui-ci n’avait
pas de lien de dépendance avec l’employeur au moment
où les avantages relatifs aux voyages tirés de l’em-
ploi, au sens du paragraphe 110.7(6) de la Loi, lui ont été
conférés.
(3) Les paragraphes (1) et (2) s’appliquent aux
années d’imposition 2021 et suivantes.
8 (1) L’article 9600 du même règlement est modi-
fié par adjonction, après l’alinéa d), de ce qui
suit :
e) des calculatrices (y compris des calculatrices gra-
phiques);
f) des supports de stockage de données externes;
g) des webcams, microphones et casques d’écoute;
h) des projecteurs multimédias;
i) des dispositifs de pointage sans fil;
j) des jouets éducatifs électroniques;
k) des chronomètres numériques;
l) des haut-parleurs;
m) des appareils de diffusion de vidéo en continu;
n) des imprimantes;
o) des ordinateurs portatifs, ordinateurs de bureau et
tablettes électroniques, à condition qu’aucun de ces
articles ne soit mis à la disposition de l’éducateur
2021-2022 14 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Related Amendments to the Income Tax Regulations Sections 8-9 Articles 8-9
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modifications connexes au Règlement de l’impôt sur le revenu
(2) Subsection (1) applies to the 2021 and subse-
quent taxation years.
9 (1) The Regulations are amended by adding the
following after section 9600:
admissible par son employeur aux fins d’utilisation à
l’extérieur de la classe.
(2) Le paragraphe (1) s’applique aux années d’im-
position 2021 et suivantes.
9 (1) Le même règlement est modifié par adjonc-
tion, après l’article 9600, de ce qui suit :
PART XCVII
COVID-19 — Air Quality
Improvement Tax Credit
Tax credit — air quality improvement
9700 (1) The following definitions apply in this section.
HEPA filter means a high-efficiency particulate air filter
that has been tested to ensure efficiency equal to or ex-
ceeding 99.97% for removal of airborne particles having a
mean aerodynamic diameter of 0.3 µm (micrometres)
from the air. (filtre HEPA)
HVAC system means a mechanical heating, ventilating
and air conditioning system that is installed in a building,
and includes all of its equipment and components. (sys-
tème CVCA)
MERV means the minimum efficiency reporting value
parameters specified in ANSI/ASHRAE Standard
52.2-2017, Method of Testing General Ventilation Air-
Cleaning Devices for Removal Efficiency by Particle Size,
Section 12, Minimum Efficiency Reporting Value
(MERV) for Air Cleaners, Table 12-1, Minimum Efficien-
cy Reporting Value (MERV) Parameters. (MERV)
(2) Subject to subsection (3), for the purposes of the defi-
nition qualifying expenditure in subsection 127.43(1) of
the Act, the following outlays and expenses are pre-
scribed to the extent that they are reasonable and intend-
ed primarily to increase outdoor air intake or to improve
air cleaning:
(a) outlays and expenses that are directly attributable
to the purchase, installation, conversion or upgrade of
a new or retrofitted HVAC system placed in service at
a qualifying location that meets either of the following
conditions:
PARTIE XCVII
COVID-19 — Crédit d’impôt
pour l’amélioration de la qualité
de l’air
Crédit d’impôt — amélioration de la qualité de l’air
9700 (1) Les définitions qui suivent s’appliquent au
présent article.
filtre HEPA Filtre à air à particules de haute efficacité
ayant fait l’objet de tests pour garantir l’efficacité du re-
trait de l’air d’au moins 99,97 % des particules aéropor-
tées d’un diamètre aérodynamique moyen de 0,3 μm (mi-
cromètres). (HEPA filter)
MERV S’entend des paramètres de la valeur consignée
d’efficacité minimale (MERV) de la norme ANSI/
ASHRAE 52.2-2017, intitulée Method of Testing General
Ventilation Air-Cleaning Devices for Removal Efficiency
by Particle Size, Section 12, Minimum Efficiency Repor-
ting Value (MERV) for Air Cleaners, Tableau 12-1, Mini-
mum Efficiency Reporting Value (MERV) Parameters.
(MERV)
système CVCA Système mécanique de chauffage, de
ventilation et de conditionnement d’air installé dans un
bâtiment, y compris tous les appareils et les éléments qui
en font partie. (HVAC system)
(2) Sous réserve du paragraphe (3), pour l’application de
la définition de dépense admissible au para-
graphe 127.43(1) de la Loi, les dépenses suivantes sont vi-
sées dans la mesure où elles sont raisonnables et princi-
palement destinées à accroître l’entrée d’air extérieur ou
à améliorer l’assainissement de l’air :
a) les dépenses directement attribuables à l’achat, à
l’installation, à la conversion ou à la mise à niveau
d’un système CVCA nouveau ou remis en état qui est
mis en service à un emplacement admissible et qui
remplit l’une des conditions suivantes :
2021-2022 15 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 1 Income Tax Act Related Amendments to the Income Tax Regulations Section 9 Article 9
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 1 Loi de l’impôt sur le revenu
Modifications connexes au Règlement de l’impôt sur le revenu
(i) the system is designed to filter air at a rate in ex-
cess of MERV 8 or an equivalent level of filtration,
or
(ii) the system is designed to filter air at a rate
equal to MERV 8 or an equivalent level of filtration
and the following conditions are met:
(A) the system is designed to achieve an outdoor
air supply rate in excess of what is required for
the space by applicable building codes, and
(B) in the case of an upgrade or conversion of an
existing system, prior to the upgrade or conver-
sion, the system was designed to filter air at a
rate equal to MERV 8; and
(b) outlays and expenses that are directly attributable
to the purchase of a device that is placed in service at a
qualifying location and designed to filter air using a
HEPA filter.
(3) The outlays and expenses in subsection (2) do not in-
clude an outlay or expense of an eligible entity
(a) made or incurred under the terms of an agreement
entered into before the start of the qualifying period;
(b) that is the cost of recurring or routine repair or
maintenance;
(c) that can reasonably be expected to be paid or re-
turned, directly or indirectly, in any manner whatever,
to
(i) the eligible entity,
(ii) a person or partnership not dealing at arm’s
length with the eligible entity, or
(iii) another person or partnership at the direction
of the eligible entity;
(d) that is paid to a party with which the eligible entity
does not deal at arm’s length;
(e) that is salary or wages paid to an employee of the
eligible entity; or
(f) for financing costs.
(2) Subsection (1) is deemed to have come into
force on September 1, 2021.
(i) le système est conçu pour filtrer l’air à un taux
supérieur à MERV 8 ou un niveau de filtration équi-
valent,
(ii) le système est conçu pour filtrer l’air à un taux
égal à MERV 8, ou à un niveau de filtration équi-
valent, et les conditions suivantes sont remplies :
(A) le système est conçu pour atteindre un taux
d’entrée d’air extérieur supérieur aux exigences
prévues par les codes du bâtiment applicables à
l’espace,
(B) dans le cas d’une mise à niveau ou d’une
conversion d’un système existant, avant la mise à
niveau ou la conversion, le système était conçu
pour filtrer l’air à un taux équivalent à MERV 8;
b) les dépenses directement attribuables à l’achat d’un
appareil qui est mis en service à un emplacement ad-
missible et qui est conçu pour filtrer l’air à l’aide de
filtres HEPA.
(3) Les dépenses prévues au paragraphe (2) n’incluent
pas les dépenses d’une entité déterminée :
a) effectuées ou engagées en vertu des modalités
d’une entente conclue avant le début de la période
d’admissibilité;
b) qui représentent le coût de réparation ou d’entre-
tien récurrent ou régulier;
c) dont on peut raisonnablement s’attendre à ce
qu’elles soient restituées, directement ou indirecte-
ment, de quelque manière que ce soit, selon le cas, à :
(i) l’entité déterminée,
(ii) une personne ou société de personnes ayant un
lien de dépendance avec celle-ci,
(iii) une autre personne ou société de personnes
conformément aux instructions de celle-ci;
d) qui sont payées à une partie avec laquelle l’entité
déterminée a un lien de dépendance;
e) qui constituent le salaire ou traitement versé à un
employé de l’entité déterminée;
f) visant les coûts de financement.
(2) Le paragraphe (1) est réputé être entré en vi-
gueur le 1er septembre 2021.
2021-2022 16 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
PART 2
Underused Housing Tax Act
Enactment of Act
Enactment
10 (1) The Underused Housing Tax Act is enact-
ed as follows:
An Act respecting the taxation of underused housing
Short Title
Short title
Act.
1 This Act may be cited as the Underused Housing Tax
PARTIE 2
Loi sur la taxe sur les logements
sous-utilisés
Édiction de la loi
Édiction
10 (1) Est édictée la Loi sur la taxe sur les loge-
ments sous-utilisés, dont le texte suit :
Loi visant la taxation des logements sous-utilisés
Titre abrégé
Titre abrégé
1 Loi sur la taxe sur les logements sous-utilisés.
PART 1
Interpretation and General Rules
of Application
Definitions
2 The following definitions apply in this Act.
assessment means an assessment under this Act and
includes a reassessment. (cotisation)
bank means a bank as defined in section 2 of the Bank
Act or an authorized foreign bank, as defined in that
section, that is not subject to the restrictions and require-
ments referred to in subsection 524(2) of that Act.
(banque)
business number means any number (other than a So-
cial Insurance Number) used by the Minister to identify a
person for the purposes of this Act. (numéro d’entre-
prise)
citizen has the same meaning as in subsection 2(1) of
the Citizenship Act. (citoyen)
Commissioner means, except in sections 21, 22 and 83,
the Commissioner of Revenue appointed under section
25 of the Canada Revenue Agency Act. (commissaire)
common-law partner of an individual at any time
means another individual who is the common-law
PARTIE 1
Définitions et règles
d’application générales
Définitions
loi.
2 Les définitions qui suivent s’appliquent à la présente
bail de longue durée Bail, licence ou accord semblable
portant sur un fonds et prévoyant la possession continue
du fonds pour une période d’au moins vingt ans ou une
option d’achat du fonds. (long-term lease)
banque Banque, au sens de l’article 2 de la Loi sur les
banques, ou banque étrangère autorisée, au sens de cet
article, qui ne fait pas l’objet des restrictions et exigences
visées au paragraphe 524(2) de cette loi. (bank)
caisse de crédit Caisse de crédit au sens du para-
graphe 137(6) de la Loi de l’impôt sur le revenu, ou socié-
té visée à l’alinéa a) de la définition de compagnie d’as-
surance-dépôts au paragraphe 137.1(5) de cette loi.
(credit union)
citoyen S’entend au sens du paragraphe 2(1) de la Loi
sur la citoyenneté. (citizen)
commissaire Sauf aux articles 21, 22 et 83, s’entend du
commissaire du revenu, nommé en vertu de l’article 25
de la Loi sur l’Agence du revenu du Canada. (Commis-
sioner)
2021-2022 17 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
partner of the individual at that time for the purposes of
the Income Tax Act. (conjoint de fait)
confirmed delivery service means certified or regis-
tered mail or any other delivery service that provides a
record that a notice or document has been sent or deliv-
ered. (service de messagerie)
credit union means a credit union as defined in subsec-
tion 137(6) of the Income Tax Act or a corporation de-
scribed in paragraph (a) of the definition deposit insur-
ance corporation in subsection 137.1(5) of that Act.
(caisse de crédit)
disaster means an earthquake, fire, flood, landslide,
spill or leakage of oil, gas or another poisonous or dan-
gerous substance or any other natural disaster or danger-
ous event. (sinistre)
dwelling unit means a residential unit that contains pri-
vate kitchen facilities, a private bath and a private living
area. (local d’habitation)
excluded owner of a residential property for a calendar
year means a person (other than a prescribed person)
that is on December 31 of the calendar year
(a) Her Majesty in right of Canada or a province or an
agent of Her Majesty in right of Canada or a province;
(b) an individual who is a citizen or permanent resi-
dent, except to the extent that the individual is an
owner of the residential property in their capacity as a
trustee of a trust (other than a personal representative
in respect of a deceased individual) or as a partner of a
partnership;
(c) a corporation incorporated under the laws of
Canada or a province whose shares are listed on a
stock exchange in Canada for which a designation un-
der section 262 of the Income Tax Act is in effect;
(d) a person that is an owner of the residential proper-
ty in their capacity as a trustee of
(i) a mutual fund trust as defined in subsection
248(1) of the Income Tax Act,
(ii) a real estate investment trust as defined in
subsection 122.1(1) of that Act, or
(iii) a SIFT trust as defined in subsection 122.1(1)
of that Act;
(e) a registered charity as defined in subsection
248(1) of the Income Tax Act;
condition dangereuse Relativement à un immeuble ré-
sidentiel, à l’exclusion d’une circonstance visée par règle-
ment, s’entend de l’une des circonstances suivantes :
a) un élément structurel de l’immeuble résidentiel, y
compris le toit, les fondations, les murs extérieurs, les
murs porteurs intérieurs, les planchers et les escaliers,
est défectueux ou endommagé;
b) du mazout, du gaz ou une autre substance toxique
ou dangereuse est présent dans l’immeuble résiden-
tiel;
c) toute autre circonstance relative à l’immeuble rési-
dentiel qui est dangereuse pour la santé ou la sécurité
de ses occupants;
d) une circonstance visée par règlement. (hazardous
condition)
conjoint de fait Quant à un particulier à un moment
donné, particulier qui est le conjoint de fait du particulier
à ce moment pour l’application de la Loi de l’impôt sur le
revenu. (common-law partner)
cotisation Cotisation ou nouvelle cotisation établie en
vertu de la présente loi. (assessment)
fiducie canadienne déterminée À l’égard d’une année
civile et d’un immeuble résidentiel, s’entend :
a) soit d’une fiducie pour laquelle chaque bénéficiaire
possédant un droit de bénéficiaire sur l’immeuble rési-
dentiel est, au 31 décembre de l’année civile, un pro-
priétaire exclu ou une personne morale canadienne
déterminée;
b) soit une fiducie visée par règlement. (specified
Canadian trust)
immeuble résidentiel Un immeuble, autre qu’un im-
meuble visé par règlement, qui est situé au Canada et qui
est :
a) une maison individuelle ou bâtiment similaire,
comprenant au plus trois locaux d’habitation, y com-
pris la proportion des dépendances et du fonds sous-
jacent ou contigu au bâtiment qui est raisonnablement
nécessaire à son usage résidentiel;
b) une partie d’un bâtiment qui constitue une maison
jumelée ou en rangée, un logement en copropriété ou
un local semblable qui est, ou est destiné à être, une
parcelle séparée ou une autre division de bien im-
meuble ou réel sur laquelle il y a, ou il est prévu qu’il y
ait, un droit de propriété distinct des droits de pro-
priété des autres parties du bâtiment, y compris la
2021-2022 18 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(f) a cooperative housing corporation, a hospital
authority, a municipality, a public college, a school
authority, or a university as those terms are defined
in subsection 123(1) of the Excise Tax Act or a para-
municipal organization as defined in section 1 of Part
VI of Schedule V to that Act;
(g) an Indigenous governing body as defined in sec-
tion 2 of the Department of Indigenous Services Act
or a corporation wholly owned by such a body; or
(h) a prescribed person. (propriétaire exclu)
fair rent, in respect of a residential property for a calen-
dar year, means
(a) the amount determined in prescribed manner in
respect of the residential property for the calendar
year; and
(b) in the absence of a manner prescribed under para-
graph (a) in respect of the residential property for the
calendar year, the amount that is 5% of the taxable
value in respect of the residential property for the cal-
endar year. (loyer raisonnable)
hazardous condition, in respect of a residential proper-
ty, means any of the following circumstances (other than
prescribed circumstances):
(a) a structural component of the residential property,
including a roof, foundation, external walls, interior
supporting walls, floors and staircases, is defective or
damaged;
(b) oil, gas or another poisonous or dangerous sub-
stance is present in the residential property;
(c) any other condition relating to the residential
property that is hazardous to the health or safety of its
occupants; or
(d) prescribed circumstances. (condition dange-
reuse)
judge, in respect of any matter, means a judge of a supe-
rior court having jurisdiction in the province in which the
matter arises or a judge of the Federal Court. (juge)
long-term lease, in respect of land, means a lease, li-
cence or similar arrangement under which continuous
possession of the land is provided for a period of at least
20 years or a lease, licence or similar arrangement that
contains an option to purchase the land. en (bail de
longue durée)
proportion des parties communes et des dépendances
du bâtiment, et du fonds sous-jacent ou contigu à ce-
lui-ci, qui est attribuable à la maison, le logement ou le
local, qui est raisonnablement nécessaire à son usage
résidentiel;
c) un immeuble visé par règlement. (residential
property)
impôt foncier Un impôt prélevé par une province, un
organisme provincial ou une municipalité afin de finan-
cer des services habituellement fournis par des munici-
palités au Canada et calculé en appliquant un ou plu-
sieurs taux à tout ou partie de la valeur foncière d’un bien
immeuble ou réel. (property tax)
juge Juge d’une cour supérieure de la province où l’af-
faire prend naissance ou juge de la Cour fédérale. (judge)
local d’habitation S’entend d’une habitation avec cui-
sine, salle de bains et espace habitable privés. (dwelling
unit)
loyer raisonnable Relativement à un immeuble résiden-
tiel pour une année civile correspond à :
a) la somme déterminée selon les modalités régle-
mentaires relativement à l’immeuble résidentiel pour
l’année civile;
b) à défaut de modalités réglementaires applicables
relativement à l’immeuble résidentiel pour l’année ci-
vile en vertu de l’alinéa a), la somme obtenue en mul-
tipliant par 5 % la valeur imposable relativement à
l’immeuble résidentiel pour l’année civile. (fair rent)
ministre Le ministre du Revenu national. (Minister)
mois Période qui commence un quantième donné et
prend fin :
a) la veille du même quantième du mois suivant;
b) si le mois suivant n’a pas de quantième correspon-
dant au quantième donné, le dernier jour de ce mois.
(month)
numéro d’entreprise Le numéro, sauf le numéro d’as-
surance sociale, utilisé par le ministre pour identifier une
personne pour l’application de la présente loi. (business
number)
personne morale canadienne déterminée À l’égard
d’une année civile, s’entend d’une personne morale
constituée ou prorogée en vertu des lois du Canada ou
d’une province, à l’exclusion d’une personne morale qui,
au 31 décembre de l’année civile, est :
2021-2022 19 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Minister means the Minister of National Revenue. (mi-
nistre)
month means a period beginning on a particular day in
a calendar month and ending on
(a) the day immediately before the day in the next cal-
endar month that has the same calendar number as
the particular day; or
(b) if the next calendar month does not have a day
that has the same calendar number as the particular
day, the last day of that next calendar month. (mois)
officer means, except in the definition specified Cana-
dian corporation in this section and in section 59, a per-
son who is appointed or employed in the administration
or enforcement of this Act. (préposé)
owner of a residential property means a person that is
identified as an owner in respect of the residential prop-
erty under the land registration system or other similar
system applicable where the residential property is locat-
ed, or that could reasonably be considered to be an owner
in respect of the residential property based on such a sys-
tem, and includes a person that
(a) is a life tenant under a life estate in respect of the
residential property,
(b) is a life lease holder in respect of the residential
property,
(c) has, under a long-term lease, continuous posses-
sion of the land on which the residential property is
situated, or
(d) is a prescribed person,
but does not include
(e) a person that gives continuous possession of all
the land on which the residential property is situated
to persons referred to in paragraph (b) or (c), or
(f) a prescribed person. (propriétaire)
ownership percentage, in respect of a particular owner
of a residential property for a calendar year, means
(a) a prescribed percentage; or
(b) if no percentage is prescribed under paragraph (a),
(i) if there are two or more owners of the residen-
tial property on December 31 of the calendar year
a) une personne morale relativement à laquelle les
personnes ci-après détiennent ou contrôlent, directe-
ment ou indirectement, des actions de la personne
morale représentant 10 % ou plus de la valeur des ca-
pitaux propres de la personne morale ou conférant
10 % ou plus des droits de vote dans certaines circons-
tances ou dans toutes les circonstances :
(i) un particulier qui n’est ni citoyen ni résident
permanent,
(ii) une personne morale constituée ou prorogée
autrement qu’en application des lois du Canada ou
d’une province,
(iii) toute combinaison de particuliers ou de per-
sonnes morales visés aux sous-alinéas (i) et (ii);
b) une personne morale sans capital-actions ayant :
(i) un président du conseil d’administration ou un
autre particulier agissant comme tel qui n’est ni ci-
toyen ni résident permanent,
(ii) 10 % ou plus de ses administrateurs qui ne sont
ni des citoyens ni résidents permanents;
c) une personne morale visée par règlement. (speci-
fied Canadian corporation)
pourcentage de propriété Relativement à un proprié-
taire donné d’un immeuble résidentiel pour une année ci-
vile, s’entend :
a) d’un pourcentage prévu par règlement;
b) si aucun pourcentage applicable n’est prévu par rè-
glement en vertu de l’alinéa a) :
(i) s’il y a au moins deux propriétaires de l’im-
meuble résidentiel le 31 décembre de l’année civile :
(A) si le système d’enregistrement des titres fon-
ciers ou tout autre système semblable en vigueur
là où l’immeuble résidentiel est situé indique que
le propriétaire donné détient un pourcentage du
droit de propriété relativement à l’immeuble ré-
sidentiel, ce pourcentage,
(B) sinon, le pourcentage qui est égal à 100 % di-
visé par le nombre de propriétaires de l’im-
meuble résidentiel,
(ii) dans les autres cas, 100 %. (ownership per-
centage)
2021-2022 20 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(A) if the land registration system or other simi-
lar system applicable where the residential prop-
erty is located indicates that the particular owner
holds a percentage of the ownership in respect of
the residential property, that percentage, and
(B) in any other case, the percentage that is
equal to 100% divided by the number of owners
of the residential property, and
(ii) in any other case, 100%. (pourcentage de pro-
priété)
permanent resident has the same meaning as in sub-
section 2(1) of the Immigration and Refugee Protection
Act. (résident permanent)
personal representative, in respect of a deceased indi-
vidual, means the executor of the individual’s will, the
liquidator of the individual’s succession, the administra-
tor of the estate of the individual or any person that is re-
sponsible under the appropriate law for the proper col-
lection, administration, disposition and distribution of
the assets of the estate or succession of the individual.
(représentant personnel)
prescribed means
(a) in the case of a form or the manner of filing a
form, authorized by the Minister;
(b) in the case of the information to be given on or
with a form, specified by the Minister;
(c) in the case of the manner of making or filing an
election, authorized by the Minister; and
(d) in any other case, prescribed by regulation or de-
termined in accordance with rules prescribed by regu-
lation. (Version anglaise seulement)
property tax means a tax levied by a province, provin-
cial agency or municipality to finance services ordinarily
provided by municipalities in Canada and computed by
applying one or more rates to all or part of the assessed
value of real or immovable property. (impôt foncier)
record means any material on which representations, in
any form, of information or concepts are recorded or
marked and that is capable of being read or understood
by a person or a computer system or other device. (re-
gistre)
residential property means property (other than pre-
scribed property) that is situated in Canada and that is
préposé S’entend d’une personne nommée ou employée
pour l’application ou l’exécution de la présente loi. (offi-
cer)
propriétaire À l’égard d’un immeuble résidentiel, s’en-
tend de la personne qui est identifiée comme un proprié-
taire relativement à cet immeuble résidentiel en vertu du
système d’enregistrement des titres fonciers ou de tout
autre système semblable en vigueur là où l’immeuble ré-
sidentiel est situé, ou qui pourrait raisonnablement être
considérée propriétaire relativement à l’immeuble rési-
dentiel en se basant sur un tel système, et comprend la
personne qui :
a) est le détenteur d’un domaine viager relativement à
l’immeuble résidentiel;
b) est le titulaire d’un bail viager relativement à l’im-
meuble résidentiel;
c) a, en vertu d’un bail de longue durée, la possession
continue du fonds sur lequel l’immeuble résidentiel
est situé;
d) est une personne visée par règlement.
N’est pas un propriétaire d’un immeuble résidentiel :
e) une personne qui confère la possession continue de
la totalité du fonds sur lequel l’immeuble résidentiel
est situé à des personnes visées aux alinéas b) ou c);
f) une personne visée par règlement. (owner)
propriétaire exclu Est un propriétaire exclu d’un im-
meuble résidentiel pour une année civile la personne,
sauf une personne visée par règlement, qui, au 31 dé-
cembre de l’année civile, est l’une des personnes sui-
vantes :
a) Sa Majesté du chef du Canada ou d’une province ou
un mandataire de Sa Majesté du chef du Canada ou
d’une province;
b) un particulier qui est citoyen ou résident perma-
nent, sauf dans la mesure où le particulier est un pro-
priétaire de l’immeuble résidentiel en sa qualité d’as-
socié d’une société de personnes ou fiduciaire d’une fi-
ducie (autre qu’un représentant personnel relative-
ment à un particulier décédé);
c) une personne morale constituée sous le régime
d’une loi provinciale ou fédérale dont les actions sont
cotées à une bourse de valeurs au Canada désignée en
vertu de l’article 262 de la Loi de l’impôt sur le revenu;
2021-2022 21 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(a) a detached house or similar building, containing
not more than three dwelling units, together with that
proportion of the appurtenances to the building and
the land subjacent or immediately contiguous to the
building that is reasonably necessary for its use and
enjoyment as a place of residence for individuals;
(b) a part of a building that is a semi-detached house,
rowhouse unit, residential condominium unit or other
similar premises that is, or is intended to be, a sepa-
rate parcel or other division of real or immovable
property owned, or intended to be owned, apart from
any other unit in the building together with that pro-
portion of any common areas and other appurte-
nances to the building and the land subjacent or im-
mediately contiguous to the building that is at-
tributable to the house, unit or premises and that is
reasonably necessary for its use and enjoyment as a
place of residence for individuals; or
(c) a prescribed property. (immeuble résidentiel)
specified Canadian corporation, in respect of a calen-
dar year, means a corporation that is incorporated or
continued under the laws of Canada or a province other
than a corporation that is, on December 31 of the calen-
dar year
(a) a corporation in respect of which the following
persons have ownership or control, directly or indi-
rectly, of shares of the corporation representing 10%
or more of the value of the equity in the corporation or
carrying 10% or more of the voting rights under all or
under some circumstances:
(i) an individual who is neither a citizen nor a per-
manent resident,
(ii) a corporation that is incorporated or continued
otherwise than under the laws of Canada or a
province, or
(iii) any combination of individuals or corporations
referred to in subparagraphs (i) and (ii);
(b) a corporation without share capital having
(i) a chairperson or other presiding officer who is
neither a citizen nor a permanent resident, or
(ii) 10% or more of its directors who are neither cit-
izens nor permanent residents; or
(c) a prescribed corporation. (personne morale ca-
nadienne déterminée)
d) une personne qui est un propriétaire de l’immeuble
résidentiel en sa qualité de fiduciaire d’une des fidu-
cies suivantes :
(i) fiducie de fonds commun de placement au
sens du paragraphe 248(1) de la Loi de l’impôt sur
le revenu,
(ii) fiducie de placement immobilier au sens du
paragraphe 122.1(1) de cette loi,
(iii) fiducie intermédiaire de placement détermi-
née au sens du paragraphe 122.1(1) de cette loi;
e) un organisme de bienfaisance enregistré au sens
du paragraphe 248(1) de la Loi de l’impôt sur le reve-
nu;
f) une administration scolaire, un collège public,
une coopérative d’habitation, une municipalité ou
une université au sens du paragraphe 123(1) de la Loi
sur la taxe d’accise ou une organisation paramunici-
pale au sens de l’article 1 de la partie VI de l’annexe V
de cette loi;
g) un corps dirigeant autochtone au sens de l’arti-
cle 2 de la Loi sur le ministère des Services aux Au-
tochtones ou une personne morale détenue à part en-
tière par un tel corps dirigeant;
h) une personne visée par règlement. (excluded own-
er)
registre Tout support sur lequel des représentations
d’information ou de notions sont enregistrées ou ins-
crites et qui peut être lu ou compris par une personne ou
par un système informatique ou un autre dispositif.
(record)
représentant personnel Quant à un particulier décédé,
le liquidateur de succession, l’exécuteur testamentaire,
l’administrateur de la succession ou toute personne char-
gée, selon la législation applicable, de la perception, de
l’administration, de l’aliénation et de la répartition de
l’actif successoral du particulier. (personal representa-
tive)
résident permanent S’entend au sens du para-
graphe 2(1) de la Loi sur l’immigration et la protection
des réfugiés. (permanent resident)
service de messagerie Service de livraison de courrier
certifié, recommandé ou autre qui tient un registre de
l’envoi ou de la livraison d’un avis ou d’un document.
(confirmed delivery service)
2021-2022 22 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
specified Canadian partnership, in respect of a calen-
dar year, means
(a) a partnership, each member of which is, on De-
cember 31 of the calendar year, an excluded owner or
a specified Canadian corporation; or
(b) a prescribed partnership. (société de personnes
canadienne déterminée)
specified Canadian trust, in respect of a calendar year
and a residential property, means
(a) a trust under which each beneficiary having a ben-
eficial interest in the residential property is, on De-
cember 31 of the calendar year, an excluded owner or
a specified Canadian corporation; or
(b) a prescribed trust. (fiducie canadienne détermi-
née)
tax means tax payable under this Act. (taxe)
taxable value, in respect of a residential property for a
calendar year, means an amount that is
(a) a prescribed amount; or
(b) if no amount is prescribed under paragraph (a),
the greater of
(i) the value established in respect of the residential
property by an authority that has the power by or
under an Act of Parliament or the legislature of a
province to establish the assessed value of real or
immovable property for the purpose of computing a
property tax, and
(ii) the residential property’s most recent sale price
on or before December 31 of the calendar year. (va-
leur imposable)
Meaning of administration or enforcement of this Act
3 For greater certainty, a reference in this Act to the ad-
ministration or enforcement of this Act includes the col-
lection of any amount payable under this Act.
sinistre S’entend d’un tremblement de terre, d’un incen-
die, d’une inondation, d’un glissement de terrain, d’un
déversement ou d’une fuite de mazout, de gaz ou d’une
autre substance toxique ou dangereuse ou tout autre ca-
tastrophe naturelle ou événement dangereux. (disaster)
société de personnes canadienne déterminée Relati-
vement à une année civile, s’entend, selon le cas :
a) d’une société de personnes à l’égard de laquelle
chaque associé est, au 31 décembre de l’année ci-
vile, un propriétaire exclu ou une personne morale ca-
nadienne déterminée;
b) d’une société de personnes visée par règlement.
(specified Canadian partnership)
taxe Taxe payable en application de la présente loi. (tax)
valeur imposable Relativement à un immeuble résiden-
tiel pour une année civile, correspond à selon le cas :
a) un montant visé par règlement;
b) si aucun montant applicable n’est visé par règle-
ment en application de l’alinéa a), la plus élevée des
valeurs suivantes :
(i) la valeur déterminée relativement à l’immeuble
résidentiel par une autorité habilitée en vertu d’une
loi fédérale ou provinciale à déterminer la valeur
foncière d’un bien immeuble ou réel aux fins du cal-
cul d’un impôt foncier,
(ii) le prix de vente le plus récent de l’immeuble ré-
sidentiel obtenu avant la fin de l’année civile. (tax-
able value)
Arm’s length
4 (1) For the purposes of this Act,
(a) related persons are deemed not to deal with each
other at arm’s length; and
Sens de « application et exécution de la présente loi »
3 Il est entendu que, dans la présente loi, la mention
« application et exécution de la présente loi » s’entend en
outre du recouvrement d’une somme payable en applica-
tion de la présente loi.
Lien de dépendance
4 (1) Pour l’application de la présente loi :
a) des personnes liées sont réputées avoir entre elles
un lien de dépendance;
2021-2022 23 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(b) it is a question of fact whether persons not related
to each other are, at any particular time, dealing with
each other at arm’s length.
Related persons
(2) For the purposes of this Act, persons are deemed to
be related to each other if they are related persons within
the meaning of subsections 251(2) to (6) of the Income
Tax Act.
Partnership
(3) For the purposes of this Act, a member of a partner-
ship is deemed to be related to the partnership.
b) la question de savoir si des personnes non liées
entre elles n’ont aucun lien de dépendance à un mo-
ment donné est une question de fait.
Personnes liées
(2) Pour l’application de la présente loi, des personnes
sont réputées liées entre elles si elles sont des personnes
liées au sens des paragraphes 251(2) à (6) de la Loi de
l’impôt sur le revenu.
Société de personnes
(3) Pour l’application de la présente loi, l’associé d’une
société de personnes est réputé lié à celle-ci.
PART 2
Her Majesty
Binding on Her Majesty
5 This Act is binding on Her Majesty in right of Canada
or a province.
PARTIE 2
Sa Majesté
Obligation de Sa Majesté
5 La présente loi lie Sa Majesté du chef du Canada ou
d’une province.
PART 3
Application of Tax
Meaning of qualifying occupancy period
6 (1) In this section, qualifying occupancy period, in
respect of a residential property in relation to an owner
of the residential property, means a period of at least one
month in a calendar year during which one of the follow-
ing individuals (other than an individual that is an ex-
cluded individual pursuant to paragraph (10)(b) or a pre-
scribed individual) has continuous occupancy of a
dwelling unit that is part of the residential property:
(a) an individual who deals at arm’s length with the
owner and with any spouse or common-law partner of
the owner and who is given continuous occupancy of
the dwelling unit under an agreement evidenced in
writing;
(b) an individual who does not deal at arm’s length
with the owner or with any spouse or common-law
partner of the owner and who is given continuous oc-
cupancy of the dwelling unit under an agreement evi-
denced in writing and for consideration that is not be-
low the fair rent for the residential property, prorated
for the period;
(c) an individual who is the owner or the owner’s
spouse or common-law partner, who is in Canada for
PARTIE 3
Application de la taxe
Sens de période d’occupation admissible
6 (1) Au présent article, période d’occupation admis-
sible relativement à un immeuble résidentiel à l’égard
d’un propriétaire de celui-ci s’entend d’une période d’au
moins un mois dans une année civile durant laquelle l’un
des particuliers ci-après (autre qu’un particulier qui est
un particulier exclu au sens du paragraphe (10)b) ou qui
est un particulier visé par règlement) a l’occupation de
manière continue d’un local d’habitation qui fait partie
de l’immeuble résidentiel :
a) un particulier qui n’a aucun lien de dépendance
avec le propriétaire et avec l’époux ou le conjoint de
fait du propriétaire et qui aux termes d’un contrat
constaté par écrit se voit conférer l’occupation conti-
nue du local d’habitation;
b) un particulier qui a un lien de dépendance avec le
propriétaire ou avec l’époux ou le conjoint de fait du
propriétaire et qui aux termes d’un contrat constaté
par écrit se voit conférer l’occupation continue du lo-
cal d’habitation pour une contrepartie supérieure ou
équivalente au loyer raisonnable pour l’immeuble rési-
dentiel, calculée au prorata pour la période;
2021-2022 24 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
the purpose of pursuing authorized work under a
Canadian work permit and who occupies the dwelling
unit in relation to that purpose;
(d) an individual who is a spouse, common-law part-
ner, parent or child of the owner and who is a citizen
or permanent resident; or
(e) a prescribed individual.
Exclusion — qualifying occupancy period
(2) Despite subsection (1), a qualifying occupancy period
does not include a period that is a calendar month during
which the only individuals who have continuous occu-
pancy of a dwelling unit are the owner or a spouse, com-
mon-law partner, parent or child of the owner, if each of
those individuals resides or lodges at a place other than
the residential property for an equal or greater number of
days than the number of days that they reside or lodge at
the residential property.
Tax payable
(3) Subject to this Act, every person that is, on December
31 of a calendar year, an owner (other than an excluded
owner) of a residential property must pay to Her Majesty
in right of Canada tax in respect of the residential prop-
erty for the calendar year in the amount determined by
the formula
A × B × C
c) un particulier qui est le propriétaire ou l’époux ou
le conjoint de fait du propriétaire, qui est au Canada
pour un travail autorisé en vertu d’un permis de tra-
vail canadien et qui occupe le local d’habitation à cette
fin;
d) un particulier qui est l’époux, le conjoint de fait, le
parent ou l’enfant du propriétaire et qui est un citoyen
ou un résident permanent;
e) un particulier visé par règlement.
Exclusion — période d’occupation admissible
(2) Malgré le paragraphe (1), une période d’occupation
admissible n’inclut pas une période qui est un mois civil
durant lequel les seuls particuliers qui ont l’occupation
de manière continue d’un local d’habitation sont le pro-
priétaire, ou l’époux, le conjoint de fait, le parent ou l’en-
fant du propriétaire, si chacun de ces particuliers réside
ou se loge à un endroit autre que l’immeuble résidentiel
pour un nombre de jours égal ou supérieur au nombre de
jours durant lesquels il réside ou se loge à l’immeuble ré-
sidentiel.
Taxe payable
(3) Sous réserve de la présente loi, tout propriétaire (sauf
un propriétaire exclu) d’un immeuble résidentiel au
31 décembre d’une année civile est tenu de payer à Sa
Majesté du chef du Canada une taxe relativement à cet
immeuble résidentiel pour l’année civile correspondant
au montant déterminé par la formule suivante :
A × B × C
where
A is 1%;
B is
où :
A représente 1 %;
B :
(a) if the person has filed an election made under
subsection (4) in respect of the residential proper-
ty for the calendar year, the fair market value of
the residential property, or
(b) in any other case, the taxable value in respect
of the residential property; and
C is the ownership percentage in respect of the person
in respect of the residential property for the calendar
year.
Election for fair market value
(4) For the purpose of determining the tax under subsec-
tion (3) in respect of a residential property for a calendar
year, a person may elect to use the fair market value of
the residential property, as determined in a manner sat-
isfactory to the Minister, at any time on or after
a) si le propriétaire a produit un choix qu’il a fait
en application du paragraphe (4) pour l’année ci-
vile relativement à l’immeuble résidentiel, la juste
valeur marchande de l’immeuble résidentiel,
b) sinon, la valeur imposable relativement à l’im-
meuble résidentiel;
C le pourcentage de propriété de la personne relative-
ment à l’immeuble résidentiel pour l’année civile.
Choix d’utiliser la juste valeur marchande
(4) Aux fins du calcul de la taxe prévue au paragraphe (3)
pour une année civile à l’égard d’un immeuble résiden-
tiel, une personne peut faire le choix d’utiliser la juste va-
leur marchande de l’immeuble résidentiel, déterminée
d’une manière que le ministre estime acceptable, à tout
2021-2022 25 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
January 1 of the calendar year and on or before April 30
of the following calendar year.
Form and manner of filing
(5) An election under subsection (4) in respect of a resi-
dential property for a calendar year is to be made in pre-
scribed form containing prescribed information and is to
be filed with the Minister in prescribed manner on or be-
fore
(a) April 30 of the following calendar year; or
(b) any later day that the Minister may allow.
When tax required to be paid
(6) The tax payable by a person under subsection (3) in
respect of a residential property for a calendar year must
be paid by the person to the Receiver General on or be-
fore April 30 of the following calendar year.
Tax not payable
(7) No tax is payable under subsection (3) by a person in
respect of a residential property (other than a prescribed
residential property) for a calendar year if
(a) the person is an owner of the residential property
solely in their capacity as
(i) a partner of a partnership that is a specified
Canadian partnership in respect of the calendar
year, or
(ii) a trustee of a trust that is a specified Canadian
trust in respect of the calendar year and the resi-
dential property;
(b) the person is in respect of the calendar year a
specified Canadian corporation;
(c) the residential property is not suitable for year-
round use as a place of residence;
(d) the residential property is seasonally inaccessible
because public access is not maintained year-round;
(e) the residential property is uninhabitable for a peri-
od of at least 60 consecutive days in the calendar year
as a result of a disaster or hazardous condition caused
by circumstances beyond the reasonable control of an
owner of the residential property and this paragraph
did not apply in respect of the same disaster or haz-
ardous condition for more than one prior calendar
year;
moment à compter du 1er janvier de l’année civile et au
plus tard le 30 avril de l’année civile suivante.
Forme et modalités du choix
(5) Le choix fait par une personne en application du pa-
ragraphe (4) relativement à un immeuble résidentiel
pour une année civile doit être fait en la forme et selon
les modalités que le ministre détermine, contenir les ren-
seignements déterminés par lui et lui être présenté au
plus tard :
a) le 30 avril de l’année civile suivante;
b) tout jour postérieur fixé par le ministre.
Moment auquel la taxe doit être payée
(6) La taxe payable par une personne pour une année ci-
vile en application du paragraphe (3) relativement à un
immeuble résidentiel doit être payée au receveur général
au plus tard le 30 avril de l’année civile suivante.
Taxe non payable
(7) Nulle taxe visée au paragraphe (3) n’est payable par
une personne relativement à un immeuble résidentiel
(sauf un immeuble résidentiel visé par règlement) pour
une année civile si :
a) la personne est un propriétaire de l’immeuble rési-
dentiel uniquement en sa qualité :
(i) d’associé d’une société de personnes qui est une
société de personnes canadienne déterminée relati-
vement à l’année civile,
(ii) de fiduciaire d’une fiducie qui est une fiducie
canadienne déterminée à l’égard de l’année civile et
de l’immeuble résidentiel;
b) la personne est une personne morale canadienne
déterminée relativement à l’année civile;
c) l’immeuble résidentiel ne convient pas à une occu-
pation à l’année à titre résidentiel;
d) l’immeuble résidentiel est inaccessible durant cer-
taines saisons parce que les accès publics ne sont pas
entretenus ou opérés toute l’année;
e) l’immeuble résidentiel est inhabitable pour une pé-
riode d’au moins soixante jours consécutifs dans l’an-
née civile en raison d’un sinistre ou d’une condition
dangereuse attribuable à des circonstances qui
échappent raisonnablement au contrôle d’un proprié-
taire de l’immeuble résidentiel et le présent alinéa ne
s’est pas appliqué relativement à ce même sinistre ou
2021-2022 26 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(f) a dwelling unit that is part of the residential prop-
erty is uninhabitable for a period of at least 120 con-
secutive days in the calendar year as a result of a reno-
vation to the residential property, any work in relation
to the renovation is carried on without unreasonable
delay and this paragraph did not apply in respect of
the residential property for any of the nine prior calen-
dar years;
(g) the person becomes an owner of the residential
property in the calendar year and was never an owner
of the residential property in the prior nine calendar
years;
(h) the person died during the calendar year or the
prior calendar year;
(i) the person is the personal representative in respect
of a deceased individual who was an owner of the resi-
dential property during the calendar year or the prior
calendar year and the person was not otherwise an
owner of the residential property in either of those cal-
endar years;
(j) the following conditions are met:
(i) an individual who was an owner of the residen-
tial property died during the calendar year or the
prior calendar year and the individual’s ownership
percentage in respect of the residential property at
the time of death was at least 25%, and
(ii) the person was an owner of the residential
property on the day the individual died;
(k) the construction of the residential property is not
substantially completed before April of the calendar
year;
(l) the construction of the residential property is sub-
stantially completed after March of the calendar year,
the residential property is offered for sale to the public
during the calendar year and the residential property
has never been occupied by an individual as a place of
residence or lodging during the calendar year;
(m) the residential property is located in a prescribed
area and prescribed conditions, if any, are met; or
(n) the person is a prescribed person.
cette même condition dangereuse pour plus d’une an-
née civile précédente;
f) un local d’habitation qui fait partie de l’immeuble
résidentiel est inhabitable pour une période d’au
moins cent vingt jours consécutifs dans l’année civile
en raison de rénovations faites à l’immeuble résiden-
tiel, toutes les tâches effectuées à l’égard des rénova-
tions sont effectuées sans délai déraisonnable et le
présent alinéa ne s’est appliqué à l’égard de l’im-
meuble résidentiel dans aucune des neuf années ci-
viles précédentes;
g) la personne devient un propriétaire de l’immeuble
résidentiel durant l’année civile et n’a jamais été un
propriétaire de l’immeuble résidentiel dans les neuf
années civiles précédentes;
h) la personne est décédée au cours de l’année civile
ou de l’année civile précédente;
i) la personne est le représentant personnel d’un par-
ticulier décédé qui était un propriétaire de l’immeuble
résidentiel durant l’année civile ou l’année civile pré-
cédente et la personne n’était pas autrement un pro-
priétaire de l’immeuble résidentiel au cours de l’une
de ces années;
j) les conditions ci-après sont réunies :
(i) un particulier qui était un propriétaire de l’im-
meuble résidentiel est décédé durant l’année civile
ou l’année civile précédente et le pourcentage de
propriété du particulier relativement à l’immeuble
résidentiel au moment de son décès était d’au
moins 25 %,
(ii) la personne était un propriétaire de l’immeuble
résidentiel le jour où le particulier est décédé;
k) la construction de l’immeuble résidentiel n’est pas
en grande partie achevée avant le mois d’avril de l’an-
née civile;
l) la construction de l’immeuble résidentiel est en
grande partie achevée après le mois de mars de l’an-
née civile, l’immeuble résidentiel est offert en vente au
public durant l’année civile et l’immeuble résidentiel
n’a jamais été occupé par un particulier à titre de rési-
dence ou d’hébergement pendant l’année civile;
m) l’immeuble résidentiel est situé dans une région
visée par règlement et les conditions visées par règle-
ment, le cas échéant, sont remplies;
n) la personne est une personne visée par règlement.
2021-2022 27 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Tax not payable — primary place of residence
(8) Subject to subsection (10), no tax is payable under
subsection (3) by an individual in respect of a residential
property for a calendar year if a dwelling unit that is part
of the residential property is, for the calendar year, the
primary place of residence of
(a) the individual or the individual’s spouse or com-
mon-law partner; or
(b) a child of the individual or the individual’s spouse
or common-law partner and the child occupies the
residential property for the purposes of authorized
study at a designated learning institution as defined
in section 211.1 of the Immigration and Refugee Pro-
tection Regulations.
Tax not payable — qualifying occupancy
(9) Subject to subsection (10), no tax is payable under
subsection (3) by an owner of a residential property for a
calendar year if the number of days during the calendar
year that are included in a qualifying occupancy period in
respect of the residential property in relation to the own-
er is 180 days or more. No single day is to be counted
more than once in the determination of the number of
days during the calendar year that are included in a qual-
ifying occupancy period in respect of the residential
property in relation to an owner.
Taxe non payable — lieu de résidence habituelle
(8) Sous réserve du paragraphe (10), nulle taxe visée au
paragraphe (3) n’est payable par un particulier relative-
ment à un immeuble résidentiel pour une année ci-
vile lorsqu’un local d’habitation qui fait partie de l’im-
meuble résidentiel sert, pour l’année civile, de lieu de ré-
sidence habituelle à l’une des personnes suivantes :
a) le particulier ou son époux ou conjoint de fait;
b) l’enfant du particulier ou de son époux ou conjoint
de fait et l’enfant occupe l’immeuble résidentiel aux
fins d’études autorisées à un établissement d’ensei-
gnement désigné au sens de l’article 211.1 du Règle-
ment sur l’immigration et la protection des réfugiés.
Exception — multiple residential properties
(10) If, on December 31 of a calendar year, an individual
who is neither a citizen nor a permanent resident is an
owner of a particular residential property and either the
individual or the individual’s spouse or common-law
partner who is neither a citizen nor a permanent resident
is an owner of one or more other residential properties
(which particular and other residential properties are re-
ferred to as the “specified residential properties” in this
subsection), the following rules apply:
(a) subsection (8) does not apply to the specified resi-
dential properties for the calendar year, other than the
residential property in respect of which an election
made under subsection (11) or (12) has been filed un-
der subsection (13) in respect of the calendar year; and
(b) for the purposes of subsection (1), the individual
and the individual’s spouse or common-law partner
are excluded individuals in relation to an owner of any
of the specified residential properties for the calendar
year, other than the residential property in respect of
which an election made under subsection (11) or (12)
has been filed under subsection (13) in respect of the
calendar year.
Taxe non payable — occupation admissible
(9) Sous réserve du paragraphe (10), nulle taxe visée au
paragraphe (3) n’est payable par un propriétaire d’un im-
meuble résidentiel pour une année civile si le nombre de
jours durant l’année civile qui sont inclus dans une pé-
riode d’occupation admissible relativement à l’immeuble
résidentiel à l’égard du propriétaire est d’au moins cent
quatre-vingts jours. Le même jour ne peut être compté
plus d’une fois dans la détermination du nombre de jours
de l’année civile qui sont inclus dans une période d’occu-
pation admissible relativement à un immeuble résiden-
tiel à l’égard d’un propriétaire.
Exception — multiples immeubles résidentiels
(10) Si, au 31 décembre d’une année civile, un particulier
qui n’est ni citoyen ni résident permanent est un proprié-
taire d’un immeuble résidentiel donné et que soit ce par-
ticulier, soit son époux ou conjoint de fait qui n’est ni ci-
toyen ni résident permanent, est un propriétaire d’un ou
de plusieurs autres immeubles résidentiels (cet im-
meuble résidentiel donné et ces autres immeubles rési-
dentiels étant appelés les « immeubles résidentiels dési-
gnés » au présent paragraphe), les règles suivantes s’ap-
pliquent :
a) le paragraphe (8) ne s’applique pas aux immeubles
résidentiels désignés pour l’année civile, sauf à l’égard
de l’immeuble résidentiel pour lequel un choix fait en
vertu des paragraphes (11) ou (12) a été produit en ap-
plication du paragraphe (13) relativement à l’année ci-
vile;
b) pour l’application du paragraphe (1), le particulier
et son époux ou conjoint de fait sont des particuliers
exclus relativement à un propriétaire de n’importe le-
quel des immeubles résidentiels désignés pour l’année
civile, sauf à l’égard de l’immeuble résidentiel pour le-
quel un choix fait en vertu des paragraphes (11) ou
2021-2022 28 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Election
(11) If, on December 31 of a calendar year, an individual
who is neither a citizen nor a permanent resident is an
owner of two or more residential properties and it is not
the case that the individual has a spouse or common-law
partner (other than a citizen or permanent resident) who
is an owner of a residential property, the individual may
elect to designate one of those residential properties for
the calendar year for the purposes of subsection (10). Not
more than one election may be made by the individual
for the calendar year.
Joint election
(12) If, on December 31 of a calendar year, an individual
who is neither a citizen nor a permanent resident and is
an owner of one or more residential properties and the
individual’s spouse or common-law partner who is nei-
ther a citizen nor a permanent resident is an owner of
one or more residential properties, the individual and the
individual’s spouse or common-law partner may jointly
elect to designate one of those residential properties for
the calendar year for the purposes of subsection (10). Not
more than one joint election may be made by the individ-
ual and the individual’s spouse or common-law partner
for the calendar year.
Form and manner of filing
(13) An election under subsection (11) or (12) to desig-
nate a residential property for a calendar year is to be
made in prescribed form containing prescribed informa-
tion and is to be filed with the Minister in prescribed
manner on or before
(a) April 30 of the following calendar year; or
(b) any later day that the Minister may allow.
(12) a été produit en application du paragraphe (13)
relativement à l’année civile.
Choix
(11) Si, au 31 décembre d’une année civile, un particulier
qui n’est ni citoyen ni résident permanent est un proprié-
taire de plusieurs immeubles résidentiels et qu’il ne
s’avère pas que le particulier a un époux ou conjoint de
fait (autre qu’un citoyen ou résident permanent) qui est
un propriétaire d’un immeuble résidentiel, le particulier
peut faire un choix pour sélectionner l’un de ces im-
meubles résidentiels pour l’année civile aux fins de l’ap-
plication du paragraphe (10). Le particulier ne peut faire
plus d’un choix pour l’année civile.
Choix conjoint
(12) Si, au 31 décembre d’une année civile, un particulier
qui n’est ni citoyen ni résident permanent est un proprié-
taire d’un ou de plusieurs immeubles résidentiels et que
son époux ou conjoint de fait qui n’est ni citoyen ni ré-
sident permanent est un propriétaire d’un ou de plu-
sieurs immeubles résidentiels, le particulier et son époux
ou conjoint de fait peuvent conjointement faire un choix
pour sélectionner l’un de ces immeubles résidentiels pour
l’année civile aux fins de l’application du para-
graphe (10). Le particulier et son époux ou conjoint de
fait ne peuvent faire plus d’un choix conjoint pour l’an-
née civile.
Forme et modalités du choix
(13) Un choix en vertu des paragraphes (11) ou (12)
pour sélectionner un immeuble résidentiel pour une an-
née civile doit être fait en la forme et selon les modalités
que le ministre détermine, contenir les renseignements
déterminés par lui et lui être présenté au plus tard :
a) le 30 avril de l’année civile suivante;
b) toute date postérieure fixée par le ministre.
PART 4
Returns
Return required
7 (1) A person that is an owner (other than an excluded
owner) of one or more residential properties on Decem-
ber 31 of a calendar year is required to file a return for
each residential property for the calendar year.
PARTIE 4
Déclarations
Production de déclarations
7 (1) Toute personne qui est un propriétaire (sauf un
propriétaire exclu) d’un ou de plusieurs immeubles rési-
dentiels le 31 décembre d’une année civile est tenue de
produire une déclaration pour l’année civile pour chacun
de ses immeubles résidentiels.
2021-2022 29 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Return not required — regulations
(2) Despite subsection (1), a person is not required to file
a return for a residential property for a calendar year if
the person is a prescribed person or if the residential
property is a prescribed property.
Return required — regulations
(3) Despite subsection (1), a person is required to file a
return for a residential property for a calendar year if the
person is a prescribed person.
Form and content
8 A person that is required under section 7 to file a re-
turn for a residential property for a calendar year must
(a) make the return in prescribed form containing
prescribed information and file it with the Minister in
prescribed manner on or before April 30 of the follow-
ing calendar year; and
(b) indicate in the return the amount of tax, if any, de-
termined by the formula in subsection 6(3) in respect
of the residential property for the calendar year.
Definition of electronic filing
9 (1) For the purposes of this section, electronic filing
means using electronic media in a manner specified in
writing by the Minister.
Electronic filing of return
(2) The Minister may require that a return under this Act
be filed by way of electronic filing.
Acceptance
(3) A return under this Act filed by way of electronic fil-
ing is deemed to be filed with the Minister on the day on
which the Minister acknowledges acceptance of it.
Demand for return
10 The Minister may, on demand sent by the Minister,
require a person to file, within any reasonable time stipu-
lated in the demand, a return under this Act for any cal-
endar year designated in the demand.
Production non requise — situations visées par
règlement
(2) Malgré le paragraphe (1), la production d’une décla-
ration pour un immeuble résidentiel pour l’année civile
n’est pas requise d’une personne si la personne est une
personne visée par règlement ou si l’immeuble résiden-
tiel est un immeuble résidentiel visé par règlement.
Production requise — situations visées par règlement
(3) Malgré le paragraphe (1), la production d’une décla-
ration pour un immeuble résidentiel pour l’année civile
est requise d’une personne si elle est une personne visée
par règlement.
Forme et contenu
8 Toute personne qui doit, en vertu de l’article 7, pro-
duire une déclaration auprès du ministre pour un im-
meuble résidentiel pour une année civile doit :
a) produire la déclaration en la forme et selon les mo-
dalités que le ministre détermine, contenant les ren-
seignements déterminés par lui, et la présenter au mi-
nistre au plus tard le 30 avril de l’année civile suivante;
b) indiquer dans la déclaration le montant de taxe, le
cas échéant, déterminé en application de la formule
prévue au paragraphe 6(3) à l’égard de l’immeuble ré-
sidentiel pour l’année civile.
Transmission électronique
9 (1) Pour l’application du présent article, la transmis-
sion de documents par voie électronique se fait selon les
modalités que le ministre précise par écrit.
Production par voie électronique
(2) Le ministre peut exiger qu’une déclaration lui soit
présentée par voie électronique.
Présentation réputée
(3) La déclaration qu’une personne présente par voie
électronique est réputée présentée au ministre le jour où
il en accuse réception.
Mise en demeure de produire une déclaration
10 Toute personne doit, sur mise en demeure du mi-
nistre, produire, dans le délai raisonnable fixé par la mise
en demeure, une déclaration en application de la pré-
sente loi visant l’année civile précisée dans la mise en de-
meure.
2021-2022 30 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
PART 5
Trustees, Receivers and
Representatives
Definitions
11 (1) The following definitions apply in this section.
bankrupt has the same meaning as in section 2 of the
Bankruptcy and Insolvency Act. (failli)
business includes a part of a business. (entreprise)
receiver means a person that
(a) under the authority of a debenture, bond or other
debt security, of a court order or of an Act of Parlia-
ment or of the legislature of a province, is empowered
to operate or manage a business or a property of an-
other person;
(b) is appointed by a trustee under a trust deed in re-
spect of a debt security to exercise the authority of the
trustee to manage or operate a business or a property
of the debtor under the debt security;
(c) is appointed by a bank to act as an agent or man-
datary of the bank in the exercise of the authority of
the bank under subsection 426(3) of the Bank Act in
respect of property of another person;
(d) is appointed as a liquidator to liquidate the assets
of a corporation or to wind up the affairs of a corpora-
tion; or
(e) is appointed as a committee, guardian, curator, tu-
tor or mandatary in case of incapacity with the author-
ity to manage and care for the affairs and assets of an
individual who is incapable of managing those affairs
and assets.
It includes a person that is appointed to exercise the au-
thority of a creditor under a debenture, bond or other
debt security to operate or manage a business or a prop-
erty of another person, but, if a person is appointed to ex-
ercise the authority of a creditor under a debenture, bond
or other debt security to operate or manage a business or
a property of another person, it does not include that
creditor. (séquestre)
relevant assets of a receiver means
(a) if the receiver’s authority relates to all the proper-
ties, businesses, affairs and assets of a person, all
those properties, businesses, affairs and assets; and
PARTIE 5
Syndics, séquestres et
représentants
Définitions
sent article.
11 (1) Les définitions qui suivent s’appliquent au pré-
actif pertinent :
a) Si le pouvoir d’un séquestre porte sur l’ensemble
des biens, des entreprises, des affaires et des éléments
d’actif d’une personne, cet ensemble;
b) si ce pouvoir ne porte que sur une partie des biens,
des entreprises, des affaires et des éléments d’actif
d’une personne, cette partie. (relevant assets)
entreprise Est assimilée à une entreprise toute partie de
celle-ci. (business)
failli S’entend au sens de l’article 2 de la Loi sur la
faillite et l’insolvabilité. (bankrupt)
représentant Personne, autre qu’un syndic de faillite ou
un séquestre, qui gère, liquide ou contrôle les biens, les
affaires ou la succession d’une autre personne, ou s’en
occupe de toute autre façon. (representative)
séquestre Personne qui, selon le cas :
a) par application d’une obligation ou d’un autre titre
de créance, de l’ordonnance d’un tribunal ou d’une loi
fédérale ou provinciale, a le pouvoir de gérer ou d’ex-
ploiter les entreprises ou les biens d’une autre per-
sonne;
b) est nommée par un fiduciaire aux termes d’un acte
de fiducie relativement à un titre de créance, pour
exercer le pouvoir du fiduciaire de gérer ou d’exploiter
les entreprises ou les biens du débiteur du titre;
c) est nommée par une banque à titre de mandataire
de la banque lors de l’exercice du pouvoir de celle-ci
visé au paragraphe 426(3) de la Loi sur les banques re-
lativement aux biens d’une autre personne;
d) est nommée à titre de liquidateur pour liquider les
biens ou les affaires d’une personne morale;
e) est nommée à titre de mandataire en cas d’inapti-
tude, de curateur ou de tuteur ayant le pouvoir de gé-
rer les affaires et les biens d’un particulier qui est dans
l’impossibilité de les gérer.
2021-2022 31 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(b) if the receiver’s authority relates to only part of the
properties, businesses, affairs or assets of a person,
that part of the properties, businesses, affairs or as-
sets. (actif pertinent)
representative means a person, other than a trustee in
bankruptcy or a receiver, that is administering, winding
up, controlling or otherwise dealing with any property,
business, estate or succession of another person. (repré-
sentant)
Trustee in bankruptcy — obligations
(2) For the purposes of this Act, if on a particular day a
person becomes a bankrupt,
(a) the trustee in bankruptcy, and not the person, is li-
able for the payment of any amount (other than an
amount that relates solely to activities in which the
person begins to engage on or after the particular day
and to which the bankruptcy does not relate) that is
required to be paid by the person under this Act, dur-
ing the period beginning on the day immediately after
the day on which the trustee became the trustee in
bankruptcy of the person and ending on the day on
which the discharge of the trustee is granted under the
Bankruptcy and Insolvency Act, except that
(i) the trustee is liable for the payment of any
amount that is required to be paid by the person
under this Act after the particular day in respect of
calendar years that ended on or before the particu-
lar day but only to the extent of the property of the
person in possession of the trustee available to sat-
isfy the liability,
(ii) the trustee is not liable for the payment of any
amount for which a receiver is liable under subsec-
tion (3), and
(iii) the payment by the person of an amount in re-
spect of the liability discharges the liability of the
trustee to the extent of that amount;
(b) subject to paragraph (d), the trustee in bankruptcy
must file with the Minister in the prescribed form and
manner all returns in respect of the activities of the
person to which the bankruptcy relates for the calen-
dar years of the person ending in the period beginning
on the day immediately after the particular day and
ending on the day on which the discharge of the
trustee is granted under the Bankruptcy and Insol-
vency Act and that are required under this Act to be
filed by the person, as if those activities were the only
activities of the person;
Est assimilée au séquestre la personne nommée pour
exercer le pouvoir d’un créancier, aux termes d’une obli-
gation ou d’un autre titre de créance, de gérer ou d’ex-
ploiter les entreprises ou les biens d’une autre personne,
à l’exclusion du créancier. (receiver)
Obligations du syndic
(2) Les règles ci-après s’appliquent dans le cadre de la
présente loi en cas de faillite d’une personne :
a) le syndic de faillite, et non le failli, est tenu au paie-
ment des sommes, sauf celles qui se rapportent uni-
quement à des activités non visées par la faillite que le
failli commence à exercer le jour de la faillite ou posté-
rieurement, que doit payer le failli en application de la
présente loi pendant la période commençant le lende-
main du jour où le syndic est devenu le syndic du failli
et se terminant le jour de la libération du syndic en
vertu de la Loi sur la faillite et l’insolvabilité; toute-
fois :
(i) la responsabilité du syndic à l’égard du paiement
des sommes que le failli doit payer en application
de la présente loi après le jour de la faillite relative-
ment à des années civiles ayant pris fin ce jour-là
ou antérieurement se limite aux biens du failli en la
possession du syndic et disponibles pour éteindre
l’obligation,
(ii) le syndic n’est pas responsable du paiement des
sommes pour lesquelles un séquestre est respon-
sable en vertu du paragraphe (3),
(iii) le paiement d’une somme par le failli au titre
de l’obligation éteint d’autant l’obligation du syn-
dic;
b) sous réserve de l’alinéa d), le syndic est tenu de
présenter au ministre, en la forme et selon les modali-
tés déterminées par celui-ci, les déclarations — que le
failli est tenu de produire en application de la présente
loi — concernant les activités du failli visées par la
faillite exercées au cours des années civiles du failli qui
ont pris fin pendant la période commençant le lende-
main du jour de la faillite et se terminant le jour de la
libération du syndic en vertu de la Loi sur la faillite et
l’insolvabilité, comme si ces activités étaient les seules
que le failli exerçait;
c) sous réserve de l’alinéa d), si le failli ne produit pas,
au plus tard le jour de la faillite, la déclaration qu’il est
2021-2022 32 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(c) subject to paragraph (d), if the person has not on
or before the particular day filed a return required un-
der this Act to be filed by the person for a calendar
year of the person ending on or before the particular
day, the trustee in bankruptcy must, unless the Minis-
ter waives in writing the requirement for the trustee to
file the return, file with the Minister in the prescribed
form and manner a return for that calendar year of the
person; and
(d) if there is a receiver with authority in respect of
any business, property, affairs or assets of the person,
the trustee in bankruptcy is not required to include in
any return any information that the receiver is re-
quired under subsection (3) to include in a return.
Receiver’s obligations
(3) For the purposes of this Act, if on a particular day a
receiver is vested with authority to manage, operate, liq-
uidate or wind up any business or property, or to manage
and care for the affairs and assets, of a person,
(a) if the relevant assets of the receiver are a part and
not all of the person’s businesses, properties, affairs or
assets, the relevant assets of the receiver are deemed
to be, throughout the period during which the receiver
is acting as receiver of the person, separate from the
remainder of the businesses, properties, affairs or as-
sets of the person as though the relevant assets were
businesses, properties, affairs or assets, as the case
may be, of a separate person;
(b) the person and the receiver are jointly and several-
ly, or solidarily, liable for the payment of any amount
that is required to be paid by the person under this Act
before or during the period during which the receiver
is acting as receiver of the person to the extent that the
amount can reasonably be considered to relate to the
relevant assets of the receiver or to the businesses,
properties, affairs or assets of the person that would
have been the relevant assets of the receiver if the re-
ceiver had been acting as receiver of the person at the
time the amount became payable except that
(i) the receiver is liable for the payment of any
amount that is required to be paid by the person
under this Act before that period only to the extent
of the property of the person in possession or under
the control and management of the receiver after
(A) satisfying the claims of creditors whose
claims ranked, on the particular day, in priority
to the claim of the Crown in respect of the
amount, and
tenu de produire en application de la présente loi pour
une année civile se terminant ce jour-là ou antérieure-
ment, le syndic est tenu de présenter au ministre, en la
forme et selon les modalités déterminées par celui-ci,
une déclaration pour cette année civile, sauf si le mi-
nistre renonce par écrit à exiger cette déclaration du
syndic;
d) lorsqu’un séquestre est investi de pouvoirs relative-
ment à une entreprise, à un bien, aux affaires ou à des
éléments d’actif du failli, le syndic n’est pas tenu d’in-
clure dans une déclaration les renseignements que le
séquestre est tenu d’y inclure en vertu du para-
graphe (3).
Obligations du séquestre
(3) Dans le cas où un séquestre est investi, à une date
donnée, du pouvoir de gérer, d’exploiter ou de liquider
l’entreprise ou les biens d’une personne, ou de gérer ses
affaires et ses éléments d’actif, les règles ci-après s’ap-
pliquent dans le cadre de la présente loi :
a) s’il ne représente qu’une partie des entreprises, des
biens, des affaires ou des éléments d’actif de la per-
sonne, l’actif pertinent est réputé être distinct du reste
des entreprises, des biens, des affaires ou des éléments
d’actif de la personne, pendant la période où le sé-
questre agit à ce titre pour la personne, comme si l’ac-
tif pertinent représentait les entreprises, les biens, les
affaires et les éléments d’actif d’une autre personne;
b) la personne et le séquestre sont solidairement te-
nus au paiement des sommes que doit payer la per-
sonne en application de la présente loi avant ou pen-
dant la période où le séquestre agit à ce titre pour la
personne, dans la mesure où il est raisonnable de
considérer que les sommes se rapportent à l’actif per-
tinent du séquestre ou aux entreprises, aux biens, aux
affaires ou aux éléments d’actif de la personne qui au-
raient constitué l’actif pertinent du séquestre si le sé-
questre avait agi à ce titre pour la personne au mo-
ment où les sommes sont devenues payables; toute-
fois :
(i) le séquestre n’est tenu de payer les sommes que
doit payer la personne en application de la présente
loi avant cette période que jusqu’à concurrence des
biens de la personne qui sont en sa possession ou
qu’il contrôle et gère après avoir, à la fois :
(A) réglé les réclamations de créanciers qui, à la
date donnée, peuvent être réglées par priorité
sur les réclamations de Sa Majesté du chef du
Canada relativement à ces sommes,
2021-2022 33 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(B) paying any amounts that the receiver is re-
quired to pay to a trustee in bankruptcy of the
person,
(ii) the person is not liable for the payment of any
amount payable by the receiver, and
(iii) the payment by the person or the receiver of an
amount in respect of the liability discharges the
joint and several, or solidary, liability to the extent
of that amount;
(c) the receiver must file with the Minister in the pre-
scribed form and manner all returns in respect of the
relevant assets of the receiver for calendar years end-
ing in the period during which the receiver is acting as
receiver and that are required under this Act to be
made by the person, as if the relevant assets were the
only businesses, properties, affairs and assets of the
person; and
(d) if the person has not on or before the particular
day filed a return required under this Act to be filed by
the person for a calendar year of the person ending on
or before the particular day, the receiver must, unless
the Minister waives in writing the requirement for the
receiver to file the return, file with the Minister in the
prescribed form and manner a return for that calendar
year that relates to the businesses, properties, affairs
or assets of the person that would have been the rele-
vant assets of the receiver if the receiver had been act-
ing as receiver of the person during that calendar year.
Certificates for receivers and representatives
(4) Every receiver and representative that controls prop-
erty of another person that is required to pay any amount
under this Act must, before distributing the property to
any person, obtain a certificate from the Minister certify-
ing that the following amounts have been paid or that se-
curity for the payment of them has, in accordance with
this Act, been accepted by the Minister:
(a) all amounts that are payable by the other person
under this Act in respect of the calendar year during
which the distribution is made, or any previous calen-
dar year; and
(b) all amounts that are, or can reasonably be expect-
ed to become, payable under this Act by the represen-
tative or receiver in that capacity in respect of the cal-
endar year during which the distribution is made, or
any previous calendar year.
(B) versé les sommes qu’il est tenu de payer au
syndic de faillite de la personne,
(ii) la personne n’est pas tenue de payer les
sommes payables par le séquestre,
(iii) le paiement d’une somme par le séquestre ou
la personne au titre de l’obligation éteint d’autant
l’obligation;
c) le séquestre est tenu de présenter au ministre, en la
forme et selon les modalités déterminées par celui-ci,
les déclarations — que la personne est tenue de pro-
duire en application de la présente loi — concernant
l’actif pertinent pour les années civiles de la personne
se terminant au cours de la période où le séquestre
agit à ce titre, comme si l’actif pertinent représentait
les seuls biens, entreprises, affaires ou éléments d’actif
de la personne;
d) si la personne ne produit pas, au plus tard à la date
donnée, toute déclaration qu’elle est tenue de produire
en application de la présente loi pour une année civile
se terminant à cette date ou antérieurement, le sé-
questre est tenu de présenter au ministre, en la forme
et selon les modalités déterminées par celui-ci, une
déclaration pour cette année civile concernant les en-
treprises, les biens, les affaires ou les éléments d’actif
de la personne qui auraient constitué l’actif pertinent
si le séquestre avait agi à ce titre au cours de cette an-
née civile, sauf si le ministre renonce par écrit à exiger
cette déclaration du séquestre.
Obligation d’obtenir un certificat
(4) Le séquestre ou le représentant qui contrôle les biens
d’une personne tenue de payer des sommes en applica-
tion de la présente loi est tenu d’obtenir du ministre,
avant de distribuer les biens à quiconque, un certificat
confirmant que les sommes ci-après ont été payées ou
qu’une garantie pour leur paiement a été acceptée par le
ministre conformément à la présente loi :
a) les sommes qui sont payables par la personne en
application de la présente loi pour l’année civile qui
comprend le moment de la distribution ou pour une
année civile antérieure;
b) les sommes qui sont payables par le séquestre ou
par le représentant à ce titre en application de la pré-
sente loi, ou dont il est raisonnable de s’attendre à ce
qu’elles le deviennent, pour l’année civile qui com-
prend le moment de la distribution ou pour une année
civile antérieure.
2021-2022 34 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Liability for failure to obtain certificate
(5) Any receiver or representative that distributes prop-
erty without obtaining a certificate in respect of the
amounts referred to in subsection (4) is personally liable
for the payment of those amounts to the extent of the val-
ue of the property so distributed.
Responsabilité
(5) Le séquestre ou le représentant qui distribue des
biens sans obtenir le certificat visé au paragraphe (4) est
personnellement tenu au paiement des sommes en cause,
jusqu’à concurrence de la valeur des biens ainsi distri-
bués.
PART 6
Anti-avoidance
Definitions
12 (1) The following definitions apply in this section.
tax benefit means a reduction, an avoidance or a defer-
ral of an amount of tax or other amount payable by a per-
son under this Act or an increase in an amount payable
to a person under this Act. (avantage fiscal)
tax consequences to a person means the amount of tax
or other amount payable by, or payable to, the person un-
der this Act or any other amount that is relevant for the
purposes of computing that amount. (attribut fiscal)
transaction includes an arrangement or event. (opéra-
tion)
General anti-avoidance provision
(2) If a transaction is an avoidance transaction, the tax
consequences to a person must be determined as is rea-
sonable in the circumstances in order to deny a tax bene-
fit that, but for this section, would result directly or indi-
rectly from that transaction or from a series of transac-
tions that include that transaction.
Avoidance transaction
(3) An avoidance transaction means any transaction
(a) that, but for this section, would result directly or
indirectly in a tax benefit, unless the transaction may
reasonably be considered to have been undertaken or
arranged primarily for bona fide purposes other than
to obtain the tax benefit; or
(b) that is part of a series of transactions, which se-
ries, but for this section, would result directly or indi-
rectly in a benefit, unless the transaction may reason-
ably be considered to have been undertaken or ar-
ranged primarily for bona fide purposes other than to
obtain the tax benefit.
PARTIE 6
Évitement
Définitions
sent article.
12 (1) Les définitions qui suivent s’appliquent au pré-
attribut fiscal S’agissant des attributs fiscaux d’une per-
sonne, taxe ou autre montant payable par, ou payable à,
cette personne en application de la présente loi, ainsi que
tout autre montant à prendre en compte dans le calcul de
la taxe ou de l’autre montant payable par cette personne.
(tax consequences)
avantage fiscal Réduction, évitement ou report de taxe
ou d’un autre montant payable par une personne en ap-
plication de la présente loi ou augmentation d’un mon-
tant payable à une personne en application de la présente
loi. (tax benefit)
opération Y sont assimilés les conventions, les méca-
nismes et les événements. (transaction)
Disposition générale anti-évitement
(2) En cas d’opération d’évitement, les attributs fiscaux
d’une personne doivent être déterminés de façon raison-
nable dans les circonstances de sorte à supprimer un
avantage fiscal qui, en l’absence du présent article, dé-
coulerait, directement ou indirectement, de cette opéra-
tion ou d’une série d’opérations dont celle-ci fait partie.
Opération d’évitement
(3) L’opération d’évitement s’entend :
a) soit de l’opération dont, en l’absence du présent ar-
ticle, découlerait directement ou indirectement un
avantage fiscal, sauf s’il est raisonnable de considérer
que l’opération est principalement effectuée pour des
objets véritables — l’obtention d’un avantage fiscal
n’étant pas considérée comme un objet véritable;
b) soit de l’opération qui fait partie d’une série d’opé-
rations dont, en l’absence du présent article, découle-
rait directement ou indirectement un avantage fiscal,
sauf s’il est raisonnable de considérer que l’opération
est principalement effectuée pour des objets véritables
2021-2022 35 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Provision not applicable
(4) For greater certainty, subsection (2) does not apply in
respect of a transaction if it may reasonably be consid-
ered that the transaction would not result directly or in-
directly in a misuse of the provisions of this Act or in an
abuse having regard to the provisions of this Act (other
than this section) read as a whole.
Determination of tax consequences
(5) Without restricting the generality of subsection (2),
in determining the tax consequences to a person, as is
reasonable in the circumstances, in order to deny a tax
benefit that would, but for this section, result directly or
indirectly from an avoidance transaction
(a) the nature of any payment or other amount may be
recharacterized; and
(b) the effects that would otherwise result from the
application of other provisions of this Act may be ig-
nored.
— l’obtention d’un avantage fiscal n’étant pas considé-
rée comme un objet véritable.
Champ d’application précisé
(4) Il est entendu que l’opération dont il est raisonnable
de considérer qu’elle n’entraîne pas directement ou indi-
rectement d’abus dans l’application des dispositions de la
présente loi lue dans son ensemble — abstraction faite du
présent article — n’est pas visée par le paragraphe (2).
Exception
(6) Despite any other provision of this Act, the tax conse-
quences to any person following the application of this
section must only be determined through an assessment,
reassessment or additional assessment involving the ap-
plication of this section.
Definitions
13 (1) The following definitions apply in this section.
parameter change means a change in any of the follow-
ing:
(a) a rate;
(b) words or expressions defined in a provision of this
Act. (modification d’un paramètre)
tax benefit has the meaning assigned by subsection
12(1). (avantage fiscal)
transaction has the meaning assigned by subsection
12(1). (opération)
Parameter change — transactions
(2) If
Attributs fiscaux à déterminer
(5) Sans préjudice de la portée générale du para-
graphe (2), en vue de déterminer les attributs fiscaux
d’une personne de façon raisonnable dans les circons-
tances de sorte à supprimer l’avantage fiscal lié à la taxe
qui, en l’absence du présent article, découlerait directe-
ment ou indirectement d’une opération d’évitement :
a) la nature d’un paiement ou d’un autre montant
peut être qualifiée autrement;
b) les effets qui découleraient par ailleurs de l’applica-
tion des autres dispositions de la présente loi peuvent
ne pas être pris en compte.
Exception
(6) Malgré les autres dispositions de la présente loi, les
attributs fiscaux d’une personne, par suite de l’applica-
tion du présent article, ne peuvent être déterminés qu’au
moyen de l’établissement d’une cotisation, d’une nou-
velle cotisation ou d’une cotisation supplémentaire, en
tenant compte du présent article.
Définitions
sent article.
13 (1) Les définitions qui suivent s’appliquent au pré-
avantage fiscal S’entend au sens du paragraphe 12(1).
(tax benefit)
modification d’un paramètre Toute modification tou-
chant, selon le cas :
a) un taux;
b) des termes ou expressions définis dans une dispo-
sition de la présente loi. (parameter change)
opération S’entend au sens du paragraphe 12(1). (trans-
action)
Modification d’un paramètre — opérations
(2) Dans le cas où les conditions suivantes sont réunies :
2021-2022 36 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(a) a transaction, or a series of transactions, involving
property is made between two or more persons, all of
whom are not dealing with each other at arm’s length
at the time any of those transactions are made,
(b) the transaction, any of the transactions in the se-
ries of transactions or the series of transactions would
in the absence of this section result directly or indi-
rectly in a tax benefit to one or more of the persons in-
volved in the transaction or series of transactions, and
(c) it may not reasonably be considered that the trans-
action, or the series of transactions, has been under-
taken or arranged primarily for bona fide purposes
other than to obtain a tax benefit, arising from a pa-
rameter change, for one or more of the persons in-
volved in the transaction or series of transactions,
the amount of tax or other amount payable by, or payable
to, any of those persons under this Act, or any other
amount that is relevant for the purposes of computing
that amount must be determined as is reasonable in the
circumstances in order to deny the tax benefit to any of
those persons.
Denying benefit on transactions
(3) Despite any other provision of this Act, a tax benefit
must only be denied under subsection (2) through an as-
sessment, reassessment or additional assessment.
a) une opération, ou une série d’opérations, portant
sur un bien est effectuée entre plusieurs personnes
ayant entre elles un lien de dépendance au moment où
l’une ou plusieurs de ces opérations sont effectuées;
b) en l’absence du présent article, l’opération, l’une
des opérations de la série ou la série proprement dite
se traduirait, directement ou indirectement, par un
avantage fiscal pour une ou plusieurs des personnes
en cause;
c) il n’est pas raisonnable de considérer que l’opéra-
tion ou la série d’opérations a été effectuée principale-
ment pour des objets véritables — le fait pour une ou
plusieurs des personnes en cause d’obtenir un avan-
tage fiscal par suite d’une modification d’un paramètre
n’étant pas considéré comme un objet véritable,
tout montant de taxe ou tout autre montant qui est
payable par l’une ou plusieurs des personnes en cause, ou
qui leur est payable, en application de la présente loi, ou
tout autre montant qui entre dans le calcul d’un tel mon-
tant, est déterminé de façon raisonnable dans les circons-
tances de sorte à supprimer l’avantage fiscal en cause.
Suppression de l’avantage fiscal
(3) Malgré les autres dispositions de la présente loi, un
avantage fiscal ne peut être supprimé en vertu du para-
graphe (2) qu’au moyen de l’établissement d’une cotisa-
tion, d’une nouvelle cotisation ou d’une cotisation sup-
plémentaire.
PART 7
Administration and
Enforcement
PARTIE 7
Application et exécution
DIVISION 1
Payments
Large payments
14 Every person that is required under this Act to pay an
amount to the Receiver General must, if the amount
is $50,000 or more, make the payment to the account of
the Receiver General at
(a) a bank;
(b) a credit union;
SECTION 1
Paiements
Paiements importants
14 Quiconque est tenu en application de la présente loi
de verser au receveur général une somme s’élevant à
50 000 $ ou plus la verse au compte du receveur général à
l’une des personnes suivantes :
a) une banque;
b) une caisse de crédit;
2021-2022 37 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(c) a corporation authorized under the laws of Canada
or a province to carry on the business of offering its
services as a trustee to the public; or
(d) a corporation that is authorized under the laws of
Canada or a province to accept deposits from the pub-
lic and that carries on the business of lending money
on the security of real property or immovables or in-
vesting in indebtedness on the security of mortgages
on real property or hypothecs on immovables.
Small amounts owing
15 (1) If, at any time, the total of all unpaid amounts
owing by a person to the Receiver General under this Act
does not exceed $2.00, the amount owing by the person is
deemed to be nil.
Small amounts payable
(2) If, at any time, the total of all amounts payable by the
Minister to a person under this Act does not ex-
ceed $2.00, the Minister may apply those amounts
against any amount owing, at that time, by the person to
Her Majesty in right of Canada. However, if the person,
at that time, does not owe any amount to Her Majesty in
right of Canada, those amounts payable are deemed to be
nil.
Execution of returns, etc.
16 A return (other than a return filed by way of electron-
ic filing under section 9), certificate or other document
made under this Act by a person that is not an individual
must be signed on behalf of the person by an individual
duly authorized to do so by the person or the governing
body of the person.
Extension of time
17 (1) The Minister may at any time extend, in writing,
the time for filing a return under this Act.
c) une personne morale qui est autorisée par la légis-
lation fédérale ou provinciale à exploiter une entre-
prise d’offre au public de services de fiduciaire;
d) une personne morale qui est autorisée par la légis-
lation fédérale ou provinciale à accepter du public des
dépôts et qui exploite une entreprise soit de prêts
d’argent garantis sur des biens immeubles ou réels,
soit de placements dans des dettes garanties par des
hypothèques relatives à des biens immeubles ou réels.
Sommes minimes
15 (1) La somme dont une personne est redevable au re-
ceveur général en application de la présente loi est répu-
tée nulle si le total des sommes dont elle est ainsi rede-
vable est égal ou inférieur à 2 $.
Sommes minimes
(2) Si, à un moment donné, le total des sommes à payer
par le ministre à une personne en application de la pré-
sente loi est égal ou inférieur à 2 $, le ministre peut les
déduire de toute somme dont la personne est alors rede-
vable à Sa Majesté du chef du Canada. Toutefois, si la
personne n’est alors redevable d’aucune somme à Sa Ma-
jesté du chef du Canada, les sommes à payer par le mi-
nistre sont réputées nulles.
Validation des documents
16 La déclaration, sauf celle transmise selon l’article 9, le
certificat ou tout autre document fait en application de la
présente loi par une personne autre qu’un particulier doit
être signé en son nom par un particulier qui y est dûment
autorisé par la personne ou son organe directeur.
Effect of extension
(2) If the Minister extends the time within which a per-
son must file a return under subsection (1),
(a) the return must be filed within the time so extend-
ed;
(b) any amount payable that the person is required to
declare in the return must be paid within the time so
extended;
(c) any interest payable under section 23 on the
amount referred to in paragraph (b) must be calculat-
ed as though the amount were required to be paid on
the day on which the extended time expires; and
Prorogation du délai
17 (1) Le ministre peut, en tout temps, par écrit, proro-
ger le délai imparti pour produire une déclaration en ap-
plication de la présente loi.
Effet de la prorogation
(2) Les règles ci-après s’appliquent en cas de prorogation
du délai par le ministre :
a) la déclaration doit être produite dans le délai pro-
rogé;
b) les sommes payables à indiquer dans la déclaration
doivent être acquittées dans le délai prorogé;
c) les intérêts payables en vertu de l’article 23 sur les
sommes visées à l’alinéa b) sont calculés comme si ces
sommes devaient être payées au plus tard à l’expira-
tion du délai prorogé;
2021-2022 38 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(d) any penalty payable under section 47 in respect of
the return must be calculated as though the return
were required to be filed on the day on which the ex-
tended time expires.
Statutory recovery rights
18 Except as specifically provided under this Act or the
Financial Administration Act, no person has a right to
recover any money paid to Her Majesty in right of
Canada as or on account of, or that has been taken into
account by Her Majesty in right of Canada as, an amount
payable under this Act.
d) les pénalités payables en vertu de l’article 47 au
titre de la déclaration sont calculées comme si la dé-
claration devait être produite au plus tard à l’expira-
tion du délai prorogé.
Droits de recouvrement créés par une loi
18 Il est interdit de recouvrer de l’argent qui a été payé à
Sa Majesté du chef du Canada au titre d’une somme
payable en application de la présente loi ou qu’elle a pris
en compte à ce titre, à moins qu’il ne soit expressément
permis de le faire en application de la présente loi ou de
la Loi sur la gestion des finances publiques.
DIVISION 2
Administration and Officers
Minister’s duty
19 The Minister must administer and enforce this Act
and the Commissioner may exercise the powers and per-
form the duties of the Minister under this Act.
Staff
20 (1) The persons that are necessary to administer and
enforce this Act are to be appointed, employed or en-
gaged in the manner authorized by law.
Delegation of powers
(2) The Minister may authorize any person employed or
engaged by the Canada Revenue Agency or who occupies
a position of responsibility in the Canada Revenue Agen-
cy to exercise powers or perform duties of the Minister,
including any judicial or quasi-judicial power or duty of
the Minister, under this Act.
Administration of oaths
21 Any person, if designated by the Minister for the pur-
pose, may administer oaths and take and receive affi-
davits, declarations and affirmations for the purposes of
or incidental to the administration or enforcement of this
Act, and every person so designated has for those pur-
poses all the powers of a commissioner for administering
oaths or taking affidavits.
Inquiry
22 (1) The Minister may, for any purpose related to the
administration or enforcement of this Act, authorize any
person, whether or not the person is an officer of the
Canada Revenue Agency, to make any inquiry that the
Minister may deem necessary with reference to anything
relating to the administration or enforcement of this Act.
SECTION 2
Personnel assurant l’exécution
Fonctions du ministre
19 Le ministre assure l’application et l’exécution de la
présente loi, et le commissaire peut exercer les pouvoirs
et les fonctions conférés au ministre par la présente loi.
Personnel
20 (1) Sont nommées, employées ou engagées de la ma-
nière autorisée par la loi les personnes nécessaires à l’ap-
plication et à l’exécution de la présente loi.
Fonctionnaire désigné
(2) Le ministre peut autoriser toute personne employée
ou engagée par l’Agence du revenu du Canada ou occu-
pant une fonction de responsabilité au sein de celle-ci à
exercer les attributions que lui confère la présente loi,
notamment en matière judiciaire ou quasi judiciaire.
Déclaration sous serment
21 Toute personne peut, si le ministre l’a désignée à
cette fin, faire prêter les serments et recevoir les déclara-
tions sous serment, solennelles ou autres, exigés pour
l’application ou l’exécution de la présente loi, ou qui y
sont accessoires. À cet effet, la personne ainsi désignée
dispose des pouvoirs d’un commissaire aux serments.
Enquête
22 (1) Le ministre peut, pour l’application et l’exécution
de la présente loi, autoriser une personne, qu’il s’agisse
ou non d’un fonctionnaire de l’Agence du revenu du
Canada, à faire toute enquête que celui-ci estime néces-
saire sur quoi que ce soit qui se rapporte à l’application et
à l’exécution de la présente loi.
2021-2022 39 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Appointment of hearing officer
(2) If the Minister, under subsection (1), authorizes a
person to make an inquiry, the Minister must forthwith
apply to the Tax Court of Canada for an order appointing
a hearing officer before whom the inquiry will be held.
Powers of hearing officer
(3) For the purposes of an inquiry authorized under sub-
section (1), a hearing officer appointed under subsection
(2) in relation to the inquiry has all the powers conferred
on a commissioner by sections 4 and 5 of the Inquiries
Act and that may be conferred on a commissioner under
section 11 of that Act.
When powers to be exercised
(4) A hearing officer appointed under subsection (2) in
relation to an inquiry must exercise the powers conferred
on a commissioner by section 4 of the Inquiries Act in re-
lation to any persons that the person authorized to make
the inquiry considers appropriate for the conduct of the
inquiry, but the hearing officer is not to exercise the pow-
er to punish any person unless, on application by the
hearing officer, a judge, including a judge of a county
court, certifies that the power may be exercised in the
matter disclosed in the application and the applicant has
given to the person, in respect of whom the power is pro-
posed to be exercised, 24 hours notice of the hearing of
the application, or any shorter notice that the judge con-
siders reasonable.
Rights of witnesses
(5) Any person who gives evidence in an inquiry autho-
rized under subsection (1) is entitled to be represented by
counsel and, on request made by the person to the Minis-
ter, to receive a transcript of that evidence.
Rights of person investigated
(6) Any person whose affairs are investigated in the
course of an inquiry authorized under subsection (1) is
entitled to be present and to be represented by counsel
throughout the inquiry unless the hearing officer ap-
pointed under subsection (2), on application by the Min-
ister or a person giving evidence, orders otherwise in re-
lation to the whole or any part of the inquiry, on the
ground that the presence of the person and the person’s
counsel, or either of them, would be prejudicial to the ef-
fective conduct of the inquiry.
Nomination d’un président d’enquête
(2) Le ministre qui autorise une personne à faire une en-
quête doit, sans délai, demander à la Cour canadienne de
l’impôt une ordonnance nommant le président d’en-
quête.
Pouvoirs du président d’enquête
(3) Aux fins de l’enquête, le président d’enquête a tous
les pouvoirs conférés à un commissaire par les articles 4
et 5 de la Loi sur les enquêtes et ceux qui sont suscep-
tibles de l’être par l’article 11 de cette loi.
Exercice des pouvoirs du président d’enquête
(4) Le président d’enquête exerce les pouvoirs conférés à
un commissaire par l’article 4 de la Loi sur les enquêtes à
l’égard des personnes que la personne autorisée à faire
enquête considère comme appropriées pour la conduite
de celle-ci. Toutefois, le président d’enquête ne peut
exercer le pouvoir de punir une personne que si, à la re-
quête de celui-ci, un juge atteste que ce pouvoir peut être
exercé dans l’affaire exposée dans la requête et que si le
requérant donne à la personne à l’égard de laquelle il est
proposé d’exercer ce pouvoir avis de l’audition de la re-
quête vingt-quatre heures avant ou dans le délai plus
court que le juge estime raisonnable.
Droits des témoins
(5) Le témoin à l’enquête a le droit d’être représenté par
avocat et, sur demande faite au ministre par le témoin, de
recevoir transcription de sa déposition.
Droits des personnes visées par une enquête
(6) Toute personne dont les affaires donnent lieu à l’en-
quête a le droit d’être présente et d’être représentée par
avocat tout au long de l’enquête. Sur demande du mi-
nistre ou d’un témoin, le président d’enquête peut en dé-
cider autrement pour tout ou partie de l’enquête, pour le
motif que la présence de cette personne ou de son avocat
nuirait à la bonne conduite de l’enquête.
2021-2022 40 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
DIVISION 3
Interest
Specified rate of interest
23 (1) For the purposes of every provision of this Act
that requires interest to be computed at a specified rate
(a) if the interest is to be paid or applied on an
amount payable by the Minister to a person, the speci-
fied rate in effect during a calendar quarter — being a
period of three months beginning on the first day of
January, April, July or October — is
(i) the prescribed rate, or
(ii) if no rate is prescribed under subparagraph (i),
the interest rate determined for the calendar quar-
ter under subsection 2(2) of the Interest Rates (Ex-
cise Act, 2001) Regulations; and
(b) in any other case, the specified rate in effect dur-
ing a calendar quarter is
(i) the prescribed rate, or
(ii) if no rate is prescribed under subparagraph (i),
the interest rate determined for the calendar quar-
ter under subsection 2(1) of the Interest Rates (Ex-
cise Act, 2001) Regulations.
SECTION 3
Intérêts
Taux d’intérêt déterminé
23 (1) Pour l’application des dispositions de la présente
loi selon lesquelles des intérêts doivent être calculés à un
taux déterminé :
a) si les intérêts sont à payer ou à imputer sur un
montant que le ministre verse à une personne, le taux
d’intérêt déterminé en vigueur au cours d’un trimestre
civil — s’entendant de la période de trois mois débu-
tant le premier jour de janvier, d’avril, de juillet ou
d’octobre — correspond :
(i) au taux réglementaire,
(ii) en l’absence d’un taux réglementaire pour l’ap-
plication du sous-alinéa (i), au taux d’intérêt déter-
miné pour le trimestre civil selon le paragraphe 2(2)
du Règlement sur les taux d’intérêt (Loi de 2001 sur
l’accise);
b) dans les autres cas, le taux d’intérêt déterminé en
vigueur au cours d’un trimestre civil correspond :
(i) au taux réglementaire,
(ii) en l’absence d’un taux réglementaire pour l’ap-
plication du sous-alinéa (i), au taux d’intérêt déter-
miné pour le trimestre civil selon le paragraphe 2(1)
du Règlement sur les taux d’intérêt (Loi de 2001 sur
l’accise).
Intérêts composés
(2) La personne qui omet de verser une somme au rece-
veur général selon les modalités et dans le délai prévus
sous le régime de la présente loi est tenue de payer des
intérêts, au taux déterminé, calculés et composés quoti-
diennement sur cette somme pour la période commen-
çant le lendemain de l’expiration du délai de versement
et se terminant le jour du versement.
Compound interest
(2) If a person fails to pay an amount to the Receiver
General as and when required under this Act, the person
must pay to the Receiver General interest on the amount.
The interest must be compounded daily at the specified
rate and computed for the period that begins on the first
day after the day on or before which the amount was re-
quired to be paid and that ends on the day the amount is
paid.
Payment of interest that is compounded
(3) For the purposes of subsection (2), interest that is
compounded on a particular day on an unpaid amount of
a person is deemed to be required to be paid by the per-
son to the Receiver General at the end of the particular
day, and, if the person has not paid the interest so com-
puted by the end of the day after the particular day, the
interest must be added to the unpaid amount at the end
of the particular day.
Paiement des intérêts composés
(3) Pour l’application du paragraphe (2), les intérêts qui
sont composés un jour donné sur la somme impayée
d’une personne sont réputés être à verser par elle au re-
ceveur général à la fin du jour donné. Si la personne ne
paie pas ces intérêts au plus tard à la fin du jour suivant,
ils sont ajoutés à la somme impayée à la fin du jour don-
né.
2021-2022 41 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Payment before specified date
(4) If the Minister has served a demand that a person
pay on or before a specified date all amounts payable by
the person under this Act on the date of the demand, and
the person pays the amount demanded on or before the
specified date, the Minister must waive any interest that
would otherwise apply in respect of the amount demand-
ed for the period beginning on the first day following the
date of the demand and ending on the day of payment.
Compound interest on amounts owed by Her Majesty
24 Interest must be compounded daily at the specified
rate on amounts owed under this Act by Her Majesty in
right of Canada to a person and computed for the period
beginning on the first day after the day on which the
amount is required to be paid by Her Majesty in right of
Canada and ending on the day on which the amount is
paid or is applied against an amount owed by the person
to Her Majesty in right of Canada.
Interest if Act amended
25 For greater certainty, if a provision of an Act amends
this Act and provides that the amendment comes into
force on, or applies as of, a particular day that is before
the day on which the provision is assented to, the provi-
sions of this Act that relate to the calculation and pay-
ment of interest apply in respect of the amendment as
though the provision had been assented to on the partic-
ular day.
Waiving or reducing interest
26 (1) The Minister may, on or before the day that is 10
calendar years after the end of a calendar year of a per-
son, or on application by the person on or before that
day, waive, cancel or reduce any interest payable by the
person under this Act on an amount that is required to be
paid by the person under this Act in respect of the calen-
dar year.
Interest where amounts waived or reduced
(2) If a person has paid an amount of interest and the
Minister has waived or reduced under subsection (1) any
portion of the amount, the Minister must pay interest at
the specified rate on an amount equal to the portion of
the amount that was waived or reduced beginning on the
day that is 30 days after the day on which the Minister re-
ceived a request in a manner satisfactory to the Minister
to apply that subsection and ending on the day on which
the portion is paid to the person.
Renonciation
(4) Si le ministre met une personne en demeure de ver-
ser dans un délai précis la totalité des sommes dont elle
est redevable en application de la présente loi à la date de
la mise en demeure, et que la personne s’exécute, il doit
renoncer aux intérêts qui s’appliqueraient par ailleurs au
montant visé par la mise en demeure pour la période
commençant le lendemain de la date de la mise en de-
meure et se terminant le jour du versement.
Intérêts composés sur les dettes de Sa Majesté
24 Des intérêts, au taux déterminé, sont calculés et com-
posés quotidiennement sur les sommes dont Sa Majesté
du chef du Canada est débitrice en application de la pré-
sente loi envers une personne, pour la période commen-
çant le lendemain du jour où elles devaient être payées et
se terminant le jour où elles sont payées ou déduites
d’une somme dont la personne est redevable à Sa Majesté
du chef du Canada.
Modification de la présente loi
25 Il est entendu que, si la présente loi fait l’objet d’une
modification qui entre en vigueur un jour antérieur à la
date de sanction du texte modificatif, ou s’applique à
compter de ce jour, les dispositions de la présente loi qui
portent sur le calcul et le paiement d’intérêts s’appliquent
à la modification comme si elle avait été sanctionnée ce
jour-là.
Renonciation ou réduction — intérêts
26 (1) Le ministre peut, au plus tard le jour qui suit de
dix années civiles la fin d’une année civile d’une personne
ou sur demande de la personne présentée au plus tard ce
jour-là, annuler ou réduire les intérêts à payer par la per-
sonne en application de la présente loi sur toute somme
dont elle est redevable en application de la présente loi
pour cette année, ou y renoncer.
Intérêts sur somme réduite ou à laquelle il est
renoncé
(2) Si une personne a payé un montant d’intérêts que le
ministre a réduit en tout ou en partie, ou auquel il a re-
noncé en tout ou en partie, en vertu du paragraphe (1), le
ministre paie, sur la partie du montant qui a fait l’objet
de la réduction ou de la renonciation, des intérêts calcu-
lés au taux déterminé pour la période commençant le
trentième jour suivant le jour où il a reçu, d’une manière
qu’il juge acceptable, une demande en vue de l’applica-
tion de ce paragraphe et se terminant le jour où la partie
du montant est payée à la personne.
2021-2022 42 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Cancellation of penalties and interest
27 If at any time a person pays all amounts under sec-
tion 6 payable by the person under this Act for a calendar
year of the person and, immediately before that time, the
total, for the calendar year, of all interest payable by the
person under section 23 and penalties payable under sec-
tion 47 is not more than $25, the Minister may cancel the
total of the penalties and interest.
Dishonoured instruments
28 For the purposes of this Act and section 155.1 of the
Financial Administration Act, any charge that is payable
at any time by a person under the Financial Administra-
tion Act in respect of an instrument tendered in payment
or settlement of an amount that is payable under this Act
is deemed to be an amount that is payable by the person
at that time under this Act. In addition, Part II of the In-
terest and Administrative Charges Regulations does not
apply to the charge and any debt under subsection
155.1(3) of the Financial Administration Act in respect of
the charge is deemed to be extinguished at the time the
total of the amount and any applicable interest under this
Act is paid.
Annulation des intérêts et pénalités
27 Si, à un moment donné, une personne paie la totalité
des montants visés à l’article 6 dont elle est redevable en
application de la présente loi pour une année civile et
que, immédiatement avant ce moment, le total, pour
cette année, des intérêts à payer par la personne en vertu
de l’article 23 et des pénalités à payer en vertu de l’arti-
cle 47 n’excède pas 25 $, le ministre peut annuler le total
des intérêts et des pénalités.
Effets refusés
28 Pour l’application de la présente loi et de l’arti-
cle 155.1 de la Loi sur la gestion des finances publiques,
les frais qui deviennent payables par une personne à un
moment donné en application de la Loi sur la gestion des
finances publiques relativement à un effet offert en paie-
ment ou en règlement d’une somme à payer en applica-
tion de la présente loi sont réputés être une somme qui
devient payable par la personne à ce moment en applica-
tion de la présente loi. En outre, la partie II du Règle-
ment sur les intérêts et les frais administratifs ne s’ap-
plique pas aux frais, et toute créance relative à ces frais,
visée au paragraphe 155.1(3) de la Loi sur la gestion des
finances publiques, est réputée avoir été éteinte au mo-
ment où le total de la somme et des intérêts applicables
en application de la présente loi est versé.
DIVISION 4
Records and Information
Keeping records
29 (1) Every person that pays or is required to pay an
amount of tax and every person that is required under
this Act to file a return must keep all records that are
necessary to enable the determination of the person’s lia-
bilities and obligations under this Act and whether the
person has complied with this Act.
Minister may specify information
(2) The Minister may specify the form a record is to take
and any information that the record must contain.
Language and location of record
(3) Unless otherwise authorized by the Minister, a record
must be kept in Canada in English or in French.
Electronic records
(4) Every person required under this Act to keep a record
that does so electronically must ensure that all equip-
ment and software necessary to make the record intelligi-
ble are available during the retention period required for
the record.
SECTION 4
Registres et renseignements
Obligation de tenir des registres
29 (1) La personne qui paie ou est tenue de payer une
taxe et la personne qui est tenue, en application de la pré-
sente loi, de produire une déclaration doit tenir les re-
gistres permettant d’établir ses obligations et responsabi-
lités aux termes de la présente loi et de déterminer si elle
s’est conformée à la présente loi.
Forme et contenu
(2) Le ministre peut préciser la forme d’un registre ainsi
que les renseignements qu’il doit contenir.
Langue et lieu de conservation
(3) Sauf autorisation contraire du ministre, les registres
sont tenus au Canada, en français ou en anglais.
Registres électroniques
(4) Quiconque tient des registres, comme l’y oblige la
présente loi, par voie électronique doit s’assurer que le
matériel et les logiciels nécessaires à leur intelligibilité
soient accessibles pendant la durée de conservation.
2021-2022 43 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Exemptions
(5) The Minister may, on any terms and conditions that
are acceptable to the Minister, exempt a person or a class
of persons from the requirement in subsection (4).
Inadequate records
(6) If a person fails to keep adequate records for the pur-
poses of this Act, the Minister may, in writing, require
the person to keep any records that the Minister may
specify, and the person must keep the records specified
by the Minister.
General period for retention
(7) Every person that is required to keep records must
retain them until the expiry of six years after the end of
the year to which they relate or for any other period that
may be prescribed.
Objection or appeal
(8) If a person that is required under this Act to keep
records serves a notice of objection or is a party to an ap-
peal or reference under this Act, the person must retain
every record that pertains to the subject-matter of the ob-
jection, appeal or reference until the objection, appeal or
reference is finally disposed of.
Demand by Minister
(9) If the Minister is of the opinion that it is necessary
for the administration or enforcement of this Act, the
Minister may, by a demand served personally or con-
firmed delivery service, require any person required un-
der this Act to keep records to retain those records for
any period that is specified in the demand, and the per-
son must comply with the demand.
Permission for earlier disposal
(10) A person that is required under this Act to keep
records may dispose of them before the expiry of the pe-
riod during which they are required to be kept if written
permission for their disposal is given by the Minister.
Electronic funds transfer
30 For greater certainty, information obtained by the
Minister under Part XV.1 of the Income Tax Act may be
used for the purposes of this Act.
Dispense
(5) Le ministre peut, selon des modalités qu’il estime ac-
ceptables, dispenser une personne ou une catégorie de
personnes de l’exigence visée au paragraphe (4).
Registres insuffisants
(6) Le ministre peut exiger par écrit que la personne qui
ne tient pas les registres nécessaires à l’application de la
présente loi tienne ceux qu’il précise. Dès lors, la per-
sonne est tenue d’obtempérer.
Durée de conservation
(7) La personne obligée de tenir des registres doit les
conserver pendant la période de six ans suivant la fin de
l’année qu’ils visent ou pendant toute autre période fixée
par règlement.
Opposition ou appel
(8) La personne obligée de tenir des registres qui signifie
un avis d’opposition ou est partie à un appel ou à un ren-
voi en application de la présente loi doit conserver les re-
gistres concernant l’objet de ceux-ci jusqu’à ce qu’il en
soit décidé de façon définitive.
Mise en demeure
(9) Le ministre peut exiger, par mise en demeure signi-
fiée à personne ou envoyée par service de messagerie,
que la personne obligée de tenir des registres en applica-
tion de la présente loi conserve ceux-ci pour la période
précisée dans la mise en demeure, s’il est d’avis que cela
est nécessaire pour l’application ou l’exécution de la pré-
sente loi. Dès lors, la personne est tenue d’obtempérer.
Autorisation de se départir des registres
(10) Le ministre peut autoriser par écrit une personne à
se départir des registres qu’elle doit conserver avant la fin
de la période déterminée pour leur conservation.
Requirement to provide information or record
31 (1) Despite any other provision of this Act, the Min-
ister may, subject to subsection (3), for any purpose re-
lated to the administration or enforcement of this Act, by
Télévirement
30 Il est entendu que les renseignements obtenus par le
ministre en application de la partie XV.1 de la Loi de
l’impôt sur le revenu peuvent être utilisés pour l’applica-
tion de la présente loi.
Obligation de produire des renseignements ou
registres
31 (1) Malgré les autres dispositions de la présente loi,
le ministre peut, sous réserve du paragraphe (3) et pour
l’application ou l’exécution de la présente loi, par avis si-
gnifié ou envoyé conformément au paragraphe (2),
2021-2022 44 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
a notice served or sent in accordance with subsection (2),
require any person to provide any information or record.
Notice
(2) A notice referred to in subsection (1) may be
(a) served personally;
(b) sent by confirmed delivery service; or
(c) sent electronically to a bank or credit union that
has provided written consent to receive notices under
subsection (1) electronically.
Unnamed persons
(3) The Minister must not impose on any person (in this
section referred to as a “third party”) a requirement to
provide information or any record relating to one or
more unnamed persons unless the Minister first obtains
the authorization of a judge under subsection (4).
Judicial authorization
(4) A judge of the Federal Court may, on application by
the Minister and subject to any conditions that the judge
considers appropriate, authorize the Minister to impose
on a third party a requirement under subsection (1) relat-
ing to an unnamed person or more than one unnamed
person (in this subsection referred to as the “group”) if
the judge is satisfied by information on oath that
(a) the person or group is ascertainable; and
(b) the requirement is made to verify compliance by
the person or persons in the group with any obligation
under this Act.
Definitions
32 (1) The following definitions apply in this section.
authorized person means a person who is engaged or
employed, or who was formerly engaged or employed, by
or on behalf of Her Majesty in right of Canada to assist in
carrying out the provisions of this Act. (personne autori-
sée)
confidential information means information of any
kind and in any form that relates to one or more persons
and that is
(a) obtained by or on behalf of the Minister for the
purposes of this Act, or
mettre en demeure une personne de produire des rensei-
gnements ou des registres.
Avis
(2) L’avis visé au paragraphe (1) peut être :
a) soit signifié à personne;
b) soit envoyé par service de messagerie;
c) soit envoyé par voie électronique à une banque ou
une caisse de crédit qui a consenti par écrit à recevoir
les avis prévus au paragraphe (1) par voie électro-
nique.
Personnes non désignées nommément
(3) Le ministre ne peut exiger de quiconque — appelé
« tiers » au présent article — la production de renseigne-
ments ou de registres concernant une ou plusieurs per-
sonnes non désignées nommément, sans y être au préa-
lable autorisé par un juge en vertu du paragraphe (4).
Autorisation judiciaire
(4) Sur requête du ministre, un juge de la Cour fédérale
peut, aux conditions qu’il estime indiquées, autoriser le
ministre à exiger d’un tiers la production de renseigne-
ments ou de registres prévue au paragraphe (1) concer-
nant une personne non désignée nommément ou plus
d’une personne non désignée nommément — appelée
« groupe » au présent paragraphe —, s’il est convaincu,
sur dénonciation sous serment, de ce qui suit :
a) cette personne ou ce groupe est identifiable;
b) la production est exigée pour vérifier si cette per-
sonne ou les personnes de ce groupe ont respecté
quelque obligation prévue par la présente loi.
Définitions
32 (1) Les définitions qui suivent s’appliquent au pré-
sent article.
cour d’appel S’entend au sens de l’article 2 du Code cri-
minel. (court of appeal)
entité gouvernementale
a) Ministère ou agence du gouvernement du Canada
ou d’une province;
b) municipalité;
c) gouvernement autochtone au sens du para-
graphe 2(1) de la Loi sur les arrangements fiscaux
entre le gouvernement fédéral et les provinces;
2021-2022 45 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(b) prepared from information referred to in para-
graph (a),
but does not include information that does not directly or
indirectly reveal the identity of the person to whom it re-
lates and, for the purposes of applying subsections (3),
(13) and (14) to a representative of a government entity
that is not an official, includes only the information de-
scribed in subsection (6). (renseignement confidentiel)
court of appeal has the same meaning as in section 2 of
the Criminal Code. (cour d’appel)
government entity means
(a) a department or agency of the government of
Canada or of a province;
(b) a municipality;
(c) an aboriginal government as defined in subsec-
tion 2(1) of the Federal-Provincial Fiscal Arrange-
ments Act;
(d) a corporation all of the shares (except directors’
qualifying shares) of the capital stock of which are
owned by one or more persons each of which is
(i) Her Majesty in right of Canada,
(ii) Her Majesty in right of a province,
(iii) a municipality, or
(iv) a corporation described in this paragraph; or
(e) a board or commission, established by Her
Majesty in right of Canada or a province, that per-
forms an administrative or regulatory function of gov-
ernment, or by a municipality, that performs an ad-
ministrative or regulatory function of a municipality.
(entité gouvernementale)
municipality means an incorporated city, town, village,
metropolitan authority, township, district, county or ru-
ral municipality or other incorporated municipal body
however designated. (municipalité)
official means a person that is employed in the service
of, that occupies a position of responsibility in the service
of, or that is engaged by or on behalf of Her Majesty in
right of Canada or a province, or a person that was for-
merly so employed, that formerly occupied such a posi-
tion or that formerly was so engaged. (fonctionnaire)
representative of a government entity means a person
that is employed in the service of, that occupies a
d) personne morale dont l’ensemble des actions du
capital-actions, à l’exception des actions conférant
l’admissibilité aux postes d’administrateurs, appar-
tiennent à une ou plusieurs des personnes suivantes :
(i) Sa Majesté du chef du Canada,
(ii) Sa Majesté du chef d’une province,
(iii) une municipalité,
(iv) une personne morale visée au présent alinéa;
e) conseil ou commission, établi par Sa Majesté du
chef du Canada ou d’une province ou par une munici-
palité, qui exerce une fonction gouvernementale ou
municipale, selon le cas, d’ordre administratif ou ré-
glementaire. (government entity)
fonctionnaire Personne qui est ou a été employée par Sa
Majesté du chef du Canada ou d’une province, qui occupe
ou a occupé une fonction de responsabilité à son service
ou qui est ou a été engagée par elle ou en son nom. (offi-
cial)
municipalité Administration métropolitaine, ville, vil-
lage, canton, district, comté ou municipalité rurale
constitués en personne morale ou autre organisme muni-
cipal ainsi constitué quelle qu’en soit la désignation.
(municipality)
personne autorisée Personne engagée ou employée, ou
précédemment engagée ou employée, par Sa Majesté du
chef du Canada, ou en son nom, pour aider à l’application
des dispositions de la présente loi. (authorized person)
renseignement confidentiel Renseignement de toute
nature et sous toute forme concernant une ou plusieurs
personnes et qui, selon le cas :
a) est obtenu par le ministre ou en son nom pour l’ap-
plication de la présente loi;
b) est tiré d’un renseignement visé à l’alinéa a).
N’est pas un renseignement confidentiel le renseigne-
ment qui ne révèle pas, même indirectement, l’identité de
la personne en cause. Par ailleurs, pour l’application des
paragraphes (3), (13) et (14) au représentant d’une entité
gouvernementale qui n’est pas un fonctionnaire, le terme
ne vise que les renseignements mentionnés au para-
graphe (6). (confidential information)
représentant Est représentant d’une entité gouverne-
mentale toute personne qui est employée par l’entité, qui
occupe une fonction de responsabilité à son service ou
qui est engagée par elle ou en son nom, y compris, pour
2021-2022 46 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
position of responsibility in the service of, or that is en-
gaged by or on behalf of, a government entity, and in-
cludes, for the purposes of subsections (2), (3), (13) and
(14), a person that was formerly so employed, that for-
merly occupied such a position or that formerly was so
engaged. (représentant)
Provision of confidential information
(2) Except as authorized under this section, an official or
other representative of a government entity must not
knowingly
(a) provide, or allow to be provided, to any person any
confidential information;
(b) allow any person to have access to any confidential
information; or
(c) use any confidential information other than in the
course of the administration or enforcement of this
Act.
l’application des paragraphes (2), (3), (13) et (14), toute
personne qui a déjà été ainsi employée, a déjà occupé une
telle fonction ou a déjà été ainsi engagée. (representa-
tive)
Confidential information evidence not compellable
(3) Despite any other Act of Parliament or other law, no
official or other representative of a government entity is
required, in connection with any legal proceedings, to
give or produce evidence relating to any confidential in-
formation.
Communications — proceedings have been
commenced
(4) Subsections (2) and (3) do not apply in respect of
(a) criminal proceedings, either by indictment or on
summary conviction, that have been commenced by
the laying of an information or the preferring of an in-
dictment, under an Act of Parliament; or
(b) any legal proceedings relating to the administra-
tion or enforcement of this Act, any other Act of Par-
liament or law of a province that provides for the im-
position of a duty or tax, the Canada Pension Plan,
the Employment Insurance Act or Part 1 of the Green-
house Gas Pollution Pricing Act.
Authorized provision of confidential information
(5) The Minister may provide appropriate persons with
any confidential information that may reasonably be re-
garded as necessary solely for a purpose relating to the
life, health or safety of an individual or to the environ-
ment in Canada or any other country.
Communication de renseignements
(2) Sauf autorisation prévue au présent article, il est in-
terdit à un fonctionnaire ou autre représentant d’une en-
tité gouvernementale :
a) de fournir sciemment à quiconque un renseigne-
ment confidentiel ou d’en permettre sciemment la
fourniture;
b) de permettre sciemment à quiconque d’avoir accès
à un renseignement confidentiel;
c) d’utiliser sciemment un renseignement confidentiel
en dehors du cadre de l’application ou de l’exécution
de la présente loi.
Communication de renseignements dans le cadre
d’une procédure judiciaire
(3) Malgré toute autre loi fédérale et toute règle de droit,
nul fonctionnaire ou autre représentant d’une entité gou-
vernementale ne peut être requis, dans le cadre d’une
procédure judiciaire, de témoigner, ou de produire quoi
que ce soit, relativement à un renseignement confiden-
tiel.
Communication de renseignements en cours de
procédures
(4) Les paragraphes (2) et (3) ne s’appliquent :
a) ni aux poursuites criminelles, sur déclaration de
culpabilité par procédure sommaire ou sur acte d’ac-
cusation, engagées par le dépôt d’une dénonciation ou
d’un acte d’accusation, en vertu d’une loi fédérale;
b) ni aux procédures judiciaires ayant trait à l’applica-
tion ou à l’exécution de la présente loi, du Régime de
pensions du Canada, de la Loi sur l’assurance-emploi,
de la partie 1 de la Loi sur la tarification de la pollu-
tion causée par les gaz à effet de serre ou de toute
autre loi fédérale ou provinciale qui prévoit le paie-
ment d’un droit ou d’une taxe.
Fourniture autorisée d’un renseignement confidentiel
(5) Le ministre peut fournir aux personnes compétentes
tout renseignement confidentiel qui peut raisonnable-
ment être considéré comme nécessaire uniquement à une
fin reliée à la vie, à la santé ou à la sécurité d’une
2021-2022 47 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Disclosure of confidential information
(6) An official may provide any confidential information
to a person identified in subsection 211(6) of the Excise
Act, 2001, but only to the extent that the information is
described in that subsection and solely for the applicable
purposes identified in that subsection with any modifica-
tions that the circumstances require, including reading
references to the Excise Act, 2001 as references to this
Act.
Restrictions on information sharing
(7) No information may be provided to a representative
of a government entity under subsection (6) in connec-
tion with a program, activity or service provided or un-
dertaken by the government entity unless the govern-
ment entity uses the business number as an identifier in
connection with the program, activity or service.
Public disclosure
(8) The Minister may, in connection with a program, ac-
tivity or service provided or undertaken by the Minister,
make available to the public the business number of, and
the name of (including any trade name or other name
used by), the holder of a business number.
Public disclosure by representative of government
entity
(9) A representative of a government entity may, in con-
nection with a program, activity or service provided or
undertaken by the government entity, make available to
the public the business number of, and the name of (in-
cluding any trade name or other name used by), the hold-
er of a business number, if
(a) a representative of the government entity was pro-
vided with that information under subsection (6); and
(b) the government entity uses the business number
as an identifier in connection with the program, activi-
ty or service.
Serious offences
(10) An official may provide information to a law en-
forcement officer of an appropriate police organization in
the circumstances described in subsection 211(6.4) of the
Excise Act, 2001.
Threats to security
(11) An official may provide information to the head, or
their delegate, of a recipient Government of Canada insti-
tution listed in Schedule 3 to the Security of Canada
personne physique ou à l’environnement au Canada ou
dans tout autre pays.
Divulgation d’un renseignement confidentiel
(6) Un fonctionnaire peut fournir un renseignement
confidentiel à une personne visée au paragraphe 211(6)
de la Loi de 2001 sur l’accise, mais uniquement dans la
mesure où le renseignement est visé à ce paragraphe et
uniquement pour les fins applicables indiquées à ce para-
graphe compte tenu des modifications nécessaires, dont
notamment le fait que toute mention de la Loi de 2001
sur l’accise vaut mention de la présente loi.
Restriction — partage des renseignements
(7) Un renseignement ne peut être fourni au représen-
tant d’une entité gouvernementale en conformité avec le
paragraphe (6) relativement à un programme, à une acti-
vité ou à un service offert ou entrepris par l’entité que si
celle-ci utilise le numéro d’entreprise comme identifica-
teur du programme, de l’activité ou du service.
Communication au public
(8) Le ministre peut mettre à la disposition du public, re-
lativement à un programme, à une activité ou à un ser-
vice qu’il offre ou entreprend, le numéro d’entreprise et
le nom d’un détenteur de numéro d’entreprise (y compris
tout nom commercial ou autre nom qu’il utilise).
Communication au public par le représentant d’une
entité gouvernementale
(9) Le représentant d’une entité gouvernementale peut
mettre à la disposition du public, relativement à un pro-
gramme, à une activité ou à un service offert ou entrepris
par l’entité, le numéro d’entreprise et le nom d’un déten-
teur de numéro d’entreprise (y compris tout nom com-
mercial ou autre nom qu’il utilise) si, à la fois :
a) ces renseignements ont été fournis à un représen-
tant de l’entité en conformité avec le paragraphe (6);
b) l’entité utilise le numéro d’entreprise comme iden-
tificateur du programme, de l’activité ou du service.
Infractions graves
(10) Un fonctionnaire peut fournir des renseignements à
un agent d’exécution de la loi d’une organisation de po-
lice compétente dans les circonstances prévues au para-
graphe 211(6.4) de la Loi de 2001 sur l’accise.
Menaces à la sécurité
(11) Un fonctionnaire peut fournir des renseignements
au responsable d’une institution fédérale destinataire fi-
gurant à l’annexe 3 de la Loi sur la communication
2021-2022 48 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Information Sharing Act in the circumstances described
in subsection 211(6.5) of the Excise Act, 2001.
Measures to prevent unauthorized use or disclosure
(12) The person presiding at a legal proceeding relating
to the supervision, evaluation or discipline of an autho-
rized person may order any measures that are necessary
to ensure that confidential information is not used or
provided to any person for any purpose not relating to
that proceeding, including
(a) holding a hearing in camera;
(b) banning the publication of the information;
(c) concealing the identity of the person to whom the
information relates; and
(d) sealing the records of the proceeding.
Disclosure to person or on consent
(13) An official or other representative of a government
entity may provide confidential information relating to a
person
(a) to that person; and
(b) with the consent of that person, to any other per-
son.
Appeal from order or direction
(14) An order or direction that is made in the course of
or in connection with any legal proceedings and that re-
quires an official or other representative of a government
entity to give or produce evidence relating to any confi-
dential information may, by notice served on all interest-
ed parties, be appealed forthwith by the Minister or by
the person against whom the order or direction is made
to
(a) the court of appeal of the province in which the or-
der or direction is made, in the case of an order or di-
rection made by a court or other tribunal established
under the laws of the province, whether that court or
tribunal is exercising a jurisdiction conferred by the
laws of Canada; and
(b) the Federal Court of Appeal, in the case of an or-
der or direction made by a court or other tribunal es-
tablished under the laws of Canada.
d’information ayant trait à la sécurité du Canada, ou à
son délégué, dans les circonstances prévues au para-
graphe 211(6.5) de la Loi de 2001 sur l’accise.
Mesures visant à prévenir l’utilisation ou la
divulgation non autorisée d’un renseignement
(12) La personne qui préside une procédure judiciaire
concernant la surveillance ou l’évaluation d’une personne
autorisée ou des mesures disciplinaires prises à son en-
droit peut ordonner la mise en œuvre des mesures néces-
saires pour éviter qu’un renseignement confidentiel soit
utilisé ou fourni à une fin étrangère à la procédure, y
compris :
a) la tenue d’une audience à huis clos;
b) la non-publication du renseignement;
c) la non-divulgation de l’identité de la personne en
cause;
d) la mise sous scellés du procès-verbal des délibéra-
tions.
Divulgation d’un renseignement confidentiel
(13) Un fonctionnaire ou autre représentant d’une entité
gouvernementale peut fournir un renseignement confi-
dentiel :
a) à la personne en cause;
b) à toute autre personne, avec le consentement de la
personne en cause.
Appel d’une ordonnance ou d’une directive
(14) Le ministre ou la personne contre laquelle une or-
donnance est rendue, ou à l’égard de laquelle une direc-
tive est donnée, dans le cadre ou à l’occasion d’une procé-
dure judiciaire enjoignant à un fonctionnaire ou autre re-
présentant d’une entité gouvernementale de témoigner,
ou de produire quoi que ce soit, relativement à un rensei-
gnement confidentiel peut sans délai, par avis signifié
aux parties intéressées, interjeter appel de l’ordonnance
ou de la directive devant :
a) la cour d’appel de la province dans laquelle l’ordon-
nance est rendue ou la directive donnée, s’il s’agit
d’une ordonnance ou d’une directive émanant d’un tri-
bunal établi en application des lois de la province, que
ce tribunal exerce ou non une compétence conférée
par les lois fédérales;
b) la Cour d’appel fédérale, s’il s’agit d’une ordon-
nance ou d’une directive émanant d’une cour ou d’un
autre tribunal établi en application des lois fédérales.
2021-2022 49 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Disposition of appeal
(15) The court to which an appeal is taken under subsec-
tion (14) may allow the appeal and quash the order or di-
rection appealed from or may dismiss the appeal, and the
rules of practice and procedure from time to time govern-
ing appeals to the courts must apply, with any modifica-
tions that the circumstances require, in respect of an ap-
peal instituted under subsection (14).
Stay
(16) An appeal instituted under subsection (14) must
stay the operation of the order or direction appealed
from until judgment is pronounced.
Décision d’appel
(15) La cour saisie d’un appel peut accueillir l’appel et
annuler l’ordonnance ou la directive en cause ou rejeter
l’appel. Les règles de pratique et de procédure régissant
les appels à la cour s’appliquent, compte tenu des modifi-
cations nécessaires, aux appels interjetés en vertu du pa-
ragraphe (14).
Sursis
(16) L’application de l’ordonnance ou de la directive ob-
jet d’un appel interjeté en vertu du paragraphe (14) est
différée jusqu’au prononcé du jugement.
DIVISION 5
Assessments
Assessment
33 (1) The Minister may assess a person for any amount
of tax or other amount payable by the person under this
Act and may, despite any previous assessment covering,
in whole or in part, the same matter, vary the assess-
ment, reassess the person or make any additional assess-
ments that the circumstances require.
Liability not affected
(2) The liability of a person to pay an amount under this
Act is not affected by an incorrect or incomplete assess-
ment or by the fact that no assessment has been made.
Minister not bound
(3) The Minister is not bound by any return, or informa-
tion provided by or on behalf of any person and may
make an assessment despite any return, or information
provided or not provided.
Assessment valid and binding
(4) An assessment, subject to being vacated on an objec-
tion or appeal under this Act and subject to a reassess-
ment, is deemed to be valid and binding.
Assessment deemed valid
(5) Subject to being reassessed or vacated as a result of
an objection or appeal under this Act, an assessment is
deemed to be valid and binding despite any error, defect
or omission in the assessment or in any proceeding un-
der this Act relating to it.
SECTION 5
Cotisations
Cotisation
33 (1) Le ministre peut établir une cotisation pour dé-
terminer la taxe ou les autres sommes payables par une
personne en application de la présente loi et peut, malgré
toute cotisation antérieure portant, en tout ou en partie,
sur la même question, modifier la cotisation, en établir
une nouvelle ou établir des cotisations supplémentaires,
selon les circonstances.
Obligation inchangée
(2) L’inexactitude, l’insuffisance ou l’absence d’une coti-
sation ne change rien aux sommes dont une personne est
redevable en application de la présente loi.
Ministre non lié
(3) Le ministre n’est pas lié par quelque déclaration, de-
mande ou renseignement produit par une personne ou
en son nom; il peut établir une cotisation indépendam-
ment du fait que quelque déclaration, demande ou ren-
seignement ait été produit.
Cotisation valide et exécutoire
(4) Sous réserve d’une nouvelle cotisation ou d’une an-
nulation prononcée par suite d’une opposition ou d’un
appel fait selon la présente loi, une cotisation est réputée
valide et exécutoire.
Présomption de validité
(5) Sous réserve d’une nouvelle cotisation ou d’une an-
nulation prononcée lors d’une opposition ou d’un appel
fait selon la présente loi, une cotisation est réputée valide
et exécutoire malgré les erreurs, vices de forme ou omis-
sions dans la cotisation ou dans une procédure y affé-
rente mise en œuvre en vertu de la présente loi.
2021-2022 50 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Refund on reassessment
(6) If a person has paid an amount assessed under this
section and the amount paid exceeds the amount deter-
mined on reassessment to have been payable by the per-
son, the Minister must refund to the person the amount
of the excess, together with interest at the specified rate
for the period beginning on the day the amount was paid
by the person and ending on the day the refund is paid.
Interest on cancelled amounts
(7) Despite subsection (6), if a person has paid an
amount of interest or penalty and the Minister waives or
cancels that amount under section 26 or 48, the Minister
must pay the amount to the person, together with inter-
est on the amount at the specified rate for the period be-
ginning on the day that is 30 days after the day on which
the Minister received a request in a manner satisfactory
to the Minister to apply that section and ending on the
day on which the amount is paid.
Restriction on payment by Minister
34 An amount under section 33 is not to be paid to a per-
son by the Minister at any time, unless all returns of
which the Minister has knowledge and that are required
to be filed at or before that time by the person under this
Act, the Excise Tax Act, the Income Tax Act, the Excise
Act, 2001, the Air Travellers Security Charge Act and
Part 1 of the Greenhouse Gas Pollution Pricing Act have
been filed with the Minister.
Notice of assessment
35 (1) After making an assessment under this Act, the
Minister must send to the person assessed a notice of the
assessment.
Payment of remainder
(2) If the Minister has assessed a person for an amount,
any portion of that amount then remaining unpaid is
payable to the Receiver General as of the date of the no-
tice of assessment.
Limitation period for assessments
36 (1) Subject to subsections (2) to (6) and (9), no as-
sessment in respect of an amount of tax or other amount
payable by a person under this Act must be made more
than four years after it became payable by the person un-
der this Act.
Remboursement sur nouvelle cotisation
(6) Dans le cas où une personne a payé un montant dé-
terminé en vertu du présent article, lequel montant ex-
cède celui qu’elle a à payer par suite de l’établissement
d’une nouvelle cotisation, le ministre doit lui rembourser
l’excédent ainsi que les intérêts y afférents calculés, au
taux déterminé, pour la période commençant le jour où
elle a payé le montant et se terminant le jour où le rem-
boursement est versé.
Intérêts sur montants annulés
(7) Malgré le paragraphe (6), si une personne a payé un
montant — intérêts ou pénalité — que le ministre a annu-
lé, ou auquel le ministre a renoncé, en vertu des arti-
cles 26 ou 48, le ministre paie le montant à la personne,
ainsi que les intérêts afférents calculés au taux déterminé
pour la période commençant le trentième jour suivant le
jour où il a reçu, d’une manière qu’il juge acceptable, une
demande en vue de l’application de cet article et se termi-
nant le jour où le montant est payé.
Restriction visant les paiements par le ministre
34 Un montant prévu à l’article 33 n’est remboursé à une
personne à un moment donné que si toutes les déclara-
tions dont le ministre a connaissance et que la personne
avait à présenter au plus tard à ce moment en application
de la présente loi, de la Loi sur la taxe d’accise, de la Loi
de l’impôt sur le revenu, de la Loi de 2001 sur l’accise, de
la Loi sur le droit pour la sécurité des passagers du
transport aérien et de la partie 1 de la Loi sur la tarifica-
tion de la pollution causée par les gaz à effet de serre ont
été présentées au ministre.
Avis de cotisation
35 (1) Une fois une cotisation établie à l’égard d’une
personne en application de la présente loi, le ministre lui
envoie un avis de cotisation.
Paiement du solde
(2) Si le ministre a établi une cotisation à l’égard d’une
personne, la partie impayée de la cotisation doit être ver-
sée au receveur général à la date de l’avis de cotisation.
Prescription des cotisations
36 (1) Sous réserve des paragraphes (2) à (6) et (9),
l’établissement d’une cotisation à l’égard de la taxe ou de
toute autre somme payable par une personne en applica-
tion de la présente loi se prescrit par quatre ans à comp-
ter de la date à laquelle elles sont devenues ainsi
payables.
2021-2022 51 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Exception — objection or appeal
(2) A variation of an assessment, or a reassessment, in
respect of an amount of tax or other amount payable by a
person under this Act may be made at any time if the
variation or reassessment is made
(a) to give effect to a decision on an objection or ap-
peal;
(b) with the written consent of an appellant to dispose
of an appeal; or
(c) to give effect to an alternative basis or argument
advanced by the Minister under subsection (6).
Exception — neglect or fraud
(3) An assessment in respect of any matter may be made
at any time if the person to be assessed has, in respect of
that matter,
(a) made a misrepresentation that is attributable to
their neglect, carelessness or wilful default; or
(b) committed fraud with respect to a return filed un-
der this Act.
Exception — opposition ou appel
(2) Une cotisation concernant la taxe ou toute autre
somme payable par une personne en application de la
présente loi peut être modifiée, ou une nouvelle cotisa-
tion concernant une telle taxe ou somme peut être éta-
blie, à un moment donné :
a) en vue d’exécuter la décision rendue par suite d’une
opposition ou d’un appel;
b) avec le consentement écrit de la personne visée, en
vue de régler un appel;
c) pour tenir compte d’un nouveau fondement ou
d’un nouvel argument avancé par le ministre en vertu
du paragraphe (6).
Exception — négligence ou fraude
(3) Une cotisation peut être établie à tout moment si la
personne devant faire l’objet de la cotisation a, relative-
ment à l’objet de la cotisation :
a) fait une fausse déclaration attribuable à sa négli-
gence, son inattention ou son omission volontaire;
b) commis une fraude relativement à une déclaration
ou à une demande de remboursement produite en ap-
plication de la présente loi.
Exception — erreur sur l’année
(4) Si le ministre constate, lors de l’établissement d’une
cotisation, qu’une personne a payé, au titre de la taxe à
payer pour une année civile, un montant qui était à payer
pour une autre année civile, il peut établir une cotisation
pour l’autre année.
Exception — other year
(4) If, in making an assessment, the Minister determines
that a person has paid in respect of any matter an
amount as or on account of tax payable for a particular
calendar year of the person that was in fact payable for
another calendar year of the person, the Minister may at
any time make an assessment for that other year in re-
spect of that matter.
Exception — failure to file return
(5) An assessment in respect of a residential property of
a person for a calendar year may be made at any time if
the person to be assessed has not filed a return in respect
of that property for the calendar year.
Alternative basis or argument
(6) The Minister may advance an alternative basis or ar-
gument in support of an assessment of a person, or in
support of all or any portion of the total amount deter-
mined on assessment to be payable by a person under
this Act, at any time after the period otherwise limited by
subsection (1) for making the assessment unless, on an
appeal under this Act,
Exception — défaut de présenter une déclaration
(5) Une cotisation concernant un immeuble résidentiel
d’une personne pour une année civile peut être établie à
tout moment si la personne devant faire l’objet de la coti-
sation n’a pas présenté une déclaration à l’égard de cet
immeuble résidentiel pour cette année.
Nouveau fondement ou nouvel argument
(6) Le ministre peut avancer un nouveau fondement ou
un nouvel argument à l’appui d’une cotisation établie à
l’égard d’une personne, ou à l’appui de tout ou partie du
montant total déterminé lors de l’établissement d’une co-
tisation comme étant payable par une personne en appli-
cation de la présente loi, après l’expiration du délai prévu
au paragraphe (1) pour l’établissement de la cotisation,
sauf si, sur appel interjeté en application de la présente
loi :
2021-2022 52 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(a) there is relevant evidence that the person is no
longer able to adduce without leave of the court; and
(b) it is not appropriate in the circumstances for the
court to order that the evidence be adduced.
Limitation
(7) If a reassessment of a person is made that gives effect
to an alternative basis or argument advanced by the Min-
ister under subsection (6) in support of a particular as-
sessment of the person, the Minister is not to reassess for
an amount that is greater than the total amount of the
particular assessment.
Exception
(8) Subsection (7) does not apply to any portion of an
amount determined on reassessment that the Minister
would be entitled to reassess under this Act at any time
after the period otherwise limited by subsection (1) for
making the reassessment if this Act were read without
reference to subsection (6).
Exception — waiver
(9) An assessment in respect of any matter specified in a
waiver filed under subsection (10) may be made at any
time within the period specified in the waiver unless the
waiver has been revoked under subsection (11), in which
case an assessment may be made at any time during the
180 days that the waiver remains in effect.
Filing waiver
(10) Any person may, within the time otherwise limited
by subsection (1) for an assessment, waive the applica-
tion of subsection (1) by filing with the Minister a waiver
in the prescribed form specifying the period for which,
and the matter in respect of which, the person waives the
application of that subsection.
Revoking waiver
(11) Any person that has filed a waiver may revoke it by
filing with the Minister a notice of revocation of the waiv-
er in the prescribed form and manner. The waiver re-
mains in effect for 180 days after the day on which the
notice is filed.
a) d’une part, il existe des éléments de preuve que la
personne n’est plus en mesure de produire sans l’auto-
risation du tribunal;
b) d’autre part, il ne convient pas que le tribunal or-
donne la production des éléments de preuve dans les
circonstances.
Restriction
(7) Si une nouvelle cotisation est établie à l’égard d’une
personne pour tenir compte d’un nouveau fondement ou
d’un nouvel argument avancé par le ministre en vertu du
paragraphe (6) à l’appui d’une cotisation donnée établie à
l’égard de la personne, le ministre ne peut établir la nou-
velle cotisation pour un montant supérieur au montant
total de la cotisation donnée.
Exception
(8) Le paragraphe (7) ne s’applique à aucune partie d’un
montant déterminé lors de l’établissement d’une nouvelle
cotisation à l’égard duquel le ministre pourrait établir
une nouvelle cotisation en application de la présente loi
après l’expiration du délai prévu au paragraphe (1) pour
l’établissement de la nouvelle cotisation s’il n’était pas te-
nu compte du paragraphe (6).
Exception — renonciation
(9) Une cotisation portant sur une question précisée
dans une renonciation présentée en vertu du para-
graphe (10) peut être établie dans le délai indiqué dans la
renonciation ou, en cas de révocation de la renonciation
en vertu du paragraphe (11), dans les cent quatre-vingts
jours pendant lesquels la renonciation demeure en vi-
gueur.
Présentation de la renonciation
(10) Toute personne peut, dans le délai prévu par
ailleurs au paragraphe (1) pour l’établissement d’une co-
tisation à son égard, renoncer à l’application de ce para-
graphe en présentant au ministre une renonciation en la
forme déterminée par celui-ci qui précise l’objet de la re-
nonciation ainsi que sa période d’application.
Révocation de la renonciation
(11) La renonciation est révocable à cent quatre-vingts
jours de la date d’avis au ministre en la forme et selon les
modalités qu’il détermine.
2021-2022 53 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
DIVISION 6
Objections to Assessment
Objection to assessment
37 (1) Any person that has been assessed and that ob-
jects to the assessment may, within 90 days after the day
notice of the assessment is sent to the person, file with
the Minister a notice of objection in the prescribed form
and manner setting out the reasons for the objection and
all relevant facts.
Limitation on objections
(2) Despite subsection (1), no objection may be made by
a person in respect of an issue for which the right of ob-
jection has been waived in writing by the person.
SECTION 6
Opposition aux cotisations
Opposition à la cotisation
37 (1) La personne qui fait opposition à la cotisation
établie à son égard peut, dans les quatre-vingt-dix jours
suivant la date de l’avis de cotisation, présenter au mi-
nistre un avis d’opposition en la forme et selon les moda-
lités qu’il détermine.
Acceptance of objection
(3) The Minister may accept a notice of objection even
though it was not filed in the prescribed form and man-
ner.
Consideration of objection
(4) On receipt of a notice of objection, the Minister must,
without delay, reconsider the assessment and vacate or
confirm it or make a reassessment.
Waiving reconsideration
(5) If, in a notice of objection, a person that wishes to ap-
peal directly to the Tax Court of Canada requests the
Minister not to reconsider the assessment objected to,
the Minister may confirm the assessment without recon-
sideration.
Notice of decision
(6) After reconsidering an assessment under subsection
(4) or confirming an assessment under subsection (5),
the Minister must notify the person objecting to the as-
sessment of the Minister’s decision in writing.
Extension of time by Minister
38 (1) If no objection to an assessment is filed under
section 37 within the time limited under this Act, a per-
son may make an application to the Minister to extend
the time for filing a notice of objection and the Minister
may grant the application.
Contents of application
(2) An application must set out the reasons why the no-
tice of objection was not filed within the time limited un-
der this Act for doing so.
Restriction
(2) Malgré le paragraphe (1), aucune opposition ne peut
être faite par une personne relativement à une question
pour laquelle elle a renoncé par écrit à son droit d’oppo-
sition.
Acceptation de l’opposition
(3) Le ministre peut accepter l’avis d’opposition qui n’a
pas été produit en la forme et selon les modalités qu’il dé-
termine.
Examen de l’opposition
(4) Sur réception d’un avis d’opposition, le ministre doit,
sans délai, examiner la cotisation de nouveau et l’annuler
ou la confirmer ou établir une nouvelle cotisation.
Renonciation au nouvel examen
(5) Le ministre peut confirmer une cotisation sans l’exa-
miner de nouveau sur demande de la personne qui lui
fait part, dans son avis d’opposition, de son intention
d’en appeler directement à la Cour canadienne de l’im-
pôt.
Avis de décision
(6) Après avoir examiné de nouveau une cotisation en
vertu du paragraphe (4) ou confirmé une cotisation en
vertu du paragraphe (5), le ministre fait part de sa déci-
sion par écrit à la personne qui a fait opposition à la coti-
sation.
Prorogation du délai par le ministre
38 (1) Le ministre peut proroger le délai pour produire
un avis d’opposition dans le cas où la personne qui n’a
pas fait opposition à une cotisation en vertu de l’article 37
dans le délai imparti en application de la présente loi lui
présente une demande à cet effet.
Contenu de la demande
(2) La demande doit indiquer les raisons pour lesquelles
l’avis d’opposition n’a pas été produit dans le délai im-
parti en application de la présente loi.
2021-2022 54 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
How application made
(3) An application must be made by delivering or mail-
ing, to the Assistant Commissioner of the Appeals Branch
of the Canada Revenue Agency, the application accompa-
nied by a copy of the notice of objection.
Defect in application
(4) The Minister may accept an application even though
it was not made in accordance with subsection (3).
Duties of Minister
(5) On receipt of an application, the Minister must, with-
out delay, consider the application and grant or refuse it,
and must notify the person of the decision in writing.
Date of objection if application granted
(6) If an application is granted, the notice of objection is
deemed to have been filed on the day of the decision of
the Minister.
Conditions — grant of application
(7) An application is not to be granted under this section
unless
(a) the application is made within one year after the
expiry of the time limited under this Act for objecting;
and
(b) the person demonstrates that
(i) within the time limited under this Act for object-
ing, the person
(A) was unable to act or to give a mandate to act
in their name, or
(B) had a bona fide intention to object to the as-
sessment,
(ii) given the reasons set out in the application and
the circumstances of the case, it would be just and
equitable to grant the application, and
(iii) the application was made as soon as circum-
stances permitted it to be made.
Modalités
(3) La demande, accompagnée d’un exemplaire de l’avis
d’opposition, est livrée ou envoyée au sous-commissaire
de la Direction générale des appels de l’Agence du revenu
du Canada.
Demande non conforme
(4) Le ministre peut recevoir la demande qui n’a pas été
faite en conformité avec le paragraphe (3).
Obligations du ministre
(5) Sur réception de la demande, le ministre doit, sans
délai, l’examiner et y faire droit ou la rejeter. Dès lors, il
avise la personne de sa décision par écrit.
Date de production de l’avis d’opposition
(6) S’il est fait droit à la demande, l’avis d’opposition est
réputé produit à la date de la décision du ministre.
Conditions d’acceptation de la demande
(7) Il n’est fait droit à la demande que si les conditions
suivantes sont réunies :
a) la demande est présentée dans l’année suivant l’ex-
piration du délai imparti en application de la présente
loi pour faire opposition;
b) la personne démontre ce qui suit :
(i) dans le délai d’opposition imparti en application
de la présente loi, elle n’a pu ni agir ni mandater
quelqu’un pour agir en son nom, ou elle avait véri-
tablement l’intention de faire opposition à la cotisa-
tion,
(ii) compte tenu des raisons indiquées dans la de-
mande et des circonstances en l’espèce, il est juste
et équitable de faire droit à la demande,
(iii) la demande a été présentée dès que les circons-
tances l’ont permis.
2021-2022 55 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
DIVISION 7
Appeal
Extension of time by Tax Court of Canada
39 (1) A person that has made an application under sec-
tion 38 may apply to the Tax Court of Canada to have the
application granted after either
(a) the Minister has refused the application; or
(b) 90 days have elapsed after the day on which the
application was made and the Minister has not noti-
fied the person of the Minister’s decision.
When application may not be made
(2) No application may be made after the expiry of
30 days after the day on which the decision referred to in
subsection 38(5) is sent to the person.
How application made
(3) An application must be made by filing in the Registry
of the Tax Court of Canada, in accordance with the Tax
Court of Canada Act, three copies of the documents de-
livered or mailed under subsection 38(3).
Copy to Commissioner
(4) The Tax Court of Canada must send a copy of the ap-
plication to the Commissioner.
Powers of Tax Court of Canada
(5) The Tax Court of Canada may dispose of an applica-
tion by dismissing or granting it and, in granting it, the
Court may impose any terms that it considers just or or-
der that the notice of objection be deemed to be a valid
objection as of the date of the order.
When application to be granted
(6) An application must not be granted under this sec-
tion unless
(a) the application under subsection 38(1) was made
within one year after the expiry of the time limited un-
der this Act for objecting; and
(b) the person demonstrates that
(i) within the time limited under this Act for object-
ing, the person
(A) was unable to act or to give a mandate to act
in their name, or
SECTION 7
Appel
Prorogation du délai par la Cour canadienne de
l’impôt
39 (1) La personne qui a présenté une demande en ver-
tu de l’article 38 peut demander à la Cour canadienne de
l’impôt d’y faire droit après :
a) le rejet de la demande par le ministre;
b) l’expiration d’un délai de quatre-vingt-dix jours
suivant la présentation de la demande, si le ministre
n’a pas avisé la personne de sa décision dans ce délai.
Irrecevabilité
(2) La demande est toutefois irrecevable une fois expiré
un délai de trente jours suivant l’envoi à la personne de la
décision visée au paragraphe 38(5).
Modalités
(3) La demande se fait par dépôt auprès du greffe de la
Cour canadienne de l’impôt, conformément à la Loi sur
la Cour canadienne de l’impôt, de trois exemplaires des
documents livrés ou envoyés en vertu du para-
graphe 38(3).
Copie au commissaire
(4) La Cour canadienne de l’impôt envoie copie de la de-
mande au commissaire.
Pouvoirs de la Cour canadienne de l’impôt
(5) La Cour canadienne de l’impôt peut rejeter la de-
mande ou y faire droit. Dans ce dernier cas, elle peut im-
poser les conditions qu’elle estime justes ou ordonner
que l’avis d’opposition soit réputé valide à compter de la
date de l’ordonnance.
Conditions d’acceptation de la demande
(6) Il n’est fait droit à la demande que si les conditions
suivantes sont réunies :
a) la demande prévue au paragraphe 38(1) a été pré-
sentée dans l’année suivant l’expiration du délai im-
parti en application de la présente loi pour faire oppo-
sition;
b) la personne démontre ce qui suit :
(i) dans le délai d’opposition imparti en application
de la présente loi, elle n’a pu ni agir ni mandater
quelqu’un pour agir en son nom, ou elle avait
2021-2022 56 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(B) had a bona fide intention to object to the as-
sessment,
(ii) given the reasons set out in the application un-
der this section and the circumstances of the case, it
would be just and equitable to grant the applica-
tion, and
(iii) the application under subsection 38(1) was
made as soon as circumstances permitted it to be
made.
Appeal to Tax Court of Canada
40 (1) Subject to subsection (2), a person that has filed a
notice of objection to an assessment may appeal to the
Tax Court of Canada to have the assessment vacated or a
reassessment made after
(a) the Minister has confirmed the assessment or has
reassessed; or
(b) 180 days have elapsed after the day on which the
notice of objection was filed and the Minister has not
notified the person that the Minister has vacated or
confirmed the assessment or has reassessed.
No appeal
(2) No appeal under subsection (1) may be instituted af-
ter the expiry of 90 days after the day on which notice
that the Minister has reassessed or confirmed the assess-
ment is sent to the person under subsection 37(6).
Amendment of appeal
(3) The Tax Court of Canada may, on any terms that it
sees fit, authorize a person that has instituted an appeal
in respect of a matter to amend the appeal to include any
further assessment in respect of the matter that the per-
son is entitled under this section to appeal.
Extension of time to appeal
41 (1) If no appeal to the Tax Court of Canada under
section 40 has been instituted within the time limited by
that section for doing so, a person may make an applica-
tion to the Tax Court of Canada for an order extending
the time within which an appeal may be instituted, and
the Court may make an order extending the time for ap-
pealing and may impose any terms that it considers just.
Contents of application
(2) An application must set out the reasons why the ap-
peal was not instituted within the time limited under sec-
tion 40 for doing so.
véritablement l’intention de faire opposition à la co-
tisation,
(ii) compte tenu des raisons indiquées dans la de-
mande prévue au présent article et des circons-
tances en l’espèce, il est juste et équitable de faire
droit à la demande,
(iii) la demande prévue au paragraphe 38(1) a été
présentée dès que les circonstances l’ont permis.
Appel
40 (1) Sous réserve du paragraphe (2), la personne qui a
produit un avis d’opposition à une cotisation peut inter-
jeter appel à la Cour canadienne de l’impôt pour faire an-
nuler la cotisation ou en faire établir une nouvelle dans
les cas suivants :
a) la cotisation est confirmée par le ministre ou une
nouvelle cotisation est établie;
b) un délai de cent quatre-vingts jours suivant la pro-
duction de l’avis a expiré sans que le ministre ait noti-
fié la personne du fait qu’il a annulé ou confirmé la co-
tisation ou procédé à une nouvelle cotisation.
Aucun appel
(2) Nul appel ne peut être interjeté après l’expiration
d’un délai de quatre-vingt-dix jours suivant l’envoi à la
personne, en vertu du paragraphe 37(6), d’un avis por-
tant que le ministre a confirmé la cotisation ou procédé à
une nouvelle cotisation.
Modification de l’appel
(3) La Cour canadienne de l’impôt peut, de la manière
qu’elle estime indiquée, autoriser une personne ayant in-
terjeté appel sur une question à modifier l’appel de façon
à ce qu’il porte sur toute cotisation ultérieure concernant
la question qui peut faire l’objet d’un appel en application
du présent article.
Prorogation du délai d’appel
41 (1) La personne qui n’a pas interjeté appel en vertu
de l’article 40 dans le délai imparti peut présenter à la
Cour canadienne de l’impôt une demande de prorogation
du délai pour interjeter appel. La Cour peut faire droit à
la demande et imposer les conditions qu’elle estime
justes.
Contenu de la demande
(2) La demande doit indiquer les raisons pour lesquelles
l’appel n’a pas été interjeté dans le délai imparti en vertu
de l’article 40.
2021-2022 57 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
How application made
(3) An application must be made by filing in the Registry
of the Tax Court of Canada, in accordance with the Tax
Court of Canada Act, three copies of the application to-
gether with three copies of the notice of appeal.
Copy to Deputy Attorney General of Canada
(4) The Tax Court of Canada must send a copy of the ap-
plication to the office of the Deputy Attorney General of
Canada.
When order to be made
(5) An order must not be made under this section unless
(a) the application is made within one year after the
expiry of the time limited under section 40 for appeal-
ing; and
(b) the person demonstrates that
(i) within the time limited under section 40 for ap-
pealing, the person
(A) was unable to act or to give a mandate to act
in their name, or
(B) had a bona fide intention to appeal,
(ii) given the reasons set out in the application and
the circumstances of the case, it would be just and
equitable to grant the application,
(iii) the application was made as soon as circum-
stances permitted it to be made, and
(iv) there are reasonable grounds for the appeal.
No appeal if waiver
42 Despite section 40, a person may not appeal to the
Tax Court of Canada to have an assessment vacated or
varied in respect of an issue for which the right of objec-
tion or appeal has been waived in writing by the person.
Modalités
(3) La demande, accompagnée de trois exemplaires de
l’avis d’appel, doit être déposée en trois exemplaires au-
près du greffe de la Cour canadienne de l’impôt confor-
mément à la Loi sur la Cour canadienne de l’impôt.
Copie au sous-procureur général du Canada
(4) La Cour canadienne de l’impôt envoie copie de la de-
mande au bureau du sous-procureur général du Canada.
Conditions d’acceptation de la demande
(5) Il n’est fait droit à la demande que si les conditions
suivantes sont réunies :
a) la demande a été présentée dans l’année suivant
l’expiration du délai d’appel imparti en vertu de l’ar-
ticle 40;
b) la personne démontre ce qui suit :
(i) dans le délai d’appel imparti en vertu de l’arti-
cle 40, elle n’a pu ni agir ni mandater quelqu’un
pour agir en son nom, ou elle avait véritablement
l’intention d’interjeter appel,
(ii) compte tenu des raisons indiquées dans la de-
mande et des circonstances en l’espèce, il est juste
et équitable de faire droit à la demande,
(iii) la demande a été présentée dès que les circons-
tances l’ont permis,
(iv) l’appel est raisonnablement fondé.
Institution of appeals
43 An appeal to the Tax Court of Canada under this Act
must be instituted in accordance with the Tax Court of
Canada Act.
Disposition of appeal
44 The Tax Court of Canada may dispose of an appeal
from an assessment by
(a) dismissing it; or
Restriction — renonciation
42 Malgré l’article 40, aucun appel ne peut être interjeté
par une personne devant la Cour canadienne de l’impôt
pour faire annuler ou modifier une cotisation visant une
question pour laquelle elle a renoncé par écrit à son droit
d’opposition ou d’appel.
Modalités de l’appel
43 Tout appel à la Cour canadienne de l’impôt en appli-
cation de la présente loi est interjeté conformément à la
Loi sur la Cour canadienne de l’impôt.
Règlement d’appel
44 La Cour canadienne de l’impôt peut statuer sur un
appel concernant une cotisation en le rejetant ou en l’ac-
cueillant. Dans ce dernier cas, elle peut annuler la cotisa-
tion ou la renvoyer au ministre pour nouvel examen et
nouvelle cotisation.
2021-2022 58 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(b) allowing it and
(i) vacating the assessment, or
(ii) referring the assessment back to the Minister
for reconsideration and reassessment.
References to Tax Court of Canada
45 (1) If the Minister and another person agree in writ-
ing that a question arising under this Act, in respect of
any assessment or proposed assessment of the person,
should be determined by the Tax Court of Canada, that
question must be determined by that Court.
Time during consideration not to count
(2) For the purpose of making an assessment of a person
that agreed in writing to the determination of a question,
filing a notice of objection to an assessment or instituting
an appeal from an assessment, the time between the day
on which proceedings are instituted in the Tax Court of
Canada to have a question determined and the day on
which the question is finally determined must not be
counted in the computation of
(a) the four-year period referred to in subsection
36(1);
(b) the period within which a notice of objection to an
assessment may be filed under section 37; or
(c) the period within which an appeal may be institut-
ed under section 40.
Reference of common questions to Tax Court of
Canada
46 (1) If the Minister is of the opinion that a question
arising out of one and the same transaction or occurrence
or series of transactions or occurrences is common to as-
sessments or proposed assessments in respect of two or
more persons, the Minister may apply to the Tax Court of
Canada for a determination of the question.
Contents of application
(2) An application must set out
(a) the question in respect of which the Minister re-
quests a determination;
(b) the names of the persons that the Minister seeks to
have bound by the determination; and
(c) the facts and reasons on which the Minister relies
and on which the Minister based or intends to base as-
sessments of each person named in the application.
Renvoi à la Cour canadienne de l’impôt
45 (1) La Cour canadienne de l’impôt doit statuer sur
toute question portant sur une cotisation, réelle ou proje-
tée, découlant de l’application de la présente loi, que le
ministre et la personne visée par la cotisation
conviennent, par écrit, de lui soumettre.
Exclusion du délai d’examen
(2) La période commençant à la date où une question est
soumise à la Cour canadienne de l’impôt et se terminant
à la date où il est définitivement statué sur la question est
exclue du calcul des délais ci-après en vue, selon le cas,
d’établir une cotisation à l’égard de la personne qui a ac-
cepté de soumettre la question, de produire un avis d’op-
position à cette cotisation ou d’en appeler de celle-ci :
a) le délai de quatre ans prévu au paragraphe 36(1);
b) le délai de production d’un avis d’opposition à une
cotisation en vertu de l’article 37;
c) le délai d’appel en vertu de l’article 40.
Renvoi à la Cour canadienne de l’impôt de questions
communes
46 (1) Si le ministre est d’avis qu’une même opération,
un même événement ou une même série d’opérations ou
d’événements soulève une question qui se rapporte à des
cotisations, réelles ou projetées, relatives à plusieurs per-
sonnes, il peut demander à la Cour canadienne de l’impôt
de statuer sur la question.
Contenu de la demande
(2) La demande doit comporter les renseignements sui-
vants :
a) la question sur laquelle le ministre demande une
décision;
b) le nom des personnes qu’il souhaite voir liées par la
décision;
c) les faits et motifs sur lesquels il s’appuie et sur les-
quels il fonde ou a l’intention de fonder la cotisation
de chaque personne nommée dans la demande.
2021-2022 59 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Service
(3) A copy of the application must be served by the Min-
ister on each of the persons named in it and on any other
person that, in the opinion of the Tax Court of Canada, is
likely to be affected by the determination of the question.
Determination by Tax Court of Canada
(4) If the Tax Court of Canada is satisfied that a determi-
nation of a question set out in an application will affect
assessments or proposed assessments in respect of two
or more persons that have been served with a copy of the
application and that are named in an order of the Tax
Court of Canada under this subsection, it may
(a) if none of the persons named in the order has ap-
pealed from such an assessment, proceed to determine
the question in any manner that it considers appropri-
ate; or
(b) if one or more of the persons named in the order
has or have appealed, make any order that it considers
appropriate joining a party or parties to that appeal or
those appeals and proceed to determine the question.
Determination final and conclusive
(5) Subject to subsection (6), if a question set out in an
application is determined by the Tax Court of Canada,
the determination is final and conclusive for the purpos-
es of any assessments of persons named by the Court un-
der subsection (4).
Appeal
(6) If a question set out in an application is determined
by the Tax Court of Canada, the Minister or any of the
persons that have been served with a copy of the applica-
tion and that are named in an order of the Court under
subsection (4) may, in accordance with the provisions of
this Act, the Tax Court of Canada Act or the Federal
Courts Act, as they relate to appeals from or applications
for judicial review of decisions of the Tax Court of
Canada, appeal from the determination.
Parties to appeal
(7) The parties that are bound by a determination are
parties to any appeal from the determination.
Time during consideration not counted
(8) For the purpose of making an assessment of a per-
son, filing a notice of objection to an assessment or
Signification
(3) Le ministre signifie un exemplaire de la demande à
chacune des personnes qui y sont nommées et à toute
autre personne qui, de l’avis de la Cour canadienne de
l’impôt, est susceptible d’être touchée par la décision.
Décision de la Cour canadienne de l’impôt
(4) Dans le cas où la Cour canadienne de l’impôt est
convaincue que la décision rendue sur la question expo-
sée dans une demande a un effet sur les cotisations,
réelles ou projetées, relatives à plusieurs personnes à qui
une copie de la demande a été signifiée et qui sont nom-
mées dans une ordonnance de la Cour rendue en applica-
tion du présent paragraphe, elle peut :
a) si aucune des personnes nommées dans l’ordon-
nance n’en a appelé d’une de ces cotisations, entre-
prendre de statuer sur la question selon les modalités
qu’elle juge indiquées;
b) si une ou plusieurs des personnes nommées dans
l’ordonnance ont interjeté appel, rendre toute ordon-
nance qu’elle juge indiquée groupant dans cet ou ces
appels les parties appelantes et entreprendre de sta-
tuer sur la question.
Décision définitive
(5) Sous réserve du paragraphe (6), la décision rendue
par la Cour canadienne de l’impôt sur une question sou-
mise dans une demande dont elle a été saisie est défini-
tive et sans appel aux fins d’établissement de toute coti-
sation à l’égard des personnes nommées par la Cour en
application du paragraphe (4).
Appel
(6) Dans le cas où la Cour canadienne de l’impôt statue
sur une question soumise dans une demande dont elle a
été saisie, le ministre ou l’une des personnes à qui une
copie de la demande a été signifiée et qui est nommée
dans une ordonnance de la Cour rendue en vertu du pa-
ragraphe (4) peut interjeter appel de la décision confor-
mément aux dispositions de la présente loi, de la Loi sur
la Cour canadienne de l’impôt ou de la Loi sur les Cours
fédérales concernant les appels de décisions de la Cour
canadienne de l’impôt et les demandes de contrôle judi-
ciaire de ces décisions.
Parties à un appel
(7) Les parties liées par une décision sont parties à un
appel de cette décision.
Exclusion du délai d’examen
(8) La période visée au paragraphe (9) est exclue du cal-
cul des délais ci-après lorsqu’ils ont trait à
2021-2022 60 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
instituting an appeal from an assessment, the periods de-
scribed in subsection (9) must not be counted in the com-
putation of
(a) the four-year period referred to in subsection
36(1);
(b) the period within which a notice of objection to an
assessment may be filed under section 37; or
(c) the period within which an appeal may be institut-
ed under section 40.
Excluded periods
(9) The period that is not to be counted in the computa-
tion of the periods described in paragraphs (8)(a) to (c) is
the time between the day on which an application that is
made under this section is served on a person under sub-
section (3) and
(a) in the case of a person named in an order of the
Tax Court of Canada under subsection (4), the day on
which the determination becomes final and conclusive
and not subject to any appeal; and
(b) in the case of any other person, the day on which
the person is served with a notice that the person has
not been named in an order of the Tax Court of
Canada under subsection (4).
l’établissement d’une cotisation à l’égard de la personne,
à la production d’un avis d’opposition à cette cotisation
ou à l’interjection d’un appel de celle-ci :
a) le délai de quatre ans prévu au paragraphe 36(1);
b) le délai de production d’un avis d’opposition à une
cotisation en vertu de l’article 37;
c) le délai d’appel en vertu de l’article 40.
Période exclue
(9) Est exclue du calcul des délais visés aux alinéas (8)a)
à c) la période commençant à la date où une demande
présentée en application du présent article est signifiée à
une personne en vertu du paragraphe (3) et se terminant
à la date applicable suivante :
a) dans le cas d’une personne nommée dans une or-
donnance rendue par la Cour canadienne de l’impôt
en vertu du paragraphe (4), la date où la décision de-
vient définitive et sans appel;
b) dans le cas d’une autre personne, la date où il lui
est signifié un avis portant qu’elle n’a pas été nommée
dans une telle ordonnance.
DIVISION 8
Penalties
Failure to file
47 (1) Every person that fails to file a return as and
when required under section 7 is liable to a penalty equal
to the greater of
(a) $5,000 if the person is an individual or $10,000 if
the person is not an individual, and
(b) the amount that is the total of
(i) 5% of the tax calculated under section 6 payable
by the person in respect of the residential property
for the calendar year, and
(ii) the product obtained when 3% of the tax calcu-
lated under section 6 payable by the person in re-
spect of the residential property for the calendar
year is multiplied by the number of complete
months from the date on which the return was re-
quired to be filed.
SECTION 8
Pénalités
Défaut de produire une déclaration
47 (1) Quiconque omet de produire une déclaration,
dans le délai et selon les modalités prévus par l’article 7,
est tenu de payer une pénalité égale au plus élevé des
montants suivants :
a) 5 000 $ si la personne est un particulier et 10 000 $
si la personne n’est pas un particulier;
b) le montant qui correspond au total des montants
suivants :
(i) le montant correspondant à 5 % de la taxe calcu-
lée en application de l’article 6 payable par la per-
sonne à l’égard de l’immeuble résidentiel pour l’an-
née civile,
(ii) pour chaque mois civil où la déclaration est en
retard, le montant correspondant à 3 % de la taxe
calculée en application de l’article 6 payable par la
2021-2022 61 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Failure to file
(2) If a person fails to file a return in respect of a residen-
tial property for a particular calendar year by December
31 of the following calendar year, for the purpose of cal-
culating the total referred to paragraph (1)(b), the tax
calculated under section 6 in respect of the residential
property for the particular calendar year is to be deter-
mined without reference to paragraphs 6(7)(c) to (f) and
subsections 6(8) and (9).
Waiving or cancelling penalties
48 (1) The Minister may, on or before the day that is
10 calendar years after the end of a calendar year of a
person, or on application by the person on or before that
day, waive or cancel all or any portion of any penalty un-
der this Act payable by the person in respect of the calen-
dar year.
Interest if amount waived or cancelled
(2) If a person has paid an amount of penalty and the
Minister waives or cancels that amount under sub-
section (1), the Minister must pay interest on the amount
paid by the person beginning on the day that is 30 days
after the day on which the Minister received a request in
a manner satisfactory to the Minister to apply that sub-
section and ending on the day on which the amount is
paid to the person.
General penalty
49 Every person that fails to comply with any provision
of this Act for which no other penalty is specified is liable
to a penalty of $250.
Failure to file on demand
50 Every person that fails to file a return as and when
required under a demand issued under section 10 is li-
able to a penalty of $500.
Failure to provide information
51 Every person that fails to provide any information or
record as and when required under this Act is liable to a
penalty of $250 for every failure unless, in the case of in-
formation required in respect of another person, a rea-
sonable effort was made by the person to obtain the in-
formation.
False statements or omissions
52 Every person that knowingly, or under circumstances
amounting to gross negligence, makes or participates in,
assents to or acquiesces in the making of a false
personne à l’égard de l’immeuble résidentiel pour
l’année civile.
Défaut de présenter une déclaration au plus tard le
31 décembre
(2) Si une personne n’a pas présenté une déclaration à
l’égard d’un immeuble résidentiel pour une année civile
donnée au plus tard le 31 décembre de l’année civile sui-
vante, aux fins du calcul du total des montants visés à
l’alinéa (1)b), la taxe calculée en application de l’article 6
à l’égard de l’immeuble résidentiel doit être déterminée
compte non tenu des alinéas 6(7)c) à f) et des para-
graphes 6(8) et (9).
Renonciation ou annulation — pénalité
48 (1) Le ministre peut, au plus tard le jour qui suit de
dix années civiles la fin d’une année civile d’une personne
ou sur demande de la personne présentée au plus tard ce
jour-là, annuler tout ou partie d’une pénalité payable par
la personne en application de la présente loi relativement
à l’année civile, ou y renoncer.
Intérêts sur montant annulé ou auquel il est renoncé
(2) Si une personne a payé un montant de pénalité que le
ministre a annulé, ou auquel il a renoncé, en vertu du pa-
ragraphe (1), le ministre paie des intérêts sur le montant
payé par la personne, pour la période commençant le
trentième jour suivant le jour où il a reçu, d’une manière
qu’il juge acceptable, une demande en vue de l’applica-
tion de ce paragraphe et se terminant le jour où le mon-
tant est payé à la personne.
Pénalité générale
49 Quiconque omet de se conformer à une disposition
de la présente loi pour laquelle aucune autre pénalité
n’est prévue est passible d’une pénalité de 250 $.
Défaut de donner suite à une mise en demeure
50 Quiconque ne se conforme pas à une mise en de-
meure exigeant la production d’une déclaration en appli-
cation de l’article 10 est passible d’une pénalité de 500 $.
Défaut de présenter des renseignements
51 Quiconque ne fournit pas des renseignements ou des
registres dans le délai et selon les modalités prévus par la
présente loi est passible d’une pénalité de 250 $ pour
chaque défaut à moins que, s’il s’agit de renseignements
concernant une autre personne, il ne se soit raisonnable-
ment appliqué à les obtenir.
Faux énoncés ou omissions
52 Toute personne qui, sciemment ou dans des circons-
tances équivalant à faute lourde, fait un faux énoncé ou
une omission dans une déclaration, une demande, un
2021-2022 62 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
statement or omission in a return, application, form, cer-
tificate, statement, invoice or answer (each of which is in
this section referred to as a “return”) is liable to a penalty
of the greater of $500 and 25% of the total of
(a) if the false statement or omission is relevant to the
determination of an amount payable under this Act by
the person, the amount, if any, by which
(i) the amount payable
exceeds
(ii) the amount that would be payable by the per-
son if the amount payable were determined on the
basis of the information provided in the return, and
(b) if the false statement or omission is relevant to the
determination of an amount that may be obtained un-
der this Act, the amount, if any, by which
(i) the amount that would be the amount payable to
the person if the amount were determined on the
basis of the information provided in the return
exceeds
(ii) the amount payable to the person.
formulaire, un certificat, un état, une facture ou une ré-
ponse — appelés « déclaration » au présent article —, ou
y participe, y consent ou y acquiesce, est passible d’une
pénalité de 500 $ ou, s’il est plus élevé, d’un montant égal
à 25 % du total des montants suivants :
a) si le faux énoncé ou l’omission a trait au calcul d’un
montant payable par la personne en application de la
présente loi, l’excédent éventuel de ce montant sur la
somme qui correspondrait à ce montant s’il était dé-
terminé d’après les renseignements indiqués dans la
déclaration;
b) si le faux énoncé ou l’omission a trait au calcul d’un
montant pouvant être obtenu en application de la pré-
sente loi, l’excédent éventuel du montant qui serait à
payer à la personne, s’il était déterminé d’après les
renseignements indiqués dans la déclaration, sur le
montant à payer à la personne.
DIVISION 9
Offences and Punishment
Offence for failure to file return or to comply with
demand or order
53 (1) Every person that fails to file or make a return as
and when required under this Act or that fails to comply
with an obligation under subsection 29(6) or (9) or sec-
tion 31, or an order made under section 58, is guilty of an
offence and, in addition to any penalty otherwise provid-
ed, is liable on summary conviction to a fine of not less
than $2,000 and not more than $40,000 or to imprison-
ment for a term not exceeding 12 months, or to both.
Saving
(2) A person that is convicted of an offence under sub-
section (1) for a failure to comply with a provision of this
Act is not liable to pay a penalty under this Act for the
same failure, unless a notice of assessment for the penal-
ty was issued before the information or complaint giving
rise to the conviction was laid or made.
SECTION 9
Infractions et peines
Défaut de produire une déclaration ou d’observer une
obligation ou une ordonnance
53 (1) Toute personne qui ne produit pas ou ne remplit
pas une déclaration dans le délai et selon les modalités
prévus par la présente loi ou qui ne remplit pas une obli-
gation prévue aux paragraphes 29(6) ou (9) ou à l’article
31 ou encore qui contrevient à une ordonnance rendue en
application de l’article 58 commet une infraction et, en
plus de toute pénalité prévue par ailleurs, est passible,
sur déclaration de culpabilité par procédure sommaire,
d’une amende minimale de 2 000 $ et maximale de
40 000 $ et d’un emprisonnement maximal de douze mois
ou de l’une de ces peines.
Réserve
(2) La personne déclarée coupable d’une infraction pré-
vue au paragraphe (1) n’est passible d’une pénalité pré-
vue à la présente loi relativement aux mêmes faits que si
un avis de cotisation concernant la pénalité a été envoyé
avant que la dénonciation ou la plainte qui a donné lieu à
la déclaration de culpabilité n’ait été déposée ou faite.
2021-2022 63 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Offences for false or deceptive statement
54 (1) Every person commits an offence that
(a) makes, or participates in, assents to or acquiesces
in the making of, a false or deceptive statement in a
return, application, certificate, statement, document,
record or answer filed or made as required under this
Act;
(b) for the purposes of evading payment of any
amount payable under this Act, or obtaining the pay-
ment of an amount under this Act to which the person
is not entitled,
(i) destroys, alters, mutilates, conceals or otherwise
disposes of any records of a person, or
(ii) makes, or assents to or acquiesces in the mak-
ing of, a false or deceptive entry, or omits, or as-
sents to or acquiesces in the omission, to enter a
material particular in the records of a person;
(c) intentionally, in any manner, evades or attempts
to evade compliance with this Act or payment of an
amount payable under this Act;
(d) intentionally, in any manner, obtains or attempts
to obtain the payment of an amount under this Act to
which the person is not entitled; or
(e) conspires with any person to commit an offence
described in any of paragraphs (a) to (d).
Punishment
(2) Every person that commits an offence under subsec-
tion (1) is guilty of an offence punishable on summary
conviction and, in addition to any penalty otherwise pro-
vided, is liable to
(a) a fine of not less than 50%, and not more than
200%, of the amount payable that was sought to be
evaded, or of the payment sought, or, if the amount
that was sought to be evaded cannot be ascertained, a
fine of not less than $2,000 and not more than $40,000;
(b) imprisonment for a term not exceeding two years;
or
(c) both a fine referred to in paragraph (a) and im-
prisonment for a term not exceeding two years.
Déclarations fausses ou trompeuses
54 (1) Commet une infraction quiconque, selon le cas :
a) fait des déclarations fausses ou trompeuses, ou par-
ticipe ou consent à leur énonciation, dans une déclara-
tion, une demande, un certificat, un état, un docu-
ment, un registre ou une réponse produits ou faits en
application de la présente loi;
b) pour éluder le paiement d’une somme payable en
application de la présente loi ou pour obtenir le paie-
ment d’un montant qui serait à payer à la personne
sans qu’elle y ait droit aux termes de celle-ci :
(i) détruit, modifie, mutile ou cache les registres
d’une personne, ou en dispose autrement,
(ii) fait des inscriptions fausses ou trompeuses, ou
consent à leur accomplissement, ou omet d’inscrire
un détail important dans les registres d’une per-
sonne, ou consent à cette omission;
c) délibérément, de quelque manière que ce soit,
élude ou tente d’éluder l’observation de la présente loi
ou le paiement d’une somme payable en application de
celle-ci;
d) délibérément, de quelque manière que ce soit, ob-
tient ou tente d’obtenir un paiement qui serait à payer
à la personne sans qu’elle y ait droit aux termes de la
présente loi;
e) conspire avec une personne pour commettre l’une
des infractions prévues aux alinéas a) à d).
Peine
(2) Quiconque commet l’infraction prévue au paragraphe
(1) est coupable d’une infraction punissable sur déclara-
tion de culpabilité par procédure sommaire et, en plus de
toute pénalité prévue par ailleurs, est passible :
a) soit d’une amende au moins égale au montant re-
présentant 50 % de la somme payable qu’il a tenté
d’éluder, ou d’un paiement qu’il a cherché à obtenir,
sans dépasser le montant représentant 200 % de cette
somme ou de ce paiement, ou, si cette somme n’est
pas vérifiable, d’une amende minimale de 2 000 $ et
maximale de 40 000 $;
b) soit d’un emprisonnement maximal de deux ans;
c) soit de l’amende prévue à l’alinéa a) et d’un empri-
sonnement maximal de deux ans.
2021-2022 64 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Prosecution on indictment
(3) Every person that is charged with an offence de-
scribed in subsection (1) may, at the election of the Attor-
ney General of Canada, be prosecuted on indictment and,
if convicted, is, in addition to any penalty otherwise pro-
vided, liable to
(a) a fine of not less than 100%, and not more than
200%, of the amount payable that was sought to be
evaded, or of the payment sought, or, if the amount
that was sought to be evaded cannot be ascertained, a
fine of not less than $5,000 and not more
than $100,000;
(b) imprisonment for a term not exceeding five years;
or
(c) both a fine referred to in paragraph (a) and im-
prisonment for a term not exceeding five years.
Penalty on conviction
(4) A person that is convicted of an offence under this
section is not liable to pay a penalty imposed under this
Act for the same evasion or attempt unless a notice of as-
sessment for that penalty was issued before the informa-
tion or complaint giving rise to the conviction was laid or
made.
Poursuite par voie de mise en accusation
(3) Toute personne accusée de l’infraction prévue au pa-
ragraphe (1) peut, au choix du procureur général du
Canada, être poursuivie par voie de mise en accusation
et, si elle est déclarée coupable, encourt, outre toute pé-
nalité prévue par ailleurs :
a) soit une amende minimale de 100 % et maximale de
200 % de la somme payable qu’elle a tenté d’éluder ou
du remboursement ou autre paiement qu’elle a cher-
ché à obtenir ou, si le montant n’est pas vérifiable, une
amende minimale de 5 000 $ et maximale de 100 000 $;
b) soit d’un emprisonnement maximal de cinq ans;
c) soit de l’amende prévue à l’alinéa a) et d’un empri-
sonnement maximal de cinq ans.
Stay of appeal
(5) If, in any appeal under this Act, substantially the
same facts are at issue as those that are at issue in a pros-
ecution under this section, the Minister may file a stay of
proceedings with the Tax Court of Canada and, upon that
filing, the proceedings before the Tax Court of Canada
are stayed pending a final determination of the outcome
of the prosecution.
Definition of confidential information
55 (1) In this section, confidential information has the
same meaning as in subsection 32(1).
Offence — confidential information
(2) A person is guilty of an offence and liable on summa-
ry conviction to a fine not exceeding $5,000 or to impris-
onment for a term not exceeding 12 months, or to both, if
that person
(a) contravenes subsection 32(2); or
(b) knowingly contravenes an order made under sub-
section 32(12).
Pénalité sur déclaration de culpabilité
(4) La personne déclarée coupable d’une infraction visée
au présent article n’est passible d’une pénalité prévue à la
présente loi pour la même évasion ou la même tentative
d’évasion que si un avis de cotisation pour cette pénalité
a été envoyé avant que la dénonciation ou la plainte qui a
donné lieu à la déclaration de culpabilité ait été déposée
ou faite.
Suspension d’appel
(5) Le ministre peut demander la suspension d’un appel
interjeté en application de la présente loi devant la Cour
canadienne de l’impôt lorsque les faits qui y sont débat-
tus sont pour la plupart les mêmes que ceux qui font l’ob-
jet de poursuites entamées en vertu du présent article.
Dès lors, l’appel est suspendu en attendant le résultat des
poursuites.
Définition de renseignement confidentiel
55 (1) Au présent article, renseignement confidentiel
s’entend au sens du paragraphe 32(1).
Communication non autorisée de renseignements
(2) Commet une infraction et encourt, sur déclaration de
culpabilité par procédure sommaire, une amende maxi-
male de 5 000 $ et un emprisonnement maximal de douze
mois, ou l’une de ces peines, quiconque, selon le cas :
a) contrevient au paragraphe 32(2);
b) contrevient sciemment à une ordonnance rendue
en application du paragraphe 32(12).
2021-2022 65 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Offence — confidential information
(3) Every person to whom confidential information has
been provided for a particular purpose under subsection
32(6) and that for any other purpose knowingly uses, pro-
vides to any person, allows the provision to any person
of, or allows any person access to, that information is
guilty of an offence and liable on summary conviction to
a fine not exceeding $5,000 or to imprisonment for a
term not exceeding 12 months, or to both.
Failure to pay tax
56 Every person that intentionally fails to pay an
amount of tax as and when required under this Act is
guilty of an offence punishable on summary conviction
and liable, in addition to any penalty or interest other-
wise provided, to
(a) a fine not exceeding the aggregate of $1,000 and an
amount equal to 20% of the amount of tax that should
have been paid;
(b) imprisonment for a term not exceeding six
months; or
(c) both a fine referred to in paragraph (a) and im-
prisonment for a term not exceeding six months.
General offence
57 Every person that fails to comply with any provision
of this Act for which no other offence is specified in this
Act is guilty of an offence punishable on summary con-
viction and liable to a fine of not more than $100,000 or
to imprisonment for a term of not more than 12 months,
or to both.
Communication non autorisée de renseignements
(3) Toute personne à qui un renseignement confidentiel
a été fourni à une fin précise en conformité avec le para-
graphe 32(6) et qui, sciemment, utilise ce renseignement,
le fournit ou en permet la fourniture ou l’accès à une
autre fin commet une infraction et encourt, sur déclara-
tion de culpabilité par procédure sommaire, une amende
maximale de 5 000 $ et un emprisonnement maximal de
douze mois, ou l’une de ces peines.
Défaut de payer
56 Quiconque omet délibérément de payer une taxe
dans le délai et selon les modalités prévus par la présente
loi commet une infraction punissable sur déclaration de
culpabilité par procédure sommaire et, en plus de toute
pénalité ou tous intérêts prévus par ailleurs, est passible :
a) soit d’une amende ne dépassant pas la somme de
1 000 $ et du montant représentant 20 % de la taxe qui
aurait dû être payée;
b) soit d’un emprisonnement maximal de six mois;
c) soit de l’amende prévue à l’alinéa a) et d’un empri-
sonnement maximal de six mois.
Compliance orders
58 If a person is convicted by a court of an offence for a
failure to comply with a provision of this Act, the court
may make any order that it deems appropriate to enforce
compliance with the provision.
Officers of corporations, etc.
59 If a person other than an individual commits an of-
fence under this Act, every officer, director or representa-
tive of the person that directed, authorized, assented to,
acquiesced in or participated in the commission of the of-
fence is a party to and guilty of the offence and liable on
conviction to the punishment provided for the offence,
whether or not the person has been prosecuted or con-
victed.
Infraction générale
57 Quiconque ne se conforme pas à une disposition de la
présente loi pour laquelle aucune autre infraction n’est
prévue par la présente loi commet une infraction et en-
court, sur déclaration de culpabilité par procédure som-
maire, une amende maximale de 100 000 $ et un empri-
sonnement maximal de douze mois, ou l’une de ces
peines.
Ordonnance d’exécution
58 Le tribunal qui déclare une personne coupable d’une
infraction à la présente loi peut rendre toute ordonnance
qu’il juge appropriée pour qu’il soit remédié au défaut vi-
sé par l’infraction.
Cadres de personnes morales
59 En cas de perpétration par une personne, autre qu’un
particulier, d’une infraction prévue par la présente loi,
ceux de ses dirigeants, administrateurs ou représentants
qui l’ont ordonnée ou autorisée, ou qui y ont consenti ou
participé, sont considérés comme des coauteurs de l’in-
fraction et sont passibles, sur déclaration de culpabilité,
de la peine prévue, que la personne ait été ou non pour-
suivie ou déclarée coupable.
2021-2022 66 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
No power to decrease punishment
60 Despite the Criminal Code or any other law, the court
has, in any prosecution or proceeding under this Act, nei-
ther the power to impose less than the minimum fine
fixed under this Act nor the power to suspend sentence.
Information or complaint
61 (1) An information or complaint under this Act may
be laid or made by any officer of the Canada Revenue
Agency, by a member of the Royal Canadian Mounted
Police or by any person authorized to do so by the Minis-
ter and, if an information or complaint purports to have
been laid or made under this Act, it is deemed to have
been laid or made by a person so authorized by the Min-
ister and must not be called into question for lack of au-
thority of the informant or complainant, except by the
Minister or a person acting for the Minister or for Her
Majesty in right of Canada.
Two or more offences
(2) An information or complaint in respect of an offence
under this Act may be for one or more offences, and no
information, complaint, warrant, conviction or other pro-
ceeding in a prosecution under this Act is objectionable
or insufficient by reason of the fact that it relates to two
or more offences.
Pouvoir de diminuer les peines
60 Malgré le Code criminel ou toute autre règle de droit,
le tribunal ne peut, dans une poursuite ou une procédure
en application de la présente loi, ni imposer moins que
l’amende minimale que fixe la présente loi ni suspendre
une sentence.
Dénonciation ou plainte
61 (1) Toute dénonciation ou plainte en application de
la présente loi peut être déposée ou faite par tout préposé
de l’Agence du revenu du Canada, par un membre de la
Gendarmerie royale du Canada ou par toute personne
qui y est autorisée par le ministre. La dénonciation ou
plainte déposée ou faite en application de la présente loi
est réputée l’avoir été par une personne qui y est autori-
sée par le ministre, et seul le ministre ou une personne
agissant en son nom ou au nom de Sa Majesté du chef du
Canada peut la mettre en doute pour défaut de compé-
tence du dénonciateur ou plaignant.
Deux infractions ou plus
(2) La dénonciation ou plainte à l’égard d’une infraction
à la présente loi peut viser une ou plusieurs infractions.
Aucune dénonciation, aucune plainte, aucun mandat, au-
cune déclaration de culpabilité ou autre procédure dans
une poursuite intentée en application de la présente loi
n’est susceptible d’opposition ou n’est insuffisant du fait
que deux infractions ou plus sont visées.
District judiciaire
(3) La dénonciation ou plainte à l’égard d’une infraction
à la présente loi peut être entendue, jugée ou décidée par
tout tribunal compétent du district judiciaire où l’accusé
réside, exerce une activité commerciale ou est trouvé, ap-
préhendé ou détenu, bien que l’objet de la dénonciation
ou de la plainte n’y ait pas pris naissance.
Territorial jurisdiction
(3) An information or complaint in respect of an offence
under this Act may be heard, tried or determined by any
court having territorial jurisdiction where the accused is
resident, carrying on a commercial activity, found, appre-
hended or in custody, despite that the matter of the infor-
mation or complaint did not arise within that territorial
jurisdiction.
Limitation of prosecutions
(4) No proceeding by way of summary conviction in re-
spect of an offence under this Act may be instituted more
than five years after the day on which the subject matter
of the proceedings arose, unless the prosecutor and the
defendant agree that they may be instituted after the five
years.
Prescription des poursuites
(4) La poursuite visant une infraction à la présente loi
punissable sur déclaration de culpabilité par procédure
sommaire se prescrit par cinq ans à compter de sa perpé-
tration, à moins que le poursuivant et le défendeur ne
consentent au prolongement de ce délai.
DIVISION 10
Inspections
By whom
62 (1) A person authorized by the Minister to do so
may, at all reasonable times, for any purpose related to
SECTION 10
Inspections
Inspection
62 (1) Quiconque est autorisé par le ministre peut, à
toute heure convenable, pour l’application ou l’exécution
2021-2022 67 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
the administration or enforcement of this Act, inspect,
audit or examine the records, processes, property or
premises of a person that may be relevant in determining
the obligations of that or any other person under this Act,
or any amount to which that or any other person is enti-
tled under this Act and whether that person or any other
person is in compliance with this Act.
Powers of authorized person
(2) For the purposes of an inspection, audit or examina-
tion, the authorized person may
(a) enter any place in which the authorized person
reasonably believes the person keeps or should keep
records, carries on any activity to which this Act ap-
plies or does anything in relation to that activity; and
(b) require any individual to be present during the in-
spection, audit or examination and require that indi-
vidual to answer all proper questions and to give to
the authorized person all reasonable assistance.
de la présente loi, inspecter, vérifier ou examiner les re-
gistres, les procédés, les biens ou les locaux d’une per-
sonne permettant de déterminer ses obligations ou celles
de toute autre personne en application de la présente loi
ou le montant auquel cette personne ou toute autre per-
sonne a droit en application de la présente loi et de déter-
miner si cette personne ou toute autre personne agit en
conformité avec la présente loi.
Pouvoirs de la personne autorisée
(2) Afin d’effectuer une inspection, une vérification ou
un examen, la personne autorisée peut :
a) pénétrer dans tout lieu où elle croit, pour des mo-
tifs raisonnables, que la personne tient ou devrait te-
nir des registres, exerce une activité à laquelle s’ap-
plique la présente loi ou accomplit un acte relative-
ment à cette activité;
b) exiger de toute personne de l’accompagner pendant
l’inspection, la vérification ou l’examen, de répondre à
toutes les questions pertinentes et de lui prêter toute
l’assistance raisonnable.
Autorisation préalable
(3) Si le lieu visé à l’alinéa (2)a) est une maison d’habita-
tion, la personne autorisée ne peut y pénétrer sans la per-
mission de l’occupant, à moins d’y être autorisée par un
mandat décerné en vertu du paragraphe (4).
Prior authorization
(3) If any place referred to in paragraph (2)(a) is a
dwelling-house, the authorized person may not enter that
dwelling-house without the consent of the occupant, ex-
cept under the authority of a warrant issued under sub-
section (4).
Warrant to enter dwelling-house
(4) A judge may issue a warrant authorizing a person to
enter a dwelling-house subject to the conditions specified
in the warrant if, on ex parte application by the Minister,
a judge is satisfied by information on oath that
(a) there are reasonable grounds to believe that the
dwelling-house is a place referred to in para-
graph (2)(a);
(b) entry into the dwelling-house is necessary for any
purpose related to the administration or enforcement
of this Act; and
(c) entry into the dwelling-house has been, or there
are reasonable grounds to believe that entry will be,
refused.
Orders if entry not authorized
(5) If the judge is not satisfied that entry into the
dwelling-house is necessary for any purpose related to
the administration or enforcement of this Act, the judge
may, to the extent that access was or may be expected to
Mandat
(4) Sur requête ex parte du ministre, le juge saisi peut
décerner un mandat qui autorise une personne à péné-
trer dans une maison d’habitation aux conditions préci-
sées dans le mandat, s’il est convaincu, sur la foi d’une
dénonciation faite sous serment, que les éléments sui-
vants sont réunis :
a) il existe des motifs raisonnables de croire que la
maison d’habitation est un lieu visé à l’alinéa (2)a);
b) il est nécessaire d’y pénétrer pour l’application ou
l’exécution de la présente loi;
c) un refus d’y pénétrer a été opposé, ou il est raison-
nable de croire qu’un tel refus sera opposé.
Ordonnance en cas de refus
(5) Dans la mesure où un refus de pénétrer dans une
maison d’habitation a été opposé ou pourrait l’être et où
des registres ou biens sont gardés dans la maison d’habi-
tation ou pourraient l’être, le juge qui n’est pas convaincu
qu’il est nécessaire de pénétrer dans la maison
2021-2022 68 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
be refused and that a record or property is or may be ex-
pected to be kept in the dwelling-house,
(a) order the occupant of the dwelling-house to pro-
vide a person with reasonable access to any record or
property that is or should be kept in the dwelling-
house; and
(b) make any other order that is appropriate in the
circumstances to carry out the purposes of this Act.
Definition of dwelling-house
(6) In this section, dwelling-house means the whole or
any part of a building or structure that is kept or occu-
pied as a permanent or temporary residence, and in-
cludes
(a) a building within the curtilage of a dwelling-house
that is connected to it by a doorway or by a covered
and enclosed passageway; and
(b) a unit that is designed to be mobile and to be used
as a permanent or temporary residence and that is be-
ing used as such a residence.
Compliance order
63 (1) On summary application by the Minister, a judge
may, despite section 58, order a person to provide any ac-
cess, assistance, information or record sought by the
Minister under section 31 or 62 if the judge is satisfied
that the person was required under section 31 or 62 to
provide the access, assistance, information or record and
did not do so.
Notice required
(2) An application under subsection (1) is not to be heard
before the end of five clear days from the day on which
the notice of application is served on the person against
which the order is sought.
Judge may impose conditions
(3) The judge making an order under subsection (1) may
impose any conditions in respect of the order that the
judge considers appropriate.
Contempt of court
(4) If a person fails or refuses to comply with an order, a
judge may find the person in contempt of court and the
person is subject to the processes and the punishments of
the court to which the judge is appointed.
Appeal
(5) An order by a judge under subsection (1) may be ap-
pealed to a court having appellate jurisdiction over
d’habitation pour l’application ou l’exécution de la pré-
sente loi peut, à la fois :
a) ordonner à l’occupant de la maison d’habitation de
permettre à une personne d’avoir raisonnablement ac-
cès à tous registres ou biens qui y sont gardés ou de-
vraient l’être;
b) rendre toute autre ordonnance indiquée en l’espèce
pour l’application de la présente loi.
Définition de maison d’habitation
(6) Au présent article, maison d’habitation s’entend de
tout ou loi d’un bâtiment ou d’une construction tenu ou
occupé comme résidence permanente ou temporaire, y
compris :
a) un bâtiment qui se trouve dans la même enceinte
qu’une maison d’habitation et qui y est relié par une
baie de porte ou par un passage couvert et clos;
b) une unité conçue pour être mobile et pour être uti-
lisée comme résidence permanente ou temporaire et
qui est ainsi utilisée.
Ordonnance
63 (1) Sur demande sommaire du ministre, un juge
peut, malgré l’article 58, ordonner à une personne de
fournir l’accès, l’aide, les renseignements ou les registres
que le ministre cherche à obtenir en vertu des articles 31
ou 62 s’il est convaincu que la personne n’a pas fourni
l’accès, l’aide, les renseignements ou les registres bien
qu’elle en soit tenue par les articles 31 ou 62.
Avis
(2) La demande n’est entendue qu’une fois écoulés cinq
jours francs après signification d’un avis de la demande à
la personne à l’égard de laquelle l’ordonnance est deman-
dée.
Conditions
(3) Le juge peut imposer, à l’égard de l’ordonnance, les
conditions qu’il estime indiquées.
Outrage
(4) Quiconque refuse ou fait défaut de se conformer à
l’ordonnance peut être reconnu coupable d’outrage au
tribunal; il est alors sujet aux procédures et sanctions du
tribunal l’ayant ainsi reconnu coupable.
Appel
(5) L’ordonnance visée au paragraphe (1) est susceptible
d’appel devant le tribunal ayant compétence pour
2021-2022 69 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
decisions of the court to which the judge is appointed. An
appeal does not suspend the execution of the order un-
less it is so ordered by a judge of the court to which the
appeal is made.
Search warrant
64 (1) A judge may, on ex parte application by the Min-
ister, issue a warrant authorizing any person named in
the warrant to enter and search any building, receptacle
or place for any record or thing that may afford evidence
of the commission of an offence under this Act and to
seize the record or thing and, as soon as is practicable,
bring it before, or make a report in respect of the record
or thing to, the judge or, if that judge is unable to act, an-
other judge of the same court, to be dealt with by the
judge in accordance with this section.
entendre les appels des décisions du tribunal ayant rendu
l’ordonnance. Toutefois, l’appel n’a pas pour effet de sus-
pendre l’exécution de l’ordonnance, sauf ordonnance
contraire d’un juge du tribunal saisi de l’appel.
Requête pour mandat de perquisition
64 (1) Sur requête ex parte du ministre, un juge peut
décerner un mandat qui autorise toute personne qui y est
nommée à pénétrer dans tout bâtiment, contenant ou en-
droit et y perquisitionner pour y chercher des registres
ou choses qui peuvent constituer des éléments de preuve
de la perpétration d’une infraction à la présente loi, à sai-
sir ces registres ou choses et, dès que matériellement
possible, soit à les apporter au juge ou, en cas d’incapaci-
té d’agir de celui-ci, à un autre juge du même tribunal,
soit à lui en faire rapport, pour que le juge en dispose
conformément au présent article.
Preuve sous serment
(2) La requête doit être appuyée par une dénonciation
sous serment qui expose les faits au soutien de la requête.
Evidence on oath
(2) An application under subsection (1) must be support-
ed by information on oath establishing the facts on which
the application is based.
Issue of warrant
(3) A judge may issue a warrant referred to in subsection
(1) if the judge is satisfied that there are reasonable
grounds to believe that
(a) an offence under this Act has been committed;
(b) a record or thing that may afford evidence of the
commission of the offence is likely to be found; and
(c) the building, receptacle or place specified in the
application is likely to contain a record or thing re-
ferred to in paragraph (b).
Mandat décerné
(3) Le juge saisi de la requête peut décerner le mandat
s’il est convaincu qu’il existe des motifs raisonnables de
croire ce qui suit :
a) une infraction prévue par la présente loi a été com-
mise;
b) des registres ou choses qui peuvent constituer des
éléments de preuve de la perpétration de l’infraction
seront vraisemblablement trouvés;
c) le bâtiment, contenant ou endroit précisé dans la
requête contient vraisemblablement de tels registres
ou choses visés à l’alinéa b).
Contenu du mandat
(4) Le mandat doit indiquer l’infraction pour laquelle il
est décerné, dans quel bâtiment, contenant ou endroit
perquisitionner ainsi que la personne accusée d’avoir
commis l’infraction. Il doit donner suffisamment de pré-
cisions sur les registres ou choses à chercher et à saisir.
Contents of warrant
(4) A warrant issued under subsection (1) must refer to
the offence for which it is issued, identify the building,
receptacle or place to be searched and the person that is
alleged to have committed the offence, and it must be
reasonably specific as to any record or thing to be
searched for and seized.
Seizure
(5) Any person that executes a warrant issued under sub-
section (1) may seize, in addition to the record or thing
referred to in that subsection, any other record or thing
that the person believes on reasonable grounds affords
evidence of the commission of an offence under this Act
and must, as soon as is practicable, bring the record or
Saisie
(5) Quiconque exécute le mandat peut saisir, outre les
registres ou choses mentionnés au paragraphe (1), tous
autres registres ou choses qu’il croit, pour des motifs rai-
sonnables, constituer des éléments de preuve de la per-
pétration d’une infraction à la présente loi. Il doit, dès
que matériellement possible, soit apporter ces registres
2021-2022 70 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
thing before, or make a report in respect of the record or
thing, the judge that issued the warrant or, if that judge is
unable to act, another judge of the same court, to be dealt
with by the judge in accordance with this section.
Retention
(6) Subject to subsection (7), if any record or thing seized
under subsection (1) or (5) is brought before a judge or a
report in respect of the record or thing is made to a
judge, the judge must, unless the Minister waives reten-
tion, order that it be retained by the Minister, that must
take reasonable care to ensure that it is preserved until
the conclusion of any investigation into the offence in re-
lation to which the record or thing was seized or until it is
required to be produced for the purposes of a criminal
proceeding.
Return of records or things seized
(7) If any record or thing seized under subsection (1) or
(5) is brought before a judge or a report in respect of the
record or thing is made to a judge, the judge may, on the
judge’s own motion or on summary application by a per-
son with an interest in the record or thing on three clear
days notice of application to the Deputy Attorney General
of Canada, order that the record or thing be returned to
the person from which it was seized or the person that is
otherwise legally entitled to the record or thing, if the
judge is satisfied that the record or thing
(a) will not be required for an investigation or a crimi-
nal proceeding; or
(b) was not seized in accordance with the warrant or
this section.
Access and copies
(8) The person from which any record or thing is seized
under this section is entitled, at all reasonable times and
subject to any reasonable conditions that may be im-
posed by the Minister, to inspect the record or thing and,
in the case of a document, to obtain one copy of the
record at the expense of the Minister.
Definition of foreign-based information or record
65 (1) For the purposes of this section, foreign-based
information or record means any information or record
that is available or located outside Canada and that may
be relevant to the administration or enforcement of this
Act.
Requirement to provide foreign-based information
(2) Despite any other provision of this Act, the Minister
may, by a notice served or sent in accordance with
ou choses au juge qui a décerné le mandat ou, en cas d’in-
capacité d’agir de celui-ci, à un autre juge du même tribu-
nal, soit lui en faire rapport, pour que le juge en dispose
conformément au présent article.
Rétention
(6) Sous réserve du paragraphe (7), lorsque des registres
ou choses saisis en vertu des paragraphes (1) ou (5) sont
apportés à un juge ou qu’il en est fait rapport à un juge,
ce juge ordonne que le ministre les retienne sauf si celui-
ci y renonce. Le ministre qui retient des registres ou
choses doit en prendre raisonnablement soin pour s’as-
surer de leur conservation jusqu’à la fin de toute enquête
sur l’infraction en rapport avec laquelle les registres ou
choses ont été saisis ou jusqu’à ce que leur production
soit exigée aux fins d’une procédure criminelle.
Restitution des registres ou choses saisis
(7) Le juge à qui des registres ou choses saisis en vertu
des paragraphes (1) ou (5) sont apportés ou à qui il en est
fait rapport peut, d’office ou sur requête sommaire d’une
personne ayant un droit dans ces registres ou choses avec
avis au sous-procureur général du Canada trois jours
francs avant qu’il y soit procédé, ordonner que ces re-
gistres ou choses soient restitués à la personne à qui ils
ont été saisis ou à la personne qui y a légalement droit
par ailleurs, s’il est convaincu que ces registres ou
choses :
a) soit ne seront pas nécessaires à une enquête ou à
une procédure criminelle;
b) soit n’ont pas été saisis conformément au mandat
ou au présent article.
Accès aux registres et copies
(8) La personne à qui des registres ou choses sont saisis
en application du présent article a le droit, en tout temps
raisonnable et aux conditions raisonnables que peut im-
poser le ministre, d’examiner ces registres ou choses et
d’obtenir une copie unique des registres aux frais du mi-
nistre.
Définition de renseignement ou registre étranger
65 (1) Au présent article, renseignement ou registre
étranger s’entend d’un renseignement accessible, ou
d’un registre situé, en dehors du Canada, qui peut être
pris en compte pour l’application ou l’exécution de la
présente loi.
Obligation de présenter des renseignements et
registres étrangers
(2) Malgré les autres dispositions de la présente loi, le
ministre peut, par avis signifié ou envoyé conformément
2021-2022 71 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
subsection (4), require a person resident in Canada or a
non-resident person that carries on business in Canada
to provide any foreign-based information or record.
Notice
(3) A notice referred to in subsection (2) must set out
(a) a reasonable period of not less than 90 days for the
provision of the information or record;
(b) a description of the information or record being
sought; and
(c) the consequences under subsection (9) to the per-
son of the failure to provide the information or record
being sought within the period set out in the notice.
Notice
(4) A notice referred to in subsection (2) may be
(a) served personally;
(b) sent by confirmed delivery service; or
(c) sent electronically to a bank or credit union that
has provided written consent to receive notices under
subsection (2) electronically.
au paragraphe (4), mettre en demeure une personne rési-
dant au Canada ou une personne n’y résidant pas mais y
exploitant une entreprise de produire des renseigne-
ments ou registres étrangers.
Contenu de l’avis
(3) L’avis doit :
a) indiquer le délai raisonnable, d’au moins quatre-
vingt-dix jours, dans lequel les renseignements ou re-
gistres étrangers doivent être produits;
b) décrire les renseignements ou registres étrangers
recherchés;
c) préciser les conséquences prévues au paragraphe
(9) du non-respect de la mise en demeure.
Avis
(4) L’avis visé au paragraphe (2) peut être :
a) soit signifié à personne;
b) soit envoyé par service de messagerie;
c) soit envoyé par voie électronique à une banque ou
une caisse de crédit qui a consenti par écrit à recevoir
les avis prévus au paragraphe (2) par voie électro-
nique.
Révision par un juge
(5) La personne à qui l’avis est signifié ou envoyé peut
contester, par requête à un juge, la mise en demeure dans
les quatre-vingt-dix jours suivant la date de signification
ou d’envoi.
Pouvoir de révision
(6) À l’audition de la requête, le juge peut confirmer la
mise en demeure, la modifier de la façon qu’il estime in-
diquée dans les circonstances ou la déclarer sans effet s’il
est convaincu qu’elle est déraisonnable.
Review of foreign information requirement
(5) If a person is served or sent a notice of a requirement
under subsection (2), the person may, within 90 days af-
ter the day on which the notice was served or sent, apply
to a judge for a review of the requirement.
Powers on review
(6) On hearing an application under subsection (5) in re-
spect of a requirement, a judge may
(a) confirm the requirement;
(b) vary the requirement if the judge is satisfied that it
is appropriate in the circumstances; or
(c) set aside the requirement if the judge is satisfied
that it is unreasonable.
Related person
(7) For the purposes of subsection (6), a requirement to
provide information or a record is not to be considered to
be unreasonable because the information or record is un-
der the control of, or available to, a non-resident person
that is not controlled by the person on which the notice
of the requirement under subsection (2) is served, or to
Personne liée
(7) Pour l’application du paragraphe (6), la mise en de-
meure de produire des renseignements ou registres
étrangers qui sont accessibles à une personne non rési-
dante ou situés chez une personne non résidante qui
n’est pas contrôlée par la personne à qui l’avis est signifié
ou envoyé, ou qui sont sous la garde de cette personne
2021-2022 72 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
which that notice is sent, if that person is related to the
non-resident person.
Time during consideration not to count
(8) The period between the day an application for the re-
view of a requirement is made under subsection (5) and
the day the review is decided must not be counted in the
computation of
(a) the period set out in the notice of the requirement;
and
(b) the period within which an assessment may be
made under section 33.
Consequence of failure
(9) If a person fails to comply substantially with a notice
served or sent under subsection (2) and if the notice is
not set aside under subsection (6), any court having juris-
diction in a civil proceeding relating to the administra-
tion or enforcement of this Act must, on motion of the
Minister, prohibit the introduction by that person of any
foreign-based information or record covered by that no-
tice.
Copies
66 If any record is seized, inspected, audited, examined
or provided under any of sections 22, 31 and 62 to 64, the
person by whom it is seized, inspected, audited or exam-
ined or to whom it is provided or any officer of the
Canada Revenue Agency may make or cause to be made
one or more copies of it and, in the case of an electronic
record, make or cause to be made a print-out of the elec-
tronic record, and any record purporting to be certified
by the Minister or an authorized person to be a copy of
the record, or to be a print-out of an electronic record,
made under this section is evidence of the nature and
content of the original record and has the same probative
force as the original record would have if it were proven
in the ordinary way.
non résidante, n’est pas de ce seul fait déraisonnable si
les deux personnes sont liées.
Suspension du délai
(8) Le délai qui court entre le jour où une requête est
présentée en vertu du paragraphe (5) et le jour où il est
décidé de la requête ne compte pas dans le calcul :
a) du délai indiqué dans l’avis correspondant à la mise
en demeure qui a donné lieu à la requête;
b) du délai dans lequel une cotisation peut être établie
en vertu de l’article 33.
Compliance
67 Every person must, unless the person is unable to do
so, do everything the person is required to do by or in ac-
cordance with any of sections 31 and 62 to 66 and no per-
son is to, physically or otherwise, do or attempt to do any
of the following:
(a) interfere with, hinder or molest any officer doing
anything the officer is authorized to do under this Act;
or
(b) prevent any officer from doing anything the officer
is authorized to do under this Act.
Conséquence du défaut
(9) Tout tribunal saisi d’une affaire civile portant sur
l’application ou l’exécution de la présente loi doit, sur re-
quête du ministre, refuser le dépôt en preuve par une
personne de tout renseignement ou registre étranger visé
par une mise en demeure qui n’est pas déclarée sans effet
dans le cas où la personne ne produit pas la totalité ou la
presque totalité des renseignements et registres étran-
gers visés par la mise en demeure.
Copies
66 Lorsque, en vertu de l’un des articles 22, 31 et 62 à 64,
des registres font l’objet d’une opération de saisie, d’ins-
pection, de vérification ou d’examen ou sont produits, la
personne qui effectue cette opération ou auprès de qui
est faite cette production ou tout fonctionnaire de
l’Agence du revenu du Canada peut en faire ou en faire
faire des copies et, s’il s’agit de registres électroniques, les
imprimer ou les faire imprimer. Les registres présentés
comme registres que le ministre ou une personne autori-
sée atteste être des copies des registres, ou des imprimés
de registres électroniques, faits conformément au présent
article font preuve de la nature et du contenu des re-
gistres originaux et ont la même force probante qu’au-
raient ceux-ci si leur authenticité était prouvée de la fa-
çon usuelle.
Observation
67 Quiconque est tenu par les articles 31 et 62 à 66 de
faire quelque chose doit le faire, sauf impossibilité. Nul
ne peut, physiquement ou autrement, entraver, rudoyer
ou contrecarrer, ou tenter d’entraver, de rudoyer ou de
contrecarrer, un préposé qui fait une chose qu’il est auto-
risé à faire en application de la présente loi, ni empêcher
ou tenter d’empêcher un préposé de faire une telle chose.
2021-2022 73 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
DIVISION 11
Collection
Definitions
68 (1) The following definitions apply in this section.
action means an action to collect a tax debt of a person
and includes a proceeding in a court and anything done
by the Minister under any of sections 72 to 77. (action)
legal representative of a person means a trustee in
bankruptcy, an assignee, a liquidator, a curator, a receiv-
er of any kind, a trustee, an heir, an administrator, an ex-
ecutor, a liquidator of a succession, a committee, or any
other like person, administering, winding up, controlling
or otherwise dealing in a representative or fiduciary ca-
pacity with any property, business, commercial activity
or estate or succession that belongs or belonged to, or
that is or was held for the benefit of, the person or the
person’s estate or succession. (représentant légal)
tax debt means any amount payable by a person under
this Act. (dette fiscale)
Debts to Her Majesty
(2) A tax debt is a debt due to Her Majesty in right of
Canada and is recoverable as such in the Federal Court or
any other court of competent jurisdiction or in any other
manner provided under this Act.
Court proceedings
(3) The Minister may not commence a proceeding in a
court to collect a tax debt of a person in respect of an
amount that may be assessed under this Act, unless when
the proceeding is commenced the person has been or
may be assessed for that amount.
No actions after limitation period
(4) The Minister may not commence an action to collect
a tax debt after the end of the limitation period for the
collection of the tax debt.
Limitation period
(5) The limitation period for the collection of a tax debt
of a person
(a) begins
SECTION 11
Recouvrement
Définitions
68 (1) Les définitions qui suivent s’appliquent au pré-
sent article.
action Toute action en recouvrement d’une dette fiscale
d’une personne, y compris les procédures judiciaires et
toute mesure prise par le ministre en vertu de l’un des ar-
ticles 72 à 77. (action)
dette fiscale Toute somme payable par une personne en
application de la présente loi. (tax debt)
représentant légal Syndic de faillite, cessionnaire, li-
quidateur, curateur, séquestre de tout genre, fiduciaire,
héritier, administrateur du bien d’autrui, liquidateur de
succession, exécuteur testamentaire, curateur ou autre
personne semblable, qui administre, liquide ou contrôle,
en qualité de représentant ou de fiduciaire, les biens, les
affaires, les activités commerciales ou les actifs qui ap-
partiennent ou appartenaient à une personne ou à sa suc-
cession, ou qui sont ou étaient détenus pour leur compte,
ou qui, en cette qualité, s’en occupe de toute autre façon.
(legal representative)
Créances de Sa Majesté
(2) Toute dette fiscale est une créance de Sa Majesté du
chef du Canada et est recouvrable à ce titre devant la
Cour fédérale ou devant tout autre tribunal compétent ou
de toute autre manière prévue par la présente loi.
Procédures judiciaires
(3) Une procédure judiciaire en vue du recouvrement de
la dette fiscale d’une personne à l’égard d’une somme qui
peut faire l’objet d’une cotisation en application de la
présente loi ne peut être intentée par le ministre que si,
au moment où la procédure est intentée, la personne a
fait l’objet d’une cotisation pour cette somme ou peut en
faire l’objet.
Prescription
(4) Une action en recouvrement d’une dette fiscale ne
peut être entreprise par le ministre après l’expiration du
délai de prescription pour le recouvrement de la dette fis-
cale.
Délai de prescription
(5) Le délai de prescription pour le recouvrement d’une
dette fiscale d’une personne :
a) commence à courir :
2021-2022 74 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(i) if a notice of assessment in respect of the tax
debt, or a notice referred to in subsection 78(1) in
respect of the tax debt, is sent to or served on the
person, on the last day on which one of those no-
tices is sent or served, and
(ii) if no notice referred to in subparagraph (i) in
respect of the tax debt was sent or served, on the
earliest day on which the Minister can commence
an action to collect that tax debt; and
(b) ends, subject to subsection (9), on the day that is
10 years after the day on which it begins.
Limitation period restarted
(6) The limitation period described in subsection (5) for
the collection of a tax debt of a person restarts (and ends,
subject to subsection (9), on the day that is 10 years after
the day on which it restarts) on any day, before it would
otherwise end, on which
(a) the person acknowledges the tax debt in accor-
dance with subsection (7);
(b) the Minister commences an action to collect the
tax debt; or
(c) the Minister assesses, under this Act, another per-
son in respect of the tax debt.
(i) si un avis de cotisation, ou un avis visé au para-
graphe 78(1), concernant la dette fiscale est envoyé
ou signifié à la personne, le dernier en date des
jours où l’un de ces avis est envoyé ou signifié,
(ii) si aucun des avis visés au sous-alinéa (i) n’a été
envoyé ou signifié, le premier jour où le ministre
peut entreprendre une action en recouvrement de
la dette fiscale;
b) prend fin, sous réserve du paragraphe (9), dix ans
après le jour de son début.
Acknowledgement of tax debts
(7) A person acknowledges a tax debt if the person
(a) promises, in writing, to pay the tax debt;
(b) makes a written acknowledgement of the tax debt,
whether or not a promise to pay can be inferred from
the acknowledgement and whether or not it contains a
refusal to pay; or
(c) makes a payment, including a purported payment
by way of a negotiable instrument that is dishonoured,
on account of the tax debt.
Agent or mandatary or legal representative
(8) For the purposes of this section, an acknowledge-
ment made by a person’s agent or mandatary or legal
representative has the same effect as if it were made by
the person.
Reprise du délai de prescription
(6) Le délai de prescription pour le recouvrement d’une
dette fiscale d’une personne recommence à courir — et
prend fin, sous réserve du paragraphe (9), dix ans plus
tard — le jour, antérieur à celui où il prendrait fin par
ailleurs, où, selon le cas :
a) la personne reconnaît la dette fiscale conformé-
ment au paragraphe (7);
b) le ministre entreprend une action en recouvrement
de la dette fiscale;
c) le ministre établit, en application de la présente loi,
une cotisation à l’égard d’une autre personne relative-
ment à la dette fiscale.
Reconnaissance de dette fiscale
(7) Se reconnaît débitrice d’une dette fiscale la personne
qui, selon le cas :
a) promet, par écrit, de régler la dette fiscale;
b) reconnaît la dette fiscale par écrit, que cette recon-
naissance soit ou non rédigée en des termes qui per-
mettent de déduire une promesse de règlement et ren-
ferme ou non un refus de payer;
c) fait un paiement au titre de la dette fiscale, y com-
pris un prétendu paiement fait au moyen d’un titre né-
gociable qui fait l’objet d’un refus de paiement.
Mandataire ou représentant légal
(8) Pour l’application du présent article, la reconnais-
sance faite par le mandataire ou le représentant légal
d’une personne a la même valeur que si elle était faite par
celle-ci.
2021-2022 75 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Extension of limitation period
(9) In computing the day on which a limitation period
ends, there must be added the number of days on which
one or more of the following is the case:
(a) the Minister has postponed collection action
against the person under subsection (12) in respect of
the tax debt;
(b) the Minister has accepted and holds security in
lieu of payment of the tax debt;
(c) if the person was resident in Canada on the appli-
cable date described in paragraph (5)(a) in respect of
the tax debt, the person is non-resident;
(d) the Minister may not, because of any of subsec-
tions 70(2) to (5), take any of the actions described in
subsection 70(1) in respect of the tax debt; and
(e) an action that the Minister may otherwise take in
respect of the tax debt is restricted or not permitted
under any provision of the Bankruptcy and Insolven-
cy Act, of the Companies’ Creditors Arrangement Act
or of the Farm Debt Mediation Act.
Assessment before collection
(10) The Minister may not take any collection action un-
der sections 72 to 77 in respect of any amount payable by
a person that may be assessed under this Act, other than
interest under section 23, unless the amount has been as-
sessed.
Payment of remainder
(11) If the Minister sends a notice of assessment to a
person, any amount assessed then remaining unpaid is
payable forthwith by the person to the Receiver General.
Minister may postpone collection
(12) The Minister may, subject to any terms and condi-
tions that the Minister may stipulate, postpone collection
action against a person in respect of all or any part of any
amount assessed that is the subject of a dispute between
the Minister and the person.
Interest on judgments
(13) If a judgment is obtained for any amount payable
under this Act, including a certificate registered under
section 72, the provisions of this Act by which interest is
payable for a failure to pay an amount apply, with any
modifications that the circumstances require, to the fail-
ure to pay the judgment debt, and the interest is recover-
able in like manner as the judgment debt.
Prorogation du délai de prescription
(9) Le nombre de jours où au moins un des faits ci-après
se vérifie prolonge d’autant la durée du délai de prescrip-
tion :
a) le ministre a reporté, en vertu du paragraphe (12),
les mesures de recouvrement concernant la dette fis-
cale;
b) le ministre a accepté et détient une garantie pour le
paiement de la dette fiscale;
c) la personne, qui résidait au Canada à la date appli-
cable visée à l’alinéa (5)a) relativement à la dette fis-
cale, est un non-résident;
d) en raison de l’un des paragraphes 70(2) à (5), le mi-
nistre n’est pas en mesure d’exercer les actions visées
au paragraphe 70(1) relativement à la dette fiscale;
e) l’une des actions que le ministre peut exercer par
ailleurs relativement à la dette fiscale est limitée ou in-
terdite en vertu d’une disposition de la Loi sur la
faillite et l’insolvabilité, de la Loi sur les arrange-
ments avec les créanciers des compagnies ou de la Loi
sur la médiation en matière d’endettement agricole.
Cotisation avant recouvrement
(10) Le ministre ne peut, outre exiger des intérêts en
vertu de l’article 23, prendre des mesures de recouvre-
ment en vertu des articles 72 à 77 relativement à une
somme susceptible de cotisation en application de la pré-
sente loi que si la somme a fait l’objet d’une cotisation.
Paiement du solde
(11) La partie impayée d’une cotisation visée par un avis
de cotisation est payable immédiatement au receveur gé-
néral.
Report des mesures de recouvrement
(12) Sous réserve des modalités qu’il établit, le ministre
peut reporter les mesures de recouvrement concernant
tout ou partie du montant d’une cotisation qui fait l’objet
d’un litige.
Intérêts à la suite de jugements
(13) Dans le cas où un jugement est obtenu pour une
somme à payer en application de la présente loi, y com-
pris un certificat enregistré en vertu de l’article 72, les
dispositions de la présente loi en application desquelles
des intérêts sont payables pour défaut de paiement de la
somme s’appliquent, compte tenu des adaptations de cir-
constance, au défaut de paiement de la créance constatée
2021-2022 76 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Litigation costs
(14) If an amount is payable by a person to Her Majesty
in right of Canada because of an order, judgment or
award of a court in respect of the costs of litigation relat-
ing to a matter to which this Act applies, sections 69 and
72 to 78 apply to the amount as if it were payable under
this Act.
Security
69 (1) The Minister may, if the Minister considers it ad-
visable, accept security in an amount and a form satisfac-
tory to the Minister for the payment of any amount that
is or may become payable under this Act.
par jugement, et les intérêts sont recouvrables de la
même manière que cette créance.
Frais de justice
(14) Dans le cas où une somme doit être payée par une
personne à Sa Majesté du chef du Canada en exécution
d’une ordonnance, d’un jugement ou d’une décision d’un
tribunal concernant l’attribution des frais de justice rela-
tifs à une question régie par la présente loi, les articles 69
et 72 à 78 s’appliquent à la somme comme si elle était
payable en application de la présente loi.
Garantie
69 (1) Le ministre peut, s’il l’estime souhaitable, accep-
ter une garantie, d’un montant et sous une forme accep-
tables pour lui, du paiement d’une somme qui est à
payer, ou peut le devenir, en application de la présente
loi.
Remise de la garantie
(2) Sur demande écrite de la personne qui a donné une
garantie, ou au nom de laquelle une garantie a été don-
née, en vertu du présent article, le ministre doit remettre
tout ou partie de la garantie dans la mesure où la valeur
de celle-ci dépasse, au moment où il reçoit la demande, la
somme objet de la garantie.
Surrender of excess security
(2) If a person that has given security, or on whose be-
half security has been given, under this section requests
in writing that the Minister surrender the security or any
part of it, the Minister must surrender the security to the
extent that its value exceeds, at the time the request is re-
ceived by the Minister, the amount that is sought to be
secured.
Collection restrictions
70 (1) If a person is liable for the payment of an amount
under this Act, the Minister must not, for the purpose of
collecting the amount, take any of the following actions
until the end of 90 days after the date of a notice of as-
sessment under this Act in respect of the amount:
(a) commence legal proceedings in a court;
(b) certify the amount under section 72;
(c) require a person to make a payment under subsec-
tion 73(1);
(d) require an institution or a person to make a pay-
ment under subsection 73(2);
(e) require a person to turn over moneys under sub-
section 76(1); or
(f) give a notice, issue a certificate or make a direction
under subsection 77(1).
Restrictions au recouvrement
70 (1) Lorsqu’une personne est redevable d’une somme
en application de la présente loi, le ministre, pour recou-
vrer la somme, ne peut, avant le lendemain du quatre-
vingt-dixième jour suivant la date d’un avis de cotisation
en vertu de la présente loi délivré relativement à la
somme :
a) entamer une poursuite devant un tribunal;
b) attester la somme dans un certificat, en vertu de
l’article 72;
c) obliger une personne à faire un paiement, en vertu
du paragraphe 73(1);
d) obliger une institution ou une personne à faire un
paiement, en vertu du paragraphe 73(2);
e) obliger une personne à verser des sommes, en vertu
du paragraphe 76(1);
f) donner un avis, délivrer un certificat ou donner un
ordre, en vertu du paragraphe 77(1).
2021-2022 77 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
No action after service of notice of objection
(2) If a person has served a notice of objection under this
Act to an assessment of an amount payable under this
Act, the Minister must not, for the purpose of collecting
the amount in controversy, take any of the actions de-
scribed in subsection (1) until the end of 90 days after the
date of the notice to the person that the Minister has con-
firmed or varied the assessment.
No action after making appeal to Tax Court
(3) If a person has appealed to the Tax Court of Canada
from an assessment of an amount payable under this Act,
the Minister must not, for the purpose of collecting the
amount in controversy, take any of the actions described
in subsection (1) before the earlier of the day on which a
copy of the decision of the Court is mailed to the person
and the day on which the person discontinues the appeal.
No action pending determination by Tax Court
(4) If a person has agreed under subsection 45(1) that a
question should be determined by the Tax Court of
Canada, or if a person is served with a copy of an applica-
tion made under subsection 46(1) to that Court for the
determination of a question, the Minister must not take
any of the actions described in subsection (1) for the pur-
pose of collecting that part of an amount assessed, the li-
ability for payment of which could be affected by the de-
termination of the question, before the day on which the
question is determined by the Court.
Action after judgment
(5) Despite any other provision in this section, if a per-
son has served a notice of objection under this Act to an
assessment or has appealed to the Tax Court of Canada
from an assessment and agrees in writing with the Minis-
ter to delay proceedings on the objection or appeal, as the
case may be, until judgment has been given in another
action before the Tax Court of Canada, the Federal Court
of Appeal or the Supreme Court of Canada in which the
issue is the same or substantially the same as that raised
in the objection or appeal of the person, the Minister may
take any of the actions described in subsection (1) for the
purpose of collecting the amount assessed, or a part of it,
determined in a manner consistent with the judgment of
the Court in the other action at any time after the Minis-
ter notifies the person in writing that the judgment has
been given by the Court in the other action.
Mesures postérieures à la signification d’un avis
d’opposition
(2) Lorsqu’une personne signifie en application de la
présente loi un avis d’opposition à une cotisation pour
une somme payable en application de la présente loi, le
ministre, pour recouvrer la somme en litige, ne peut
prendre aucune des mesures mentionnées au para-
graphe (1) avant le lendemain du quatre-vingt-dixième
jour suivant la date de l’avis à la personne portant qu’il
confirme ou modifie la cotisation.
Mesures postérieures à un appel devant la Cour
canadienne de l’impôt
(3) Lorsqu’une personne interjette appel auprès de la
Cour canadienne de l’impôt d’une cotisation pour une
somme payable en application de la présente loi, le mi-
nistre, pour recouvrer la somme en litige, ne peut
prendre aucune des mesures mentionnées au para-
graphe (1) avant le premier en date de la date d’envoi à la
personne d’une copie de la décision de la cour et de la
date où la personne se désiste de l’appel.
Aucune mesure en attendant la décision de la Cour
canadienne de l’impôt
(4) Lorsqu’une personne convient de faire statuer en ver-
tu du paragraphe 45(1) la Cour canadienne de l’impôt sur
une question ou qu’il est signifié à une personne copie
d’une demande présentée en vertu du paragraphe 46(1)
devant cette cour pour qu’elle statue sur une question, le
ministre, pour recouvrer la partie du montant d’une coti-
sation dont la personne pourrait être redevable selon ce
que la cour statuera, ne peut prendre aucune des me-
sures mentionnées au paragraphe (1) avant que la cour
ne statue sur la question.
Mesures postérieures à un jugement
(5) Malgré les autres dispositions du présent article, lors-
qu’une personne signifie, en application de la présente
loi, un avis d’opposition à une cotisation ou interjette ap-
pel d’une cotisation auprès de la Cour canadienne de
l’impôt et qu’elle convient par écrit avec le ministre de re-
tarder la procédure d’opposition ou la procédure d’appel
jusqu’à ce que la Cour canadienne de l’impôt, la Cour
d’appel fédérale ou la Cour suprême du Canada rende ju-
gement dans une autre action qui soulève la même ques-
tion, ou essentiellement la même, que celle soulevée dans
l’opposition ou l’appel par la personne, le ministre peut
prendre les mesures mentionnées au paragraphe (1) pour
recouvrer tout ou partie du montant de la cotisation éta-
bli de la façon envisagée par le jugement rendu dans cette
autre action, à tout moment après que le ministre a avisé
la personne par écrit que le tribunal a rendu jugement
dans l’autre action.
2021-2022 78 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Collection of large amounts
(6) Despite subsections (1) to (5), if, at any time, the total
of all amounts that a person has been assessed under this
Act and that remain unpaid exceeds $1,000,000, the Min-
ister may collect up to 50% of the total.
Over $1,000,000 — security
71 (1) The Minister may, by sending a notice to a per-
son, require security in a form satisfactory to the Minis-
ter and in an amount up to a specified amount that is the
greater of zero dollars and the amount that is determined
by the formula
[(A ÷ 2) – B] – $1,000,000
Recouvrement de sommes importantes
(6) Malgré les paragraphes (1) à (5), le ministre peut re-
couvrer jusqu’à 50 % du total des sommes visées par les
cotisations établies à l’égard d’une personne en applica-
tion de la présente loi si la partie impayée du total de ces
sommes dépasse 1 000 000 $.
Montant supérieur à 1 000 000 $ — caution
71 (1) Le ministre peut, par avis envoyé à une personne,
exiger que soit fournie sous une forme qu’il juge accep-
table une caution d’un montant qui ne peut dépasser le
montant qui correspond au plus élevé de zéro dollar et du
montant obtenu par la formule suivante :
[(A ÷ 2) – B] – 1 000 000 $
where
A is the total of all amounts, each of which is an
amount that the person has been assessed under this
Act in respect of which a portion remains unpaid;
and
B is the greater of zero dollars and the amount that is
determined by the formula
C – (D ÷ 2)
où :
A représente le total des montants dont chacun est une
somme visée par une cotisation établie à l’égard de la
personne en application de la présente loi et dont
une partie demeure impayée;
B le plus élevé de zéro dollar et du montant obtenu par
la formule suivante :
C – (D ÷ 2)
where
C is the total of all amounts that the person has
paid against the amount determined for A, and
D is the amount determined for A.
When security to be given
(2) The security required under subsection (1)
(a) must be given to the Minister no later than 60 days
after the day on which the Minister required the secu-
rity; and
(b) must be in a form satisfactory to the Minister.
Failure to comply
(3) Despite subsections 70(1) to (5), the Minister may
collect an amount equivalent to the amount of security
that was required under subsection (1) if the security re-
quired under that subsection is not given to the Minister
as set out in this section.
Certificates
72 (1) Any amount payable by a person (in this section
referred to as the “debtor”) under this Act that has not
been paid as and when required under this Act may be
certified by the Minister as an amount payable by the
debtor.
où :
C représente le total des sommes que la personne a
payées en réduction du montant correspondant à
la valeur de l’élément A,
D la valeur de l’élément A.
Délai — caution
(2) La caution exigée en vertu du paragraphe (1) doit être
fournie au ministre :
a) dans un délai de soixante jours suivant la date à la-
quelle le ministre l’a exigée;
b) sous une forme qu’il juge acceptable.
Défaut de se conformer
(3) Malgré les paragraphes 70(1) à (5), le ministre peut
recouvrer une somme équivalant au montant de la cau-
tion exigée en vertu du paragraphe (1) si cette dernière
ne lui est pas fournie conformément au présent article.
Certificats
72 (1) Toute somme payable par une personne (appelée
« débiteur » au présent article) en application de la pré-
sente loi qui n’a pas été payée dans les délais et selon les
modalités prévus par la présente loi peut, par certificat
du ministre, être déclarée payable par le débiteur.
2021-2022 79 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Registration in court
(2) On production to the Federal Court, a certificate
made under subsection (1) in respect of a debtor must be
registered in the Court and when so registered has the
same effect, and all proceedings may be taken on the cer-
tificate, as if it were a judgment obtained in the Court
against the debtor for a debt in the amount certified plus
interest on the amount as provided under this Act to the
day of payment and, for the purposes of those proceed-
ings, the certificate is deemed to be a judgment of the
Court against the debtor for a debt due to Her Majesty in
right of Canada and enforceable as such.
Costs
(3) All reasonable costs and charges incurred or paid for
the registration in the Federal Court of a certificate made
under subsection (1) or in respect of any proceedings tak-
en to collect the amount certified are recoverable in like
manner as if they had been included in the amount certi-
fied in the certificate when it was registered.
Charge on property
(4) A document issued by the Federal Court evidencing a
registered certificate in respect of a debtor, a writ of that
Court issued pursuant to the certificate or any notifica-
tion of the document or writ (which document, writ or
notification is in this section referred to as a “memorial”)
may be filed, registered or otherwise recorded for the
purpose of creating a charge, lien or priority on, or a
binding interest in property in a province, or any interest
in, or for civil law any right in, such property, held by the
debtor, in the same manner as a document evidencing
(a) a judgment of the superior court of the province
against a person for a debt owing by the person, or
(b) an amount payable or required to be remitted by a
person in the province in respect of a debt owing to
Her Majesty in right of the province
may be filed, registered or otherwise recorded in accor-
dance with the law of the province to create a charge, lien
or priority on, or a binding interest in, the property or in-
terest.
Creation of charge
(5) If a memorial has been filed, registered or otherwise
recorded under subsection (4),
(a) a charge, lien or priority is created on, or a binding
interest is created in, property in the province, or any
interest in, or for civil law any right in, such property,
held by the debtor, or
Enregistrement à la Cour fédérale
(2) Sur production à la Cour fédérale, le certificat fait en
vertu du paragraphe (1) à l’égard d’un débiteur est enre-
gistré à cette cour. Il a alors le même effet que s’il s’agis-
sait d’un jugement rendu par cette cour contre le débi-
teur pour une dette de la somme attestée dans le certifi-
cat, augmentée des intérêts courus comme le prévoit la
présente loi jusqu’au jour du paiement, et toutes les pro-
cédures peuvent être engagées à la faveur du certificat
comme s’il s’agissait d’un tel jugement. Pour ce qui est de
ces procédures, le certificat est réputé être un jugement
exécutoire rendu par cette cour contre le débiteur pour
une créance de Sa Majesté du chef du Canada.
Frais et dépens
(3) Les frais et dépens raisonnables engagés ou payés
pour l’enregistrement à la Cour fédérale d’un certificat
fait en vertu du paragraphe (1) ou pour l’exécution des
procédures de recouvrement de la somme qui y est attes-
tée sont recouvrables de la même manière que s’ils
avaient été inclus dans cette somme au moment de l’en-
registrement du certificat.
Charge sur un bien
(4) Tout document délivré par la Cour fédérale et faisant
preuve du contenu d’un certificat enregistré à l’égard
d’un débiteur, tout bref de cette cour délivré au titre du
certificat ou toute notification du document ou du bref
(le document, le bref ou la notification étant appelé « ex-
trait » au présent article) peut être produit, enregistré ou
autrement inscrit en vue de grever d’une sûreté, d’une
priorité ou d’une autre charge un bien du débiteur situé
dans une province, ou un intérêt ou, pour l’application du
droit civil, un droit sur un tel bien, de la même manière
que peut l’être, au titre ou en application du droit provin-
cial, un document faisant preuve :
a) soit du contenu d’un jugement rendu par la cour
supérieure de la province contre une personne pour
une dette de celle-ci;
b) soit d’une somme à payer ou à remettre par une
personne dans la province au titre d’une créance de Sa
Majesté du chef de la province.
Charge sur un bien
(5) Une fois l’extrait produit, enregistré ou autrement
inscrit en vertu du paragraphe (4), une sûreté, une priori-
té ou une autre charge grève un bien du débiteur situé
dans la province, ou un intérêt ou, pour l’application du
droit civil, un droit sur un tel bien, de la même manière
et dans la même mesure que si l’extrait était un docu-
ment faisant preuve du contenu d’un jugement visé à
2021-2022 80 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(b) such property, or interest or right in the property,
is otherwise bound,
in the same manner and to the same extent as if the
memorial were a document evidencing a judgment re-
ferred to in paragraph (4)(a) or an amount referred to in
paragraph (4)(b), and the charge, lien, priority or binding
interest created is subordinate to any charge, lien, priori-
ty or binding interest in respect of which all steps neces-
sary to make it effective against other creditors were
taken before the time the memorial was filed, registered
or otherwise recorded.
Proceedings in respect of memorial
(6) If a memorial is filed, registered or otherwise record-
ed in a province under subsection (4), proceedings may
be taken in the province in respect of the memorial, in-
cluding proceedings
(a) to enforce payment of the amount evidenced by
the memorial, interest on the amount and all costs and
charges paid or incurred in respect of
(i) the filing, registration or other recording of the
memorial, and
(ii) proceedings taken to collect the amount,
(b) to renew or otherwise prolong the effectiveness of
the filing, registration or other recording of the memo-
rial,
(c) to cancel or withdraw the memorial wholly or in
respect of any of the property, or interests or rights,
affected by the memorial, or
(d) to postpone the effectiveness of the filing, registra-
tion or other recording of the memorial in favour of
any right, charge, lien or priority that has been or is
intended to be filed, registered or otherwise recorded
in respect of any property, or interest or rights, affect-
ed by the memorial,
in the same manner and to the same extent as if the
memorial were a document evidencing a judgment re-
ferred to in paragraph (4)(a) or an amount referred to in
paragraph (4)(b), except that, if in any such proceeding
or as a condition precedent to any such proceeding, any
order, consent or ruling is required under the law of the
province to be made or given by the superior court of the
province or by a judge or official of the court, a like order,
consent or ruling may be made or given by the Federal
Court or by a judge or official of the Federal Court and,
when so made or given, has the same effect for the pur-
poses of the proceeding as if it were made or given by the
superior court of the province or by a judge or official of
the court.
l’alinéa (4)a) ou d’une somme visée à l’alinéa (4)b). Cette
sûreté, priorité ou charge prend rang après toute autre
sûreté, priorité ou charge à l’égard de laquelle les me-
sures requises pour la rendre opposable aux autres
créanciers ont été prises avant la production, l’enregistre-
ment ou autre inscription de l’extrait.
Procédures engagées à la faveur d’un extrait
(6) L’extrait produit, enregistré ou autrement inscrit
dans une province en vertu du paragraphe (4) peut, de la
même manière et dans la même mesure que s’il s’agissait
d’un document faisant preuve du contenu d’un jugement
visé à l’alinéa (4)a) ou d’une somme visée à l’alinéa (4)b),
faire l’objet dans la province de procédures visant notam-
ment :
a) à exiger le paiement de la somme attestée par l’ex-
trait, des intérêts y afférents et des frais et dépens
payés ou engagés en vue de la production, de l’enregis-
trement ou autre inscription de l’extrait ou en vue de
l’exécution des procédures de recouvrement de la
somme;
b) à renouveler ou autrement prolonger l’effet de la
production, de l’enregistrement ou autre inscription
de l’extrait;
c) à annuler ou à retirer l’extrait dans son ensemble
ou uniquement en ce qui concerne un ou plusieurs
biens ou intérêts ou droits sur lesquels l’extrait a une
incidence;
d) à différer l’effet de la production, de l’enregistre-
ment ou autre inscription de l’extrait en faveur d’un
droit, d’une sûreté, d’une priorité ou d’une autre
charge qui a été ou qui sera produit, enregistré ou au-
trement inscrit à l’égard d’un bien ou d’un intérêt ou
d’un droit sur lequel l’extrait a une incidence.
Toutefois, dans le cas où la loi provinciale exige — soit
dans le cadre de ces procédures, soit préalablement à leur
exécution — l’obtention d’une ordonnance, d’une déci-
sion ou d’un consentement de la cour supérieure de la
province ou d’un juge ou d’un fonctionnaire de celle-ci, la
Cour fédérale ou un juge ou un fonctionnaire de celle-ci
peut rendre une telle ordonnance ou décision ou donner
un tel consentement. Cette ordonnance, cette décision ou
ce consentement a alors le même effet dans le cadre des
procédures que s’il était rendu ou donné par la cour su-
périeure de la province ou par un juge ou un fonction-
naire de celle-ci.
2021-2022 81 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Presentation of documents
(7) If
(a) a memorial is presented for filing, registration or
other recording under subsection (4), or a document
relating to the memorial is presented for filing, regis-
tration or other recording for the purpose of any pro-
ceeding described in subsection (6), to any official in
the land registry system, personal property or movable
property registry system, or other registry system, of a
province, or
(b) access is sought to any person, place or thing in a
province to make the filing, registration or other
recording,
the memorial or document must be accepted for filing,
registration or other recording or the access must be
granted, as the case may be, in the same manner and to
the same extent as if the memorial or document relating
to the memorial were a document evidencing a judgment
referred to in paragraph (4)(a) or an amount referred to
in paragraph (4)(b) for the purpose of a like proceeding,
except that, if the memorial or document is issued by the
Federal Court or signed or certified by a judge or official
of the Court, any affidavit, declaration or other evidence
required under the law of the province to be provided
with or to accompany the memorial or document in the
proceedings is deemed to have been provided with or to
have accompanied the memorial or document as so re-
quired.
Prohibition — disposition without consent
(8) Despite any law of Canada or of a province, a sheriff
or other person must not, without the written consent of
the Minister, sell or otherwise dispose of any property or
publish any notice or otherwise advertise in respect of
any sale or other disposition of any property pursuant to
any process issued or charge, lien, priority or binding in-
terest created in any proceeding to collect an amount cer-
tified in a certificate made under subsection (1), interest
on the amount or costs. However, if that consent is sub-
sequently given, any property that would have been af-
fected by that process, charge, lien, priority or binding
interest if the Minister’s consent had been given at the
time that process was issued or the charge, lien, priority
or binding interest was created, as the case may be, is
bound, seized, attached, charged or otherwise affected as
it would be if that consent had been given at the time that
process was issued or the charge, lien, priority or binding
interest was created, as the case may be.
Completion of notices, etc.
(9) If information required to be set out by any sheriff or
other person in a minute, notice or document required to
be completed for any purpose cannot, because of
Présentation des documents
(7) L’extrait qui est présenté pour production, enregis-
trement ou autre inscription en vertu du paragraphe (4),
ou un document concernant l’extrait qui est présenté
pour production, enregistrement ou autre inscription
dans le cadre des procédures mentionnées au paragraphe
(6), à un agent d’un régime d’enregistrement foncier ou
des droits sur des biens meubles ou personnels ou autres
droits d’une province est accepté pour production, enre-
gistrement ou autre inscription de la même manière et
dans la même mesure que s’il s’agissait d’un document
faisant preuve du contenu d’un jugement visé à l’alinéa
(4)a) ou d’une somme visée à l’alinéa (4)b) dans le cadre
de procédures semblables. Pour ce qui est de la produc-
tion, de l’enregistrement ou autre inscription de cet ex-
trait ou ce document, l’accès à une personne, à un endroit
ou à une chose situé dans une province est donné de la
même manière et dans la même mesure que si l’extrait ou
le document était un document semblable ainsi délivré
ou établi. Si l’extrait ou le document est délivré par la
Cour fédérale ou porte la signature ou fait l’objet d’un
certificat d’un juge ou d’un fonctionnaire de cette cour,
tout affidavit, toute déclaration ou tout autre élément de
preuve qui doit, selon la loi provinciale, être fourni avec
l’extrait ou le document ou l’accompagner dans le cadre
des procédures est réputé avoir été ainsi fourni ou ac-
compagner ainsi l’extrait ou le document.
Interdiction — disposition sans consentement
(8) Malgré les lois fédérales et provinciales, ni le shérif ni
aucune autre personne ne peut, sans le consentement
écrit du ministre, vendre un bien ou autrement en dispo-
ser ou publier un avis concernant la vente ou la disposi-
tion d’un bien ou autrement l’annoncer, par suite de
l’émission d’un bref ou de la création d’une sûreté, d’une
priorité ou d’une autre charge dans le cadre de procé-
dures de recouvrement d’une somme attestée dans un
certificat fait en vertu du paragraphe (1), des intérêts y
afférents et des frais et dépens. Toutefois, si ce consente-
ment est obtenu ultérieurement, tout bien sur lequel ce
bref ou cette sûreté, priorité ou charge aurait une inci-
dence si ce consentement avait été obtenu au moment de
l’émission du bref ou de la création de la sûreté, priorité
ou charge, selon le cas, est saisi ou autrement grevé
comme si le consentement avait été obtenu à ce moment.
Établissement des avis
(9) Dans le cas où des renseignements qu’un shérif ou
une autre personne doit indiquer dans un procès-verbal,
un avis ou un document à établir à une fin quelconque ne
2021-2022 82 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
subsection (8), be so set out without the written consent
of the Minister, the sheriff or other person must com-
plete the minute, notice or document to the extent possi-
ble without that information and, when that consent of
the Minister is given, a further minute, notice or docu-
ment setting out all the information must be completed
for the same purpose, and the sheriff or other person,
having complied with this subsection, is deemed to have
complied with this Act, regulation or rule requiring the
information to be set out in the minute, notice or docu-
ment.
Application for order
(10) A sheriff or other person that is unable, because of
subsection (8) or (9), to comply with any law or rule of
court is bound by any order made by a judge of the Fed-
eral Court, on an ex parte application by the Minister, for
the purpose of giving effect to the proceeding, charge,
lien, priority or binding interest.
Secured claims
(11) If a charge, lien, priority or binding interest created
under subsection (5) by filing, registering or otherwise
recording a memorial under subsection (4) is registered
in accordance with subsection 87(1) of the Bankruptcy
and Insolvency Act, it is deemed
(a) to be a claim that is secured by a security and that,
subject to subsection 87(2) of that Act, ranks as a se-
cured claim under that Act; and
(b) to also be a claim referred to in paragraph 86(2)(a)
of that Act.
Details in certificates and memorials
(12) Despite any law of Canada or of a province, in any
certificate in respect of a debtor, any memorial evidenc-
ing a certificate or any writ or document issued for the
purpose of collecting an amount certified, it is sufficient
for all purposes
(a) to set out, as the amount payable by the debtor,
the total of amounts payable by the debtor without
setting out the separate amounts making up that total;
and
(b) to refer to the rate of interest or penalty to be
charged on the separate amounts making up the
amount payable in general terms
(i) in the case of interest, as interest at the specified
rate under this Act applicable from time to time on
amounts payable to the Receiver General, without
peuvent, en raison du paragraphe (8), être ainsi indiqués
sans le consentement écrit du ministre, le shérif ou
l’autre personne doit établir le procès-verbal, l’avis ou le
document en omettant les renseignements en question.
Une fois le consentement du ministre obtenu, un autre
procès-verbal, avis ou document indiquant tous les ren-
seignements doit être établi à la même fin. S’il se
conforme au présent paragraphe, le shérif ou l’autre per-
sonne est réputé se conformer à la loi, à la disposition ré-
glementaire ou à la règle qui exige que les renseigne-
ments soient indiqués dans le procès-verbal, l’avis ou le
document.
Demande d’ordonnance
(10) S’il ne peut se conformer à une loi ou à une règle de
pratique en raison des paragraphes (8) ou (9), le shérif ou
l’autre personne est lié par toute ordonnance rendue, sur
requête ex parte du ministre, par un juge de la Cour fédé-
rale visant à donner effet à des procédures ou à une sûre-
té, une priorité ou une autre charge.
Réclamation garantie
(11) La sûreté, la priorité ou l’autre charge créée en vertu
du paragraphe (5) par la production, l’enregistrement ou
autre inscription d’un extrait en vertu du paragraphe (4)
qui est enregistrée en conformité avec le paragraphe
87(1) de la Loi sur la faillite et l’insolvabilité est réputée,
à la fois :
a) être une réclamation garantie et, sous réserve du
paragraphe 87(2) de cette loi, prendre rang comme ré-
clamation garantie aux termes de cette loi;
b) être une réclamation visée à l’alinéa 86(2)a) de
cette loi.
Contenu des certificats et extraits
(12) Malgré les lois fédérales et provinciales, dans le cer-
tificat fait à l’égard d’un débiteur, dans l’extrait faisant
preuve du contenu d’un tel certificat ou encore dans le
bref ou document délivré en vue du recouvrement d’une
somme attestée dans un tel certificat, il suffit, à toutes
fins utiles :
a) d’une part, d’indiquer, comme somme payable par
le débiteur, le total des sommes payables par celui-ci
et non les sommes distinctes qui forment ce total;
b) d’autre part, d’indiquer de façon générale le taux
d’intérêt, ou de pénalité, applicable aux montants dis-
tincts qui forment la somme à verser au receveur gé-
néral comme étant :
(i) dans le cas d’intérêts, des intérêts calculés au
taux réglementaire en application de la présente loi
2021-2022 83 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
indicating the specific rates of interest to be
charged on each of the separate amounts or to be
charged for any period, and
(ii) in the case of a penalty, the penalty calculated
under section 47 on amounts payable to the Receiv-
er General.
Garnishment
73 (1) If the Minister has knowledge or suspects that a
person is, or will be within one year, liable to make a pay-
ment to another person that is liable to pay an amount
under this Act (in this section referred to as a “debtor”),
the Minister may, by notice in writing, require the person
to pay without delay, if the money is immediately
payable, and in any other case, as and when the money is
payable, the money otherwise payable to the debtor in
whole or in part to the Receiver General on account of
the debtor’s liability under this Act.
Garnishment of loans or advances
(2) Without limiting the generality of subsection (1), if
the Minister has knowledge or suspects that within
90 days
(a) a bank, credit union, trust company or other simi-
lar person (in this section referred to as an “institu-
tion”) will loan or advance money to, or make a pay-
ment on behalf of, or make a payment in respect of a
negotiable instrument issued by, a debtor that is in-
debted to the institution and that has granted security
in respect of the indebtedness, or
(b) a person, other than an institution, will loan or ad-
vance money to, or make a payment on behalf of, a
debtor that the Minister knows or suspects
(i) is employed by, or is engaged in providing ser-
vices or property to, that person or was or will be,
within 90 days, so employed or engaged, or
(ii) if that person is a corporation, is not dealing at
arm’s length with that person,
the Minister may, by notice in writing, require the insti-
tution or person, as the case may be, to pay in whole or in
part to the Receiver General on account of the debtor’s li-
ability under this Act the money that would otherwise be
so loaned, advanced or paid.
sur les sommes à verser au receveur général, sans
détailler les taux d’intérêt applicables à chaque
montant distinct ou pour une période donnée,
(ii) dans le cas d’une pénalité, la pénalité prévue à
l’article 47 sur les sommes à verser au receveur gé-
néral.
Saisie-arrêt
73 (1) S’il sait ou soupçonne qu’une personne est, ou se-
ra dans un délai d’un an, tenue de faire un paiement à
une autre personne (appelée « débiteur » au présent ar-
ticle) qui elle-même est redevable d’une somme en appli-
cation de la présente loi, le ministre peut exiger de cette
personne, par avis écrit, que tout ou partie des sommes
par ailleurs à payer au débiteur soient versées, sans délai
si les sommes sont alors à payer, sinon, dès qu’elles de-
viennent payables, au receveur général au titre de l’obli-
gation du débiteur en application de la présente loi.
Saisie-arrêt de prêts ou d’avances
(2) Sans que soit limitée la portée générale du para-
graphe (1), si le ministre sait ou soupçonne que, dans un
délai de quatre-vingt-dix jours, selon le cas :
a) une banque, une caisse de crédit, une compagnie
de fiducie ou une personne semblable (appelée « insti-
tution » au présent article) soit prêtera ou avancera
une somme à un débiteur qui a une dette envers l’ins-
titution et a donné à celle-ci une garantie pour cette
dette, soit effectuera un paiement au nom d’un tel dé-
biteur ou au titre d’un effet de commerce émis par un
tel débiteur;
b) une personne autre qu’une institution prêtera ou
avancera une somme à un débiteur, ou effectuera un
paiement au nom d’un débiteur, que le ministre sait
ou soupçonne :
(i) être le salarié de cette personne, ou prestataire
de biens ou de services à cette personne, ou qu’elle
l’a été ou le sera dans un délai de quatre-vingt-dix
jours,
(ii) lorsque cette personne est une personne mo-
rale, avoir un lien de dépendance avec cette per-
sonne,
il peut, par avis écrit, obliger cette institution ou cette
personne à verser au receveur général au titre de l’obliga-
tion du débiteur en application de la présente loi tout ou
partie de la somme qui serait autrement ainsi prêtée,
avancée ou payée.
2021-2022 84 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Effect of receipt
(3) A receipt issued by the Minister for money paid as re-
quired under this section is a good and sufficient dis-
charge of the original liability to the extent of the pay-
ment.
Effect of requirement
(4) If the Minister has, under this section, required a
person to pay to the Receiver General, on account of the
liability under this Act of a debtor, money otherwise
payable by the person to the debtor as interest, rent, re-
muneration, a dividend, an annuity or other periodic
payment, the requirement applies to all such payments to
be made by the person to the debtor until the liability un-
der this Act is satisfied and operates to require payments
to the Receiver General out of each such payment of any
amount that is stipulated by the Minister in a notice in
writing.
Récépissé du ministre
(3) Le récépissé du ministre relatif aux sommes versées,
comme l’exige le présent article, constitue une quittance
valable et suffisante de l’obligation initiale jusqu’à
concurrence du paiement.
Étendue de l’obligation
(4) L’obligation, imposée par le ministre en vertu du pré-
sent article, d’une personne de verser au receveur géné-
ral, au titre d’une somme dont un débiteur est redevable
en application de la présente loi, des sommes à payer par
ailleurs par cette personne au débiteur à titre d’intérêts,
de loyer, de rémunération, de dividende, de rente ou
autre paiement périodique s’étend à tous les paiements
analogues à être effectués par la personne au débiteur
tant que la somme dont celui-ci est redevable n’est pas
acquittée. De plus, l’obligation exige que des paiements
soient versés au receveur général sur chacun de ces paie-
ments analogues, selon la somme que le ministre établit
dans un avis écrit.
Défaut de se conformer
(5) Toute personne qui ne se conforme pas aux para-
graphes (1) ou (4) est redevable à Sa Majesté du chef du
Canada d’une somme égale à celle qu’elle était tenue de
verser au receveur général en vertu de ce paragraphe.
Failure to comply
(5) Every person that fails to comply with a requirement
under subsection (1) or (4) is liable to pay to Her Majesty
in right of Canada an amount equal to the amount that
the person was required under that subsection to pay to
the Receiver General.
Failure to comply
(6) Every institution or person that fails to comply with a
requirement under subsection (2) with respect to money
to be loaned, advanced or paid is liable to pay to Her
Majesty in right of Canada an amount equal to the lesser
of
(a) the total of money so loaned, advanced or paid,
Défaut de se conformer
(6) Toute institution ou personne qui ne se conforme pas
au paragraphe (2) est redevable à Sa Majesté du chef du
Canada, à l’égard des sommes à prêter, à avancer ou à
payer, d’une somme égale au moins élevé des montants
suivants :
a) le total des sommes ainsi prêtées, avancées ou
payées;
b) la somme qu’elle était tenue de verser au receveur
général en application de ce paragraphe.
and
(b) the amount that the institution or person was re-
quired under that subsection to pay to the Receiver
General.
Assessment
(7) The Minister may assess any person for any amount
payable under this section by the person to the Receiver
General and, if the Minister sends a notice of assessment,
sections 15 and 33 to 46 apply with any modifications that
the circumstances require.
Time limit
(8) An assessment of an amount payable under this sec-
tion by a person to the Receiver General is not to be
made more than four years after the notice from the Min-
ister requiring the payment was received by the person.
Cotisation
(7) Le ministre peut établir une cotisation pour une
somme qu’une personne doit payer au receveur général
en vertu du présent article. Dès l’envoi de l’avis de cotisa-
tion, les articles 15 et 33 à 46 s’appliquent, avec les adap-
tations nécessaires.
Délai
(8) La cotisation ne peut être établie plus de quatre ans
suivant le jour de la réception par la personne de l’avis du
ministre exigeant le paiement de la somme.
2021-2022 85 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Effect of payment as required
(9) If an amount that would otherwise have been ad-
vanced, loaned or paid to or on behalf of a debtor is paid
by a person to the Receiver General in accordance with a
notice from the Minister issued under this section or with
an assessment under subsection (7), the person is
deemed for all purposes to have advanced, loaned or paid
the amount to or on behalf of the debtor.
Recovery by deduction or set-off
74 If a person is indebted to Her Majesty in right of
Canada under this Act, the Minister may require the re-
tention by way of deduction or set-off of any amount that
the Minister may specify out of any amount that may be
or become payable to that person by Her Majesty in right
of Canada.
Acquisition of debtor’s property
75 For the purpose of collecting debts owed by a person
to Her Majesty in right of Canada under this Act, the
Minister may purchase or otherwise acquire any interest
in, or for civil law any right in, the person’s property that
the Minister is given a right to acquire in legal proceed-
ings or under a court order or that is offered for sale or
redemption and may dispose of any interest or right so
acquired in any manner that the Minister considers rea-
sonable.
Money seized from debtor
76 (1) If the Minister has knowledge or suspects that a
person is holding money that was seized by a police offi-
cer in the course of administering or enforcing the crimi-
nal law of Canada from another person that is liable to
pay any amount under this Act (in this section referred to
as the “debtor”) and that is restorable to the debtor, the
Minister may in writing require the person to turn over
the money otherwise restorable to the debtor, in whole or
in part, to the Receiver General on account of the
debtor’s liability under this Act.
Receipt of Minister
(2) A receipt issued by the Minister for money turned
over as required under this section is a good and suffi-
cient discharge of the requirement to restore the money
to the debtor to the extent of the amount so turned over.
Seizure
77 (1) If a person fails to pay an amount as required un-
der this Act, the Minister may in writing give 30 days no-
tice to the person, addressed to their latest known ad-
dress, of the Minister’s intention to direct that the per-
son’s things be seized and disposed of. If the person fails
to make the payment before the expiry of the 30 days, the
Effet du paiement
(9) La personne qui, conformément à l’avis du ministre
envoyé en vertu du présent article ou à une cotisation
établie en vertu du paragraphe (7), verse au receveur gé-
néral une somme qui aurait par ailleurs été avancée, prê-
tée ou payée à un débiteur, ou pour son compte, est répu-
tée, à toutes fins utiles, avoir avancé, prêté ou payé la
somme au débiteur ou pour son compte.
Recouvrement par voie de déduction ou de
compensation
74 Le ministre peut exiger la retenue par voie de déduc-
tion ou de compensation du montant qu’il précise sur
toute somme qui est à payer par Sa Majesté du chef du
Canada, ou qui peut le devenir, à la personne contre qui
elle détient une créance en application de la présente loi.
Acquisition de biens du débiteur
75 Pour recouvrer des créances de Sa Majesté du chef du
Canada contre une personne en application de la pré-
sente loi, le ministre peut acheter ou autrement acquérir
tout intérêt ou, pour l’application du droit civil, droit sur
les biens de la personne auxquels il a droit par suite de
procédures judiciaires ou conformément à l’ordonnance
d’un tribunal, ou qui sont offerts en vente ou peuvent
être rachetés, et peut disposer de ces intérêts ou droits de
la manière qu’il estime raisonnable.
Sommes saisies d’un débiteur
76 (1) S’il sait ou soupçonne qu’une personne détient
des sommes qui ont été saisies par un officier de police,
pour l’application du droit criminel canadien, d’une autre
personne (appelée « débiteur » au présent article) rede-
vable de sommes en application de la présente loi et qui
doivent être restituées au débiteur, le ministre peut par
écrit obliger la personne à verser tout ou partie des
sommes autrement restituables au débiteur au receveur
général au titre de la somme dont le débiteur est rede-
vable en application de la présente loi.
Récépissé du ministre
(2) Le récépissé du ministre relatif aux sommes versées
en application du présent article constitue une quittance
valable et suffisante de l’obligation de restituer les
sommes jusqu’à concurrence du versement.
Saisie
77 (1) Le ministre peut donner à la personne qui n’a pas
payé une somme payable en application de la présente loi
un préavis écrit de trente jours, envoyé à la dernière
adresse connue de la personne, de son intention d’ordon-
ner la saisie et la disposition de choses lui appartenant.
Le ministre peut délivrer un certificat de défaut et
2021-2022 86 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Minister may issue a certificate of the failure and direct
that the person’s things be seized.
Disposition
(2) Things that have been seized under subsection (1)
must be kept for 10 days at the expense and risk of the
person. If the person does not pay the amount due to-
gether with all expenses within the 10 days, the Minister
may dispose of the things in a manner the Minister con-
siders appropriate in the circumstances.
Proceeds of disposition
(3) Any surplus resulting from a disposition of a person’s
things, after deduction of the amount owing and all ex-
penses, must be paid or returned to the person.
Exemptions from seizure
(4) Any thing of any person in default that would be ex-
empt from seizure under a writ of execution issued by a
superior court of the province in which the seizure is
made is exempt from seizure under this section.
ordonner la saisie des choses de la personne si, au terme
des trente jours, celle-ci est encore en défaut de paie-
ment.
Disposition des choses saisies
(2) Les choses saisies sont gardées pendant dix jours aux
frais et risques du propriétaire. Si le propriétaire ne paie
pas la somme due ainsi que les dépenses dans les dix
jours, le ministre peut disposer des choses de la manière
qu’il estime indiquée dans les circonstances.
Person leaving Canada or defaulting
78 (1) If the Minister suspects that a person has left or
is about to leave Canada, the Minister may, before the
day otherwise fixed for payment, by notice to the person
served personally or sent by confirmed delivery service
addressed to their latest known address, demand pay-
ment of any amount for which the person is liable under
this Act or would be so liable if the time for payment had
arrived, and the amount must be paid without delay de-
spite any other provision of this Act.
Seizure
(2) If a person fails to pay an amount required under
subsection (1), the Minister may direct that things of the
person be seized, and subsections 77(2) to (4) apply, with
any modifications that the circumstances require.
Authorization to assess and take collection action
79 (1) Despite section 70, if, on ex parte application by
the Minister relating to a calendar year made on or after
the last day of the calendar year, a judge is satisfied that
there are reasonable grounds to believe that tax for the
calendar year will be required to be paid to the Receiver
General under subsection 6(3) and that the collection of
all or any part of that tax would be jeopardized by a delay
in its collection, the judge must, on any terms that the
judge considers reasonable in the circumstances, autho-
rize the Minister to, without delay,
Produit de la disposition
(3) Le surplus de la disposition, déduction faite de la
somme due et des dépenses, est payé ou rendu au pro-
priétaire des choses saisies.
Restriction
(4) Le présent article ne s’applique pas aux choses appar-
tenant à une personne en défaut qui seraient insaisis-
sables malgré la délivrance d’un bref d’exécution par une
cour supérieure de la province dans laquelle la saisie est
opérée.
Personnes quittant le Canada ou en défaut
78 (1) S’il soupçonne qu’une personne a quitté ou s’ap-
prête à quitter le Canada, le ministre peut, avant le jour
par ailleurs fixé pour le paiement, par avis signifié à per-
sonne ou envoyé par service de messagerie à la dernière
adresse connue de la personne, exiger le paiement de
toute somme dont celle-ci est redevable en application de
la présente loi ou serait ainsi redevable si le paiement
était échu. Cette somme doit être payée sans délai malgré
les autres dispositions de la présente loi.
Saisie
(2) Le ministre peut ordonner la saisie de choses appar-
tenant à la personne qui n’a pas payé une somme exigée
aux termes du paragraphe (1); dès lors, les paragraphes
77(2) à (4) s’appliquent, avec les adaptations nécessaires.
Recouvrement compromis
79 (1) Malgré l’article 70, sur requête ex parte du mi-
nistre concernant une année civile d’une personne, pré-
sentée le dernier jour de l’année civile ou postérieure-
ment, le juge saisi, s’il est convaincu qu’il existe des mo-
tifs raisonnables de croire que de la taxe pour l’année ci-
vile sera à payer au receveur général en application du
paragraphe 6(3) et que le recouvrement de cette taxe se-
rait en tout ou en partie compromis par un délai pour son
recouvrement, autorise le ministre à faire ce qui suit sans
délai, aux conditions que le juge estime raisonnables
dans les circonstances :
2021-2022 87 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
(a) assess the tax for the calendar year, determined in
accordance with subsection (2); and
(b) take any of the actions described in sections 72 to
77 in respect of that amount.
Effect of authorization
(2) For the purposes of this Act, if an authorization is
granted under subsection (1) in respect of an application
relating to a calendar year of a person
(a) the particular day on or before which the person is
required to file a return under section 7 for the calen-
dar year is deemed to be the day on which a judge
hears the application for the authorization;
(b) the tax for the calendar year is deemed to have be-
come due to the Receiver General on the particular
day; and
(c) sections 23, 47, 49, 51 and 52 apply as if the tax for
the calendar year were not required to be paid, and the
return for that calendar year were not required to be
filed, until the last day of the period described in sub-
section (8).
Affidavits
(3) Statements contained in an affidavit filed in the con-
text of an application under this section may be based on
belief in which case it must include the grounds for that
belief.
Service of authorization and notice of assessment
(4) An authorization granted under subsection (1) in re-
spect of a person must be served by the Minister on the
person within 72 hours after it is granted, except if the
judge orders the authorization to be served at some other
time specified in the authorization, and a notice of as-
sessment for the calendar year must be served on the
person together with the authorization.
How service effected
(5) For the purpose of subsection (4), service on a person
must be effected by personal service on the person or ser-
vice in accordance with the directions of a judge.
Application to judge for direction
(6) If service cannot reasonably be effected as and when
required under this section, the Minister may, as soon as
practicable, apply to a judge for further direction.
a) établir une cotisation à l’égard de la taxe, détermi-
née conformément au paragraphe (2), pour l’année ci-
vile;
b) prendre toute mesure visée aux articles 72 à 77 à
l’égard du montant en question.
Effet
(2) Pour l’application de la présente loi, si l’autorisation
prévue au paragraphe (1) est accordée relativement à une
requête visant une année civile d’une personne, les règles
suivantes s’appliquent :
a) la date limite pour la production de la déclaration
de la personne en vertu de l’article 7 pour l’année ci-
vile est réputée être le jour où un juge entend la re-
quête;
b) la taxe pour l’année civile est réputée être devenue
due au receveur général à cette date limite;
c) les articles 23, 47, 49, 51 et 52 s’appliquent comme
si la date limite pour le paiement de la taxe pour l’an-
née civile et pour la production de la déclaration pour
cette année était le dernier jour de la période fixée aux
termes du paragraphe (8).
Affidavits
(3) Les déclarations contenues dans un affidavit produit
dans le cadre de la requête prévue au présent article
peuvent être fondées sur une opinion pour autant que
celle-ci soit motivée dans l’affidavit.
Signification de l’autorisation et de l’avis de
cotisation
(4) Le ministre signifie à la personne intéressée l’autori-
sation prévue au paragraphe (1) dans les soixante-douze
heures suivant le moment où elle est accordée, sauf si le
juge ordonne que l’autorisation soit signifiée dans un
autre délai qui y est précisé. L’avis de cotisation pour
l’année civile est signifié à la personne en même temps
que l’autorisation.
Mode de signification
(5) Pour l’application du paragraphe (4), l’autorisation
est signifiée à la personne soit par voie de signification à
personne, soit par tout autre mode ordonné par le juge.
Demande d’instructions du juge
(6) Si la signification ne peut être raisonnablement effec-
tuée conformément au présent article, le ministre peut,
dès que matériellement possible, demander d’autres ins-
tructions au juge.
2021-2022 88 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Review of authorization
(7) If a judge of a court has granted an authorization un-
der subsection (1) in respect of a person, the person may,
on six clear days notice to the Deputy Attorney General of
Canada, apply to a judge of the court to review the autho-
rization.
Limitation period for review application
(8) An application by a person under subsection (7) to
review an authorization must be made
(a) within 30 days after the day on which the autho-
rization was served on the person in accordance with
this section; or
(b) within any further time that a judge may allow, on
being satisfied that the application was made as soon
as practicable.
Hearing in camera
(9) An application by a person under subsection (7) may,
on the application of the person, be heard in private, if
the person establishes to the satisfaction of the judge that
the circumstances of the case justify proceedings heard in
private.
Disposition of application
(10) On an application under subsection (7), the judge
must determine the question summarily and may con-
firm, vary or set aside the authorization and make any
other order that the judge considers appropriate.
Effect of setting aside authorization
(11) If an authorization is set aside under subsection
(10), subsection (2) does not apply in respect of the au-
thorization and any assessment made as a result of the
authorization is deemed to be void.
Directions
(12) If any question arises as to the course to be followed
in connection with anything done or being done under
this section and there is no relevant direction in this sec-
tion, a judge may give any direction with regard to the
course to be followed that, in the opinion of the judge, is
appropriate.
No appeal from review order
(13) No appeal lies from an order of a judge made under
subsection (10).
Révision de l’autorisation
(7) Si un juge d’une cour accorde une autorisation pré-
vue au paragraphe (1) à l’égard d’une personne, celle-ci
peut, après avoir donné un préavis de six jours francs au
sous-procureur général du Canada, présenter à un juge
de la cour une requête en révision de l’autorisation.
Délai de présentation de la requête
(8) La requête doit être présentée dans les trente jours
suivant la date où l’autorisation a été signifiée à la per-
sonne. Toutefois, elle peut être présentée après l’expira-
tion de ce délai si le juge est convaincu qu’elle a été pré-
sentée dès que matériellement possible.
Huis clos
(9) La requête peut, à la demande de son auteur, être en-
tendue à huis clos si celui-ci démontre, à la satisfaction
du juge, que les circonstances le justifient.
Ordonnance
(10) Le juge saisi de la requête statue sur la question de
façon sommaire et peut confirmer, modifier ou annuler
l’autorisation et rendre toute autre ordonnance qu’il es-
time indiquée.
Effet
(11) Si l’autorisation est annulée en vertu du paragraphe
(10), le paragraphe (2) ne s’applique pas à l’autorisation
et toute cotisation établie conformément à celle-ci est ré-
putée nulle.
Mesures non prévues
(12) Si aucune mesure n’est prévue au présent article sur
une question à résoudre en rapport avec une chose ac-
complie ou en voie d’accomplissement en application de
cet article, un juge peut décider des mesures qu’il estime
les plus aptes à atteindre le but visé.
Ordonnance sans appel
(13) L’ordonnance visée au paragraphe (10) est sans ap-
pel.
2021-2022 89 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Tax liability — transfers not at arm’s length
80 (1) If at any time a person transfers property, either
directly or indirectly, by means of a trust or by any other
means, to
(a) the transferor’s spouse or common-law partner or
an individual that has since become the transferor’s
spouse or common-law partner,
(b) an individual that was under 18 years of age, or
(c) another person with whom the transferor was not
dealing at arm’s length,
the transferee and transferor are jointly and severally, or
solidarily, liable to pay under this Act an amount equal to
the lesser of
(d) the amount determined by the formula
A – B
Transfert entre personnes ayant un lien de
dépendance
80 (1) La personne qui transfère un bien, directement
ou indirectement, par le biais d’une fiducie ou par tout
autre moyen, à son époux ou conjoint de fait, ou à un
particulier qui l’est devenu depuis, à un particulier de
moins de dix-huit ans ou à une personne avec laquelle
elle a un lien de dépendance, est solidairement tenue,
avec le cessionnaire, de payer en application de la pré-
sente loi le moins élevé des montants suivants :
a) le résultat du calcul suivant :
A – B
where
A is the amount, if any, by which the fair market val-
ue of the property at that time exceeds the fair
market value at that time of the consideration giv-
en by the transferee for the transfer of the proper-
ty, and
B is the amount, if any, by which the amount as-
sessed the transferee under subsection 325(2) of
the Excise Tax Act, paragraph 97.44(1)(b) of the
Customs Act, subsection 160(2) of the Income Tax
Act, subsection 297(3) of the Excise Act, 2001 or
subsection 161(3) of the Greenhouse Gas Pollution
Pricing Act in respect of the property exceeds the
amount paid by the transferor in respect of the
amount so assessed, and
(e) the total of all amounts each of which is
(i) an amount that the transferor is liable to pay un-
der this Act for the calendar year of the transferor
that includes that time or any preceding calendar
year of the transferor, or
(ii) interest or penalty for which the transferor is li-
able as of that time,
but nothing in this subsection limits the liability of the
transferor under this Act.
Fair market value of undivided interest
(2) For the purpose of this section, the fair market value
at any time of an undivided interest in a property, ex-
pressed as a proportionate interest in that property, is,
subject to subsection (5), deemed to be equal to the same
où :
A représente l’excédent éventuel de la juste valeur
marchande du bien au moment du transfert sur la
juste valeur marchande, à ce moment, de la
contrepartie payée par le cessionnaire pour le
transfert du bien,
B l’excédent éventuel du montant de la cotisation
établie à l’égard du cessionnaire en application du
paragraphe 325(2) de la Loi sur la taxe d’accise, de
l’alinéa 97.44(1)b) de la Loi sur les douanes, du
paragraphe 160(2) de la Loi de l’impôt sur le reve-
nu, du paragraphe 297(3) de la Loi de 2001 sur
l’accise ou du paragraphe 161(3) de la Loi sur la
tarification de la pollution causée par les gaz à
effet de serre relativement au bien sur la somme
payée par le cédant relativement à ce montant;
b) le total des montants représentant chacun :
(i) le montant dont le cédant est redevable en appli-
cation de la présente loi pour son année civile qui
comprend le moment du transfert ou pour ses an-
nées civiles antérieures,
(ii) les intérêts ou les pénalités dont le cédant est
redevable à ce moment.
Toutefois, le présent paragraphe ne limite en rien l’obli-
gation du cédant découlant de la présente loi.
Juste valeur marchande d’un droit indivis
(2) Pour l’application du présent article, la juste valeur
marchande, à un moment donné, d’un droit indivis sur
un bien, exprimé sous forme d’un droit proportionnel sur
ce bien, est réputée être égale, sous réserve du
2021-2022 90 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
proportion of the fair market value of that property at
that time.
Assessment
(3) The Minister may at any time assess a transferee in
respect of any amount payable by reason of this section,
and the provisions of sections 15 and 33 to 46 apply, with
any modifications that the circumstances require.
Rules applicable
(4) If a transferor and transferee have, by reason of sub-
section (1), become jointly and severally, or solidarily, li-
able in respect of part or all of the liability of the transfer-
or under this Act, the following rules apply:
(a) a payment by the transferee on account of the
transferee’s liability must, to the extent of the pay-
ment, discharge their liability; and
(b) a payment by the transferor on account of the
transferor’s liability only discharges the transferee’s li-
ability to the extent that the payment operates to re-
duce the transferor’s liability to an amount less than
the amount in respect of which the transferee was, by
subsection (1), made jointly and severally, or solidari-
ly, liable.
Transfers to spouse or common-law partner
(5) Despite subsection (1), if at any time an individual
transfers property to the individual’s spouse or common-
law partner under a decree, order or judgment of a com-
petent tribunal or under a written separation agreement
and, at that time, the individual and the individual’s
spouse or common-law partner were separated and living
apart as a result of the breakdown of their marriage or
common-law partnership as defined in subsection
248(1) of the Income Tax Act, for the purposes of para-
graph (1)(d), the fair market value at that time of the
property so transferred is deemed to be nil, but nothing
in this subsection limits the liability of the individual un-
der this Act.
paragraphe (5), à la proportion correspondante de la
juste valeur marchande du bien au moment donné.
Cotisation
(3) Le ministre peut, en tout temps, établir une cotisa-
tion à l’égard d’un cessionnaire pour tout montant
payable en application du présent article. Dès lors, les ar-
ticles 15 et 33 à 46 s’appliquent, compte tenu des adapta-
tions de circonstance.
Règles applicables
(4) Dans le cas où le cédant et le cessionnaire sont soli-
dairement responsables de tout ou partie d’une obliga-
tion du cédant en application de la présente loi, les règles
suivantes s’appliquent :
a) le paiement d’une somme par le cessionnaire au
titre de son obligation éteint d’autant leur obligation
solidaire;
b) le paiement d’une somme par le cédant au titre de
son obligation n’éteint l’obligation du cessionnaire que
dans la mesure où il sert à ramener l’obligation du cé-
dant à une somme inférieure à celle dont le para-
graphe (1) a rendu le cessionnaire solidairement res-
ponsable.
Transferts à l’époux ou au conjoint de fait
(5) Malgré le paragraphe (1), dans le cas où un particu-
lier transfère un bien à son époux ou conjoint de fait —
dont il vit séparé au moment du transfert pour cause
d’échec du mariage ou de l’union de fait au sens du para-
graphe 248(1) de la Loi de l’impôt sur le revenu — en ver-
tu d’un décret, d’une ordonnance ou d’un jugement ren-
du par un tribunal compétent ou en vertu d’un accord
écrit de séparation, la juste valeur marchande du bien au
moment du transfert est réputée nulle pour l’application
de l’alinéa (1)a). Toutefois, le présent paragraphe ne li-
mite en rien l’obligation du cédant découlant de la pré-
sente loi.
DIVISION 12
Evidence and Procedure
Service
81 (1) If the Minister is authorized or required to serve,
issue or send a notice or other document on or to a per-
son that carries on business under a name or style other
than the name of the person, the notice or document may
be addressed to the name or style under which the per-
son carries on business.
SECTION 12
Procédure et preuve
Signification
81 (1) L’avis ou autre document que le ministre a l’auto-
risation ou l’obligation de signifier, de délivrer ou d’en-
voyer à une personne qui exploite une entreprise sous
une dénomination ou raison sociale autre que son nom
peut être adressé à cette dénomination ou raison.
2021-2022 91 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Personal service
(2) If the Minister is authorized or required to serve, is-
sue or send a notice or other document on or to a person
that carries on a business, the notice or document is
deemed to have been validly served, issued or sent if it is
left with an adult person employed at the place of busi-
ness of the person.
Timing of receipt
82 (1) For the purposes of this Act and subject to sub-
section (2), anything sent by confirmed delivery service
or first class mail is deemed to have been received by the
person to which it was sent on the day it was mailed or
sent.
Timing of payment
(2) A person that is required under this Act to pay an
amount is deemed not to have paid it until it is received
by the Receiver General.
Proof of service
83 (1) If, under this Act, provision is made for sending
by confirmed delivery service a request for information, a
notice or a demand, an affidavit of an officer of the
Canada Revenue Agency, sworn before a commissioner
or other person authorized to take affidavits, is evidence
of the sending and of the request, notice or demand if the
affidavit sets out that
(a) the officer has knowledge of the facts in the partic-
ular case;
(b) the request, notice or demand was sent by con-
firmed delivery service on a specified day to a specified
person and address; and
(c) the officer identifies as exhibits attached to the af-
fidavit a true copy of the request, notice or demand
and
(i) if the request, notice, or demand was sent by
registered or certified mail, the post office certifi-
cate of registration of the letter or a true copy of the
relevant portion of the certificate, and
(ii) in any other case, the record that the document
has been sent or a true copy of the relevant portion
of the record.
Signification à personne
(2) L’avis ou autre document que le ministre a l’autorisa-
tion ou l’obligation de signifier, de délivrer ou d’envoyer
à une personne qui exploite une entreprise est réputé va-
lablement signifié, délivré ou envoyé s’il est laissé à une
personne adulte employée à l’établissement de la per-
sonne.
Date de réception
82 (1) Pour l’application de la présente loi, tout envoi en
première classe ou par service de messagerie est réputé
reçu par le destinataire à la date de sa mise à la poste ou
de son envoi.
Proof of personal service
(2) If, under this Act, provision is made for personal ser-
vice of a request for information, a notice or a demand,
an affidavit of an officer of the Canada Revenue Agency,
sworn before a commissioner or other person authorized
Date de paiement
(2) Le paiement qu’une personne est tenue de faire en
application de la présente loi n’est réputé effectué que le
jour de sa réception par le receveur général.
Preuve de signification
83 (1) Si la présente loi prévoit l’envoi par service de
messagerie d’une demande de renseignements, d’un avis
ou d’une mise en demeure, l’affidavit d’un préposé de
l’Agence du revenu du Canada, souscrit en présence d’un
commissaire aux serments ou d’une autre personne auto-
risée à le recevoir, constitue la preuve de l’envoi ainsi que
de la demande, de l’avis ou de la mise en demeure, s’il in-
dique, à la fois :
a) que le préposé est au courant des faits en l’espèce;
b) que la demande, l’avis ou la mise en demeure a été
envoyé par service de messagerie à une date indiquée
à une personne dont les nom et adresse sont précisés;
c) que le préposé identifie, comme pièce jointe à l’affi-
davit, une copie conforme de la demande, de l’avis ou
de la mise en demeure et, selon le cas :
(i) si la demande, l’avis ou la mise en demeure a été
envoyé par courrier recommandé ou certifié, le cer-
tificat de recommandation remis par le bureau de
poste ou une copie conforme de la partie pertinente
du certificat,
(ii) sinon, la preuve documentaire de l’envoi du do-
cument ou une copie conforme de la partie perti-
nente de la preuve.
Preuve de la signification à personne
(2) Si la présente loi prévoit la signification à personne
d’une demande de renseignements, d’un avis ou d’une
mise en demeure, l’affidavit d’un préposé de l’Agence du
revenu du Canada, souscrit en présence d’un
2021-2022 92 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
to take affidavits, is evidence of the personal service and
of the request, notice or demand if the affidavit sets out
that
(a) the officer has knowledge of the facts in the partic-
ular case;
(b) the request, notice or demand was served person-
ally on a named day on the person to whom it was di-
rected; and
(c) the officer identifies as an exhibit attached to the
affidavit a true copy of the request, notice or demand.
Proof of electronic delivery
(3) If, under this Act, provision is made for sending a no-
tice to a person electronically, an affidavit of an officer of
the Canada Revenue Agency, sworn before a commis-
sioner or other person authorized to take affidavits, is ev-
idence of the sending and of the notice if the affidavit sets
out that
(a) the officer has knowledge of the facts in the partic-
ular case;
(b) the notice was sent electronically to the person on
a named day; and
(c) the officer identifies as exhibits attached to the af-
fidavit copies of
(i) an electronic message confirming that the notice
has been sent to the person, and
(ii) the notice.
Proof — failure to comply
(4) If, under this Act, a person is required to make a re-
turn, an application, a statement, an answer or a certifi-
cate, an affidavit of an officer of the Canada Revenue
Agency, sworn before a commissioner or other person
authorized to take affidavits, setting out that the officer
has charge of the appropriate records and that, after a
careful examination and search of the records, the officer
has been unable to find in a given case that the return,
application, statement, answer or certificate has been
made by that person, is evidence that in that case the
person did not make the return, application, statement,
answer or certificate.
Proof — time of compliance
(5) If, under this Act, a person is required to make a re-
turn, an application, a statement, an answer or a certifi-
cate, an affidavit of an officer of the Canada Revenue
Agency, sworn before a commissioner or other person
authorized to take affidavits, setting out that the officer
commissaire aux serments ou d’une autre personne auto-
risée à le recevoir, constitue la preuve de la signification à
personne ainsi que de la demande, de l’avis ou de la mise
en demeure, s’il indique, à la fois :
a) que le préposé est au courant des faits en l’espèce;
b) que la demande, l’avis ou la mise en demeure a été
signifié à l’intéressé à une date indiquée;
c) que le préposé identifie, comme pièce jointe à l’affi-
davit, une copie conforme de la demande, de l’avis ou
de la mise en demeure.
Preuve de livraison par voie électronique
(3) Si la présente loi prévoit l’envoi par voie électronique
d’un avis à une personne, l’affidavit d’un préposé de
l’Agence du revenu du Canada, souscrit en présence d’un
commissaire aux serments ou autre personne autorisée à
le recevoir, constitue la preuve de l’envoi et de l’avis si
l’affidavit indique à la fois :
a) que le préposé est au courant des faits en l’espèce;
b) que l’avis a été envoyé par voie électronique à la
personne à une date indiquée;
c) que le préposé identifie, comme pièces jointes à
l’affidavit, une copie :
(i) d’une part, d’un message électronique confir-
mant que l’avis a été envoyé à la personne,
(ii) d’autre part, de l’avis.
Preuve de non-observation
(4) Si la présente loi oblige une personne à faire une dé-
claration, une demande, un état, une réponse ou un certi-
ficat, l’affidavit d’un préposé de l’Agence du revenu du
Canada, souscrit en présence d’un commissaire aux ser-
ments ou d’une autre personne autorisée à le recevoir, in-
diquant qu’il a la charge des registres pertinents et que,
après avoir fait un examen attentif de ceux-ci, il lui a été
impossible de constater, dans un cas particulier, que la
déclaration, la demande, l’état, la réponse ou le certificat
a été fait par la personne, constitue la preuve que la per-
sonne n’a pas fait de déclaration, de demande, d’état, de
réponse ou de certificat.
Preuve — moment de l’observation
(5) Si la présente loi oblige une personne à faire une dé-
claration, une demande, un état, une réponse ou un certi-
ficat, l’affidavit d’un préposé de l’Agence du revenu du
Canada, souscrit en présence d’un commissaire aux ser-
ments ou d’une autre personne autorisée à le recevoir,
2021-2022 93 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
has charge of the appropriate records and that, after a
careful examination of the records, the officer has found
that the return, application, statement, answer or certifi-
cate was filed or made on a particular day, is evidence
that it was filed or made on that day.
Proof of documents
(6) An affidavit of an officer of the Canada Revenue
Agency, sworn before a commissioner or other person
authorized to take affidavits, setting out that the officer
has charge of the appropriate records and that a docu-
ment attached to the affidavit is a document or true copy
of a document, or a printout of an electronic document,
made by or on behalf of the Minister or a person exercis-
ing the powers of the Minister or by or on behalf of a per-
son, is evidence of the nature and contents of the docu-
ment.
Proof of no appeal
(7) An affidavit of an officer of the Canada Revenue
Agency, sworn before a commissioner or other person
authorized to take affidavits, setting out that the officer
has charge of the appropriate records and has knowledge
of the practice of the Canada Revenue Agency and that an
examination of the records shows that a notice of assess-
ment was mailed or otherwise sent to a person on a par-
ticular day under this Act and that, after a careful exami-
nation and search of the records, the officer has been un-
able to find that a notice of objection or of appeal from
the assessment, as the case may be, was received within
the time allowed, is evidence of the statements contained
in the affidavit.
Presumption
(8) If evidence is offered under this section by an affi-
davit from which it appears that the person making the
affidavit is an officer of the Canada Revenue Agency, it is
not necessary to prove the signature of the person or that
the person is such an officer, nor is it necessary to prove
the signature or official character of the person before
whom the affidavit was sworn.
Proof of documents
(9) Every document purporting to have been executed
under or in the course of the administration or enforce-
ment of this Act over the name in writing of the Minister,
the Commissioner or an officer authorized to exercise the
powers or perform the duties of the Minister under this
Act is deemed to be a document signed, made and issued
by the Minister, the Commissioner or the officer, unless
it has been called into question by the Minister or a
indiquant qu’il a la charge des registres pertinents et que,
après avoir fait un examen attentif de ceux-ci, il a consta-
té que la déclaration, la demande, l’état, la réponse ou le
certificat a été fait un jour donné, constitue la preuve que
ces documents ont été faits ce jour-là.
Preuve de documents
(6) L’affidavit d’un préposé de l’Agence du revenu du
Canada, souscrit en présence d’un commissaire aux ser-
ments ou d’une autre personne autorisée à le recevoir, in-
diquant qu’il a la charge des registres pertinents et qu’un
document qui est annexé à l’affidavit est un document ou
la copie conforme d’un document, ou l’imprimé d’un do-
cument électronique, fait par le ministre ou pour le mi-
nistre ou une autre personne exerçant les pouvoirs de ce-
lui-ci, ou par une personne ou pour une personne, consti-
tue la preuve de la nature et du contenu du document.
Preuve de l’absence d’appel
(7) Constitue la preuve des énonciations qui y sont ren-
fermées l’affidavit d’un préposé de l’Agence du revenu du
Canada ou de l’Agence des services frontaliers du
Canada, souscrit en présence d’un commissaire aux ser-
ments ou d’une autre personne autorisée à le recevoir, in-
diquant qu’il a la charge des registres pertinents, qu’il
connaît la pratique de l’Agence du revenu du Canada ou
de l’Agence des services frontaliers du Canada, selon le
cas, et qu’un examen des registres démontre qu’un avis
de cotisation a été posté ou autrement envoyé à une per-
sonne un jour donné, en application de la présente loi, et
que, après avoir fait un examen attentif des registres, il
lui a été impossible de constater qu’un avis d’opposition
ou d’appel concernant la cotisation a été reçu dans le dé-
lai imparti à cette fin.
Signature ou fonction réputée
(8) Si une preuve est donnée en vertu du présent article
par un affidavit d’où il ressort que la personne le souscri-
vant est un préposé de l’Agence du revenu du Canada ou
de l’Agence des services frontaliers du Canada, il n’est
pas nécessaire d’attester sa signature ou de prouver qu’il
est un tel préposé, ni d’attester la signature ou la qualité
de la personne en présence de laquelle l’affidavit a été
souscrit.
Preuve de documents
(9) Tout document paraissant avoir été établi en applica-
tion de la présente loi, ou dans le cadre de son applica-
tion ou exécution, au nom ou sous l’autorité du ministre,
du commissaire ou d’un préposé autorisé à exercer les
pouvoirs ou les fonctions du ministre en application de la
présente loi est réputé être un document signé, fait et dé-
livré par le ministre, le commissaire ou le préposé, sauf
s’il a été mis en doute par le ministre ou par une autre
2021-2022 94 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
person acting for the Minister or for Her Majesty in right
of Canada.
Mailing or sending date
(10) For the purposes of this Act, if a notice or demand
that the Minister is required or authorized under this Act
to send to a person is mailed, or sent electronically, to the
person, the day of mailing or sending, as the case may be,
is presumed to be the date of the notice or demand.
Date electronic notice sent
(11) For the purposes of this Act, if a notice or other
communication in respect of a person is made available
in electronic format such that it can be read or perceived
by a person or a computer system or other similar device,
the notice or other communication is presumed to be
sent to the person and received by the person on the date
that an electronic message is sent, to the electronic ad-
dress most recently provided before that date by the per-
son to the Minister for the purposes of this subsection,
informing the person that a notice or other communica-
tion requiring the person’s immediate attention is avail-
able in the person’s secure electronic account. A notice or
other communication is considered to be made available
if it is posted by the Minister in the person’s secure elec-
tronic account and the person has authorized that notices
or other communications may be made available in this
manner and has not before that date revoked that autho-
rization in a manner specified by the Minister.
personne agissant pour lui ou pour Sa Majesté du chef du
Canada.
Date d’envoi ou de mise à la poste
(10) Pour l’application de la présente loi, la date d’envoi
ou de mise à la poste d’un avis ou d’une mise en demeure
que le ministre a l’obligation ou l’autorisation, en vertu
de la présente loi, d’envoyer par voie électronique ou de
poster à une personne est présumée être la date de l’avis
ou de la mise en demeure.
Date d’envoi d’un avis électronique
(11) Pour l’application de la présente loi, tout avis ou
autre communication concernant une personne qui est
rendu disponible sous une forme électronique pouvant
être lue ou perçue par une personne ou par un système
informatique ou un dispositif semblable est présumé être
envoyé à la personne, et être reçu par elle, à la date où un
message électronique est envoyé — à l’adresse électro-
nique la plus récente que la personne a fournie avant
cette date au ministre pour l’application du présent para-
graphe — pour l’informer qu’un avis ou une autre com-
munication nécessitant son attention immédiate se
trouve dans son compte électronique sécurisé. Un avis ou
une autre communication est considéré comme étant
rendu disponible s’il est affiché par le ministre sur le
compte électronique sécurisé de la personne et si celle-ci
a donné son autorisation pour que des avis ou d’autres
communications soient rendus disponibles de cette ma-
nière et n’a pas retiré cette autorisation avant cette date
selon les modalités établies par le ministre.
Date d’établissement de la cotisation
(12) Lorsqu’un avis de cotisation a été envoyé par le mi-
nistre de la manière prévue par la présente loi, la cotisa-
tion est réputée établie à la date d’envoi de l’avis.
Date assessment made
(12) If a notice of assessment has been sent by the Min-
ister as required under this Act, the assessment is
deemed to have been made on the day of sending of the
notice of assessment.
Proof of return
(13) In a prosecution for an offence under this Act, the
production of a return, an application, a certificate, a
statement or an answer required under this Act, purport-
ing to have been filed or delivered by or on behalf of the
person charged with the offence or to have been made or
signed by or on behalf of that person, is evidence that the
return, application, certificate, statement or answer was
filed or delivered by or on behalf of that person or was
made or signed by or on behalf of that person.
Proof of return — printouts
(14) For the purposes of this Act, a document presented
by the Minister purporting to be a printout of the infor-
mation in respect of a person received under section 9 by
the Minister is to be received as evidence and, in the
Preuve de déclaration
(13) Dans toute poursuite concernant une infraction à la
présente loi, la production d’une déclaration, d’une de-
mande, d’un état, d’une réponse ou d’un certificat, prévu
par la présente loi, donné comme ayant été fait par l’ac-
cusé ou pour son compte constitue la preuve que la décla-
ration, la demande, l’état, la réponse ou le certificat a été
fait par l’accusé ou pour son compte.
Preuve de production — imprimés
(14) Pour l’application de la présente loi, un document
présenté par le ministre comme étant un imprimé des
renseignements concernant une personne qu’il a reçu en
vertu de l’article 9 est admissible en preuve et fait foi,
2021-2022 95 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Section 10 Article 10
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
absence of evidence to the contrary, is proof of the return
filed by the person under that section.
Proof of return — production of returns
(15) In a proceeding under this Act, the production of a
return, an application, a certificate, a statement or an an-
swer required under this Act, purporting to have been
filed, delivered, made or signed by or on behalf of a per-
son, is evidence that the return, application, certificate,
statement or answer was filed, delivered, made or signed
by or on behalf of that person.
Evidence
(16) In a prosecution for an offence under this Act, an af-
fidavit of an officer of the Canada Revenue Agency,
sworn before a commissioner or other person authorized
to take affidavits, setting out that the officer has charge of
the appropriate records and that an examination of the
records shows that an amount required under this Act to
be paid to the Receiver General has not been received by
the Receiver General, is evidence of the statements con-
tained in the affidavit.
sauf preuve contraire, de la déclaration produite par la
personne en vertu de cet article.
Preuve de production — déclarations
(15) Dans toute procédure mise en œuvre en application
de la présente loi, la production d’une déclaration, d’une
demande, d’un état, d’une réponse ou d’un certificat pré-
vu par la présente loi, donné comme ayant été produit, li-
vré, fait ou signé par une personne ou pour son compte
constitue la preuve que la déclaration, la demande, l’état,
la réponse ou le certificat a été produit, livré, fait ou signé
par la personne ou pour son compte.
Preuve
(16) Dans toute poursuite concernant une infraction à la
présente loi, l’affidavit d’un préposé de l’Agence du reve-
nu du Canada, souscrit en présence d’un commissaire
aux serments ou d’une autre personne autorisée à le rece-
voir, indiquant qu’il a la charge des registres pertinents et
qu’un examen des registres démontre que le receveur gé-
néral n’a pas reçu la somme au titre des sommes dont la
présente loi exige le versement constitue la preuve des
énonciations qui y sont renfermées.
PART 8
Regulations
Regulations
84 (1) The Governor in Council may make regulations
(a) prescribing anything that, by this Act, is to be pre-
scribed or is to be determined or regulated by regula-
tion;
(b) requiring any person to provide any information,
including the person’s name and address to any class
of persons required to make a return containing that
information;
(c) requiring any individual to provide the Minister
with the individual’s Social Insurance Number;
(d) requiring any class of persons to make returns re-
specting any class of information required in connec-
tion with the administration or enforcement of this
Act;
(e) distinguishing among any class of persons, proper-
ty or activities; and
(f) generally to carry out the purposes and provisions
of this Act.
PARTIE 8
Règlements
Règlements
84 (1) Le gouverneur en conseil peut, par règlement :
a) prendre toute mesure d’ordre réglementaire prévue
par la présente loi;
b) obliger une personne à communiquer des rensei-
gnements, notamment ses nom et adresse à une caté-
gorie de personnes tenue de produire une déclaration
les renfermant;
c) obliger une personne à aviser le ministre de son nu-
méro d’assurance sociale;
d) obliger une catégorie de personnes à produire les
déclarations relatives à toute catégorie de renseigne-
ments nécessaires à l’application ou à l’exécution de la
présente loi;
e) faire la distinction entre des catégories de per-
sonnes, de biens ou d’activités;
f) prendre toute mesure d’application de la présente
loi.
2021-2022 96 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Enactment of Act Sections 10-12 Articles 10-12
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Édiction de la loi
Effect
(2) A regulation made under this Act is to have effect
from the date it is published in the Canada Gazette or at
any time after that time as may be specified in the regula-
tion, unless the regulation provides otherwise and
(a) has a non-tightening effect only;
(b) corrects an ambiguous or deficient enactment that
was not in accordance with the objects of this Act;
(c) is consequential on an amendment to this Act that
is applicable before the date the regulation is pub-
lished in the Canada Gazette; or
(d) gives effect to a public announcement, in which
case the regulation must not, except if any of para-
graphs (a) to (c) apply, have effect before the date the
announcement was made.
Incorporation by reference — limitation removed
85 The limitation set out in paragraph 18.1(2)(a) of the
Statutory Instruments Act, to the effect that a document
must be incorporated as it exists on a particular date,
does not apply to any power to make regulations under
this Act.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
Consequential Amendments
R.S., c. A-1
Access to Information Act
11 (1) Schedule II to the Access to Information
Act is amended by adding, in alphabetical order,
a reference to
Underused Housing Tax Act
Loi sur la taxe sur les logements sous-utilisés
and a corresponding reference to “section 32”.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
R.S., c. B-3; 1992, c. 27, s. 2
Bankruptcy and Insolvency Act
12 (1) Subsection 149(3) of the Bankruptcy and
Insolvency Act is amended by striking out “and”
at the end of paragraph (f), by adding “and” at
Effet
(2) Les règlements pris en application de la présente loi
ont effet à compter de leur publication dans la Gazette du
Canada ou après s’ils le prévoient. Un règlement peut
toutefois avoir un effet rétroactif, s’il comporte une dis-
position en ce sens, dans les cas suivants :
a) il n’augmente pas le fardeau de la taxe;
b) il corrige une disposition ambiguë ou erronée, non
conforme à un objet de la présente loi;
c) il procède d’une modification de la présente loi ap-
plicable avant qu’il ne soit publié dans la Gazette du
Canada;
d) il met en œuvre une mesure annoncée publique-
ment, auquel cas, si aucun des alinéas a) à c) ne s’ap-
plique par ailleurs, il ne peut avoir d’effet avant la date
où la mesure est ainsi annoncée.
Incorporation par renvoi — élimination de la
restriction
85 La restriction prévue à l’alinéa 18.1(2)a) de la Loi sur
les textes réglementaires, selon laquelle un document
doit être incorporé dans sa version à une date donnée, ne
s’applique pas au pouvoir de prendre un règlement en
application de la présente loi.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
Modifications corrélatives
L.R., ch. A-1
Loi sur l’accès à l’information
11 (1) L’annexe II de la Loi sur l’accès à l’infor-
mation est modifiée par adjonction, selon l’ordre
alphabétique, de ce qui suit :
Loi sur la taxe sur les logements sous-utilisés
Underused Housing Tax Act
ainsi que de la mention « article 32 » en regard de
ce titre de loi.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
L.R., ch. B-3; 1992, ch. 27, art. 2
Loi sur la faillite et l’insolvabilité
12 (1) Le paragraphe 149(3) de la Loi sur la
faillite et l’insolvabilité est modifié par adjonc-
tion, après l’alinéa g), de ce qui suit :
2021-2022 97 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PART 2 Underused Housing Tax Act PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Consequential Amendments Modifications corrélatives
Bankruptcy and Insolvency Act Loi sur la faillite et l’insolvabilité
Sections 12-15 Articles 12-15
the end of paragraph (g) and by adding the fol-
lowing after that paragraph:
(h) the Underused Housing Tax Act.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
R.S., c. C-46
Criminal Code
13 Paragraph 462.48(2)(c) of the Criminal Code is
replaced by the following:
(c) the type of information or book, record, writing,
return or other document obtained by or on behalf of
the Minister of National Revenue for the purposes of
Part IX of the Excise Tax Act, the Income Tax Act, the
Excise Act, 2001 or the Underused Housing Tax Act to
which access is sought or that is proposed to be exam-
ined or communicated; and
R.S., c. E-15
Excise Tax Act
14 (1) Section 77 of the Excise Tax Act is replaced
by the following:
Restriction on refunds and credits
77 A refund shall not be paid, and a credit shall not be
allowed, to a person under this Act until the person has
filed with the Minister all returns and other records of
which the Minister has knowledge that are required to be
filed under the Excise Tax Act, the Income Tax Act, the
Air Travellers Security Charge Act, the Excise Act, 2001
or the Underused Housing Tax Act.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
15 (1) Subsection 229(2) of the Act is replaced by
the following:
Restriction
(2) A net tax refund for a reporting period of a person
shall not be paid to the person under subsection (1) at
any time, unless all returns of which the Minister has
knowledge and that are required to be filed at or before
that time by the person under this Act, the Income Tax
Act, the Air Travellers Security Charge Act, the Excise
h) la Loi sur la taxe sur les logements sous-utilisés.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
L.R., ch. C-46
Code criminel
13 L’alinéa 462.48(2)c) du Code criminel est rem-
placé par ce qui suit :
c) désignation du genre de renseignements ou de do-
cuments — livre, dossier, texte, rapport ou autre docu-
ment — qu’a obtenus le ministre du Revenu national
— ou qui ont été obtenus en son nom — dans le cadre
de l’application de la partie IX de la Loi sur la taxe
d’accise, de la Loi de l’impôt sur le revenu, de la Loi de
2001 sur l’accise ou de la Loi sur la taxe sur les loge-
ments sous-utilisés et dont la communication ou l’exa-
men est demandé;
L.R., ch. E-15
Loi sur la taxe d’accise
14 (1) L’article 77 de la Loi sur la taxe d’accise
est remplacé par ce qui suit :
Restriction
77 Un montant n’est remboursé à une personne, et un
crédit ne lui est accordé, en vertu de la présente loi
qu’une fois présentés au ministre l’ensemble des déclara-
tions et autres registres dont il a connaissance et qui sont
à produire en vertu de la Loi sur la taxe d’accise, de la
Loi de l’impôt sur le revenu, de la Loi sur le droit pour la
sécurité des passagers du transport aérien, de la Loi de
2001 sur l’accise et de la Loi sur la taxe sur les logements
sous-utilisés.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
15 (1) Le paragraphe 229(2) de la même loi est
remplacé par ce qui suit :
Restriction
(2) Le remboursement de taxe nette pour la période de
déclaration d’une personne ne lui est versé en vertu du
paragraphe (1) à un moment donné que si toutes les dé-
clarations dont le ministre a connaissance et que la per-
sonne avait à produire au plus tard à ce moment en ap-
plication de la présente loi, de la Loi de l’impôt sur le re-
venu, de la Loi sur le droit pour la sécurité des passagers
2021-2022 98 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PART 2 Underused Housing Tax Act PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Consequential Amendments Modifications corrélatives
Excise Tax Act Loi sur la taxe d’accise
Sections 15-18 Articles 15-18
Act, 2001 and the Underused Housing Tax Act have been
filed with the Minister.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
16 (1) Subsection 230(2) of the Act is replaced by
the following:
Restriction
(2) An amount paid on account of net tax for a reporting
period of a person shall not be refunded to the person
under subsection (1) at any time, unless all returns of
which the Minister has knowledge and that are required
to be filed at or before that time by the person under this
Act, the Income Tax Act, the Air Travellers Security
Charge Act, the Excise Act, 2001 and the Underused
Housing Tax Act have been filed with the Minister.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
17 (1) Subparagraph 238.1(2)(c)(iii) of the Act is
replaced by the following:
(iii) all amounts required under this Act (other
than this Part), sections 21 and 33 of the Canada
Pension Plan, the Excise Act, the Customs Act, the
Income Tax Act, section 82 and Part VII of the Em-
ployment Insurance Act, the Customs Tariff, the
Excise Act, 2001 and the Underused Housing Tax
Act to be remitted or paid before that time by the
registrant have been remitted or paid, and
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
18 (1) Section 263.02 of the Act is replaced by the
following:
Restriction on rebate
263.02 A rebate under this Part shall not be paid to a
person at any time, unless all returns of which the Minis-
ter has knowledge and that are required to be filed at or
before that time by the person under this Act, the Income
Tax Act, the Air Travellers Security Charge Act, the Ex-
cise Act, 2001 and the Underused Housing Tax Act have
been filed with the Minister.
du transport aérien, de la Loi de 2001 sur l’accise et de la
Loi sur la taxe sur les logements sous-utilisés ont été
présentées au ministre.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
16 (1) Le paragraphe 230(2) de la même loi est
remplacé par ce qui suit :
Restriction
(2) Un montant payé au titre de la taxe nette d’une per-
sonne pour sa période de déclaration ne lui est rembour-
sé en vertu du paragraphe (1) à un moment donné que si
toutes les déclarations dont le ministre a connaissance et
que la personne avait à produire au plus tard à ce mo-
ment en application de la présente loi, de la Loi de l’im-
pôt sur le revenu, de la Loi sur le droit pour la sécurité
des passagers du transport aérien, de la Loi de 2001 sur
l’accise et de la Loi sur la taxe sur les logements sous-
utilisés ont été présentées au ministre.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
17 (1) Le sous-alinéa 238.1(2)c)(iii) de la même loi
est remplacé par ce qui suit :
(iii) les montants à verser ou à payer par l’inscrit
avant ce moment en conformité avec la présente loi,
sauf la présente partie, les articles 21 et 33 du Ré-
gime de pensions du Canada, la Loi sur l’accise, la
Loi sur les douanes, la Loi de l’impôt sur le revenu,
l’article 82 et la partie VII de la Loi sur l’assurance-
emploi, le Tarif des douanes, la Loi de 2001 sur
l’accise et la Loi sur la taxe sur les logements sous-
utilisés ont été versés ou payés,
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
18 (1) L’article 263.02 de la même loi est remplacé
par ce qui suit :
Restriction
263.02 Le montant d’un remboursement prévu par la
présente partie n’est versé à une personne à un moment
donné que si toutes les déclarations dont le ministre a
connaissance et que la personne avait à produire au plus
tard à ce moment en application de la présente loi, de la
Loi de l’impôt sur le revenu, de la Loi sur le droit pour la
sécurité des passagers du transport aérien, de la Loi de
2001 sur l’accise et de la Loi sur la taxe sur les logements
sous-utilisés ont été présentées au ministre.
2021-2022 99 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PART 2 Underused Housing Tax Act PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Consequential Amendments Modifications corrélatives
Excise Tax Act Loi sur la taxe d’accise
Sections 18-21 Articles 18-21
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
19 (1) Subsection 296(7) of the Act is replaced by
the following:
Restriction on refunds
(7) An amount under this section shall not be refunded
to a person at any time, unless all returns of which the
Minister has knowledge and that are required to be filed
at or before that time by the person under this Act, the
Income Tax Act, the Air Travellers Security Charge Act,
the Excise Act, 2001 and the Underused Housing Tax Act
have been filed with the Minister.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
R.S., c. F-11
Financial Administration Act
20 (1) Paragraph 155.2(6)(c) of the Financial Ad-
ministration Act is replaced by the following:
(c) an amount owing by a person to Her Majesty in
right of Canada, or payable by the Minister of National
Revenue to any person, under the Excise Tax Act, the
Income Tax Act, the Air Travellers Security Charge
Act, the Excise Act, 2001, the Softwood Lumber Prod-
ucts Export Charge Act, 2006 or the Underused Hous-
ing Tax Act.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
R.S., c. T-2
Tax Court of Canada Act
21 (1) Subsection 12(1) of the Tax Court of
Canada Act is replaced by the following:
Jurisdiction
12 (1) The Court has exclusive original jurisdiction to
hear and determine references and appeals to the Court
on matters arising under the Canada Pension Plan, the
Cultural Property Export and Import Act, Part IX of the
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
19 (1) Le paragraphe 296(7) de la même loi est
remplacé par ce qui suit :
Restriction
(7) Un montant prévu au présent article n’est remboursé
à une personne à un moment donné que si toutes les dé-
clarations dont le ministre a connaissance et que la per-
sonne avait à produire au plus tard à ce moment en ap-
plication de la présente loi, de la Loi de l’impôt sur le re-
venu, de la Loi sur le droit pour la sécurité des passagers
du transport aérien, de la Loi de 2001 sur l’accise et de la
Loi sur la taxe sur les logements sous-utilisés ont été
présentées au ministre.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
L.R., ch. F-11
Loi sur la gestion des finances
publiques
20 (1) L’alinéa 155.2(6)c) de la Loi sur la gestion
des finances publiques est remplacé par ce qui
suit :
c) aux sommes à payer par toute personne à Sa Ma-
jesté du chef du Canada ou à payer par le ministre du
Revenu national à toute personne au titre de la Loi sur
la taxe d’accise, de la Loi de l’impôt sur le revenu, de
la Loi sur le droit pour la sécurité des passagers du
transport aérien, de la Loi de 2001 sur l’accise, de la
Loi de 2006 sur les droits d’exportation de produits de
bois d’œuvre ou de la Loi sur la taxe sur les logements
sous-utilisés.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
L.R., ch. T-2
Loi sur la Cour canadienne de
l’impôt
21 (1) Le paragraphe 12(1) de la Loi sur la Cour
canadienne de l’impôt est remplacé par ce qui
suit :
Compétence
12 (1) La Cour a compétence exclusive pour entendre
les renvois et les appels portés devant elle sur les ques-
tions découlant de l’application du Régime de pensions
du Canada, de la Loi sur l’exportation et l’importation
2021-2022 100 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Consequential Amendments Modifications corrélatives
Tax Court of Canada Act Sections 21-22 Articles 21-22
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Loi sur la Cour canadienne de l’impôt
Excise Tax Act, the Old Age Security Act, the Petroleum
and Gas Revenue Tax Act, Part V.1 of the Customs Act,
the Income Tax Act, the Employment Insurance Act, the
Air Travellers Security Charge Act, the Excise Act, 2001,
the Softwood Lumber Products Export Charge Act, 2006,
the Disability Tax Credit Promoters Restrictions Act,
Part 1 of the Greenhouse Gas Pollution Pricing Act and
the Underused Housing Tax Act when references or ap-
peals to the Court are provided for in those Acts.
(2) Subsections 12(3) and (4) of the Act are re-
placed by the following:
Further jurisdiction
(3) The Court has exclusive original jurisdiction to hear
and determine questions referred to it under section 310
or 311 of the Excise Tax Act, section 97.58 of the Customs
Act, section 173 or 174 of the Income Tax Act, section 51
or 52 of the Air Travellers Security Charge Act, section
204 or 205 of the Excise Act, 2001, section 62 or 63 of the
Softwood Lumber Products Export Charge Act, 2006,
section 121 or 122 of the Greenhouse Gas Pollution Pric-
ing Act or section 45 or 46 of the Underused Housing Tax
Act.
Extensions of time
(4) The Court has exclusive original jurisdiction to hear
and determine applications for extensions of time under
subsection 28(1) of the Canada Pension Plan, section
33.2 of the Cultural Property Export and Import Act,
section 304 or 305 of the Excise Tax Act, section 97.51 or
97.52 of the Customs Act, section 166.2 or 167 of the In-
come Tax Act, subsection 103(1) of the Employment In-
surance Act, section 45 or 47 of the Air Travellers Securi-
ty Charge Act, section 197 or 199 of the Excise Act, 2001,
section 115 or 117 of the Greenhouse Gas Pollution Pric-
ing Act or section 39 or 41 of the Underused Housing Tax
Act.
(3) Subsections (1) and (2) come into force, or are
deemed to have come into force, on January 1,
2022.
22 (1) Paragraph 18.29(3)(a) of the Act is amend-
ed by striking out “or” at the end of subpara-
graph (vii), by replacing “and” at the end of
de biens culturels, de la partie IX de la Loi sur la taxe
d’accise, de la Loi sur la sécurité de la vieillesse, de la Loi
de l’impôt sur les revenus pétroliers, de la partie V.1 de
la Loi sur les douanes, de la Loi de l’impôt sur le revenu,
de la Loi sur l’assurance-emploi, de la Loi sur le droit
pour la sécurité des passagers du transport aérien, de la
Loi de 2001 sur l’accise, de la Loi de 2006 sur les droits
d’exportation de produits de bois d’œuvre, de la Loi sur
les restrictions applicables aux promoteurs du crédit
d’impôt pour personnes handicapées, de la partie 1 de la
Loi sur la tarification de la pollution causée par les gaz
à effet de serre et de la Loi sur la taxe sur les logements
sous-utilisés, dans la mesure où ces lois prévoient un
droit de renvoi ou d’appel devant elle.
(2) Les paragraphes 12(3) et (4) de la même loi
sont remplacés par ce qui suit :
Autre compétence
(3) La Cour a compétence exclusive pour entendre les
questions qui sont portées devant elle en vertu des ar-
ticles 310 ou 311 de la Loi sur la taxe d’accise, de l’article
97.58 de la Loi sur les douanes, des articles 173 ou 174 de
la Loi de l’impôt sur le revenu, des articles 51 ou 52 de la
Loi sur le droit pour la sécurité des passagers du trans-
port aérien, des articles 204 ou 205 de la Loi de 2001 sur
l’accise, des articles 62 ou 63 de la Loi de 2006 sur les
droits d’exportation de produits de bois d’œuvre, des ar-
ticles 121 ou 122 de la Loi sur la tarification de la pollu-
tion causée par les gaz à effet de serre ou des articles 45
ou 46 de la Loi sur la taxe sur les logements sous-utilisés.
Prorogation des délais
(4) La Cour a compétence exclusive pour entendre toute
demande de prorogation de délai présentée en vertu du
paragraphe 28(1) du Régime de pensions du Canada, de
l’article 33.2 de la Loi sur l’exportation et l’importation
de biens culturels, des articles 304 et 305 de la Loi sur la
taxe d’accise, des articles 97.51 et 97.52 de la Loi sur les
douanes, des articles 166.2 et 167 de la Loi de l’impôt sur
le revenu, du paragraphe 103(1) de la Loi sur l’assu-
rance-emploi, des articles 45 et 47 de la Loi sur le droit
pour la sécurité des passagers du transport aérien, des
articles 197 et 199 de la Loi de 2001 sur l’accise, des ar-
ticles 115 et 117 de la Loi sur la tarification de la pollu-
tion causée par les gaz à effet de serre ou des articles 39
et 41 de la Loi sur la taxe sur les logements sous-utilisés.
(3) Les paragraphes (1) et (2) entrent en vigueur,
ou sont réputés être entrés en vigueur, le 1er jan-
vier 2022.
22 (1) L’alinéa 18.29(3)a) de la même loi est modi-
fié par adjonction, après le sous-alinéa (viii), de
ce qui suit :
2021-2022 101 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Consequential Amendments Modifications corrélatives
Tax Court of Canada Act Sections 22-25 Articles 22-25
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Loi sur la Cour canadienne de l’impôt
subparagraph (viii) with “or” and by adding the
following after subparagraph (viii):
(ix) section 39 or 41 of the Underused Housing Tax
Act; and
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
23 (1) Subsection 18.31(2) of the Act is replaced
by the following:
Determination of a question
(2) If it is agreed under section 310 of the Excise Tax Act,
section 97.58 of the Customs Act, section 51 of the Air
Travellers Security Act, section 204 of the Excise Act,
2001, section 62 of the Softwood Lumber Products Ex-
port Act, 2006, section 121 of the Greenhouse Gas Pollu-
tion Pricing Act or section 45 of the Underused Housing
Tax Act that a question should be determined by the
Court, sections 17.1, 17.2 and 17.4 to 17.8 apply, with any
modifications that the circumstances require, in respect
of the determination of the question.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
24 (1) Subsection 18.32(2) of the Act is replaced
by the following:
Provisions applicable to determination of a question
(2) If an application has been made under section 311 of
the Excise Tax Act, section 52 of the Air Travellers Secu-
rity Charge Act, section 205 of the Excise Act, 2001, sec-
tion 63 of the Softwood Lumber Products Export Charge
Act, 2006, section 122 of the Greenhouse Gas Pollution
Pricing Act or section 46 of the Underused Housing Tax
Act for the determination of a question, the application
or determination of the question must, subject to sec-
tion 18.33, be determined in accordance with sections
17.1, 17.2 and 17.4 to 17.8, with any modifications that the
circumstances require.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
R.S., c. 1 (2nd Supp.)
Customs Act
25 (1) The description of B in paragraph
97.29(1)(a) of the Customs Act is replaced by the
following:
(ix) les articles 39 et 41 de la Loi sur la taxe sur les
logements sous-utilisés;
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
23 (1) Le paragraphe 18.31(2) de la même loi est
remplacé par ce qui suit :
Procédure générale
(2) Les articles 17.1, 17.2 et 17.4 à 17.8 s’appliquent, avec
les adaptations nécessaires, aux décisions sur les ques-
tions soumises à la Cour en vertu de l’article 310 de la Loi
sur la taxe d’accise, de l’article 97.58 de la Loi sur les
douanes, de l’article 51 de la Loi sur le droit pour la sécu-
rité des passagers du transport aérien, de l’article 204 de
la Loi de 2001 sur l’accise, de l’article 62 de la Loi de 2006
sur les droits d’exportation de produits de bois d’œuvre,
de l’article 121 de la Loi sur la tarification de la pollution
causée par les gaz à effet de serre ou de l’article 45 de la
Loi sur la taxe sur les logements sous-utilisés.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
24 (1) Le paragraphe 18.32(2) de la même loi est
remplacé par ce qui suit :
Dispositions applicables à la détermination d’une
question
(2) Les articles 17.1, 17.2 et 17.4 à 17.8 s’appliquent, sous
réserve de l’article 18.33 et avec les adaptations néces-
saires, à toute demande présentée à la Cour en vertu de
l’article 311 de la Loi sur la taxe d’accise, de l’article 52 de
la Loi sur le droit pour la sécurité des passagers du
transport aérien, de l’article 205 de la Loi de 2001 sur
l’accise, de l’article 63 de la Loi de 2006 sur les droits
d’exportation de produits de bois d’œuvre, de l’article
122 de la Loi sur la tarification de la pollution causée
par les gaz à effet de serre ou de l’article 46 de la Loi sur
la taxe sur les logements sous-utilisés et à la détermina-
tion de la question en cause.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
L.R., ch. 1 (2e suppl.)
Loi sur les douanes
25 (1) L’élément B de la formule figurant à l’ali-
néa 97.29(1)a) de la Loi sur les douanes est rem-
placé par ce qui suit :
2021-2022 102 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PART 2 Underused Housing Tax Act PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Consequential Amendments Modifications corrélatives
Customs Act Loi sur les douanes
Sections 25-28 Articles 25-28
B is the amount, if any, by which the amount as-
sessed the transferee under subsection 325(2) of
the Excise Tax Act, subsection 160(2) of the In-
come Tax Act, subsection 297(3) of the Excise Act,
2001 and subsection 80(3) of the Underused Hous-
ing Tax Act in respect of the property exceeds the
amount paid by the transferor in respect of the
amount so assessed, and
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
26 (1) Paragraph 107(5)(g.1) of the Act is replaced
by the following:
(g.1) an official of the Canada Revenue Agency solely
for a purpose relating to the administration or en-
forcement of the Canada Pension Plan, the Excise Act,
the Excise Tax Act, the Income Tax Act, the Employ-
ment Insurance Act, the Excise Act, 2001 or the Un-
derused Housing Tax Act;
B l’excédent éventuel du montant de la cotisation
établie à l’égard du cessionnaire en vertu du para-
graphe 325(2) de la Loi sur la taxe d’accise, du pa-
ragraphe 160(2) de la Loi de l’impôt sur le revenu,
du paragraphe 297(3) de la Loi de 2001 sur l’accise
et du paragraphe 80(3) de la Loi sur la taxe sur les
logements sous-utilisés relativement au bien sur
la somme payée par le cédant relativement à cette
cotisation;
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
26 (1) L’alinéa 107(5)g.1) de la même loi est rem-
placé par ce qui suit :
g.1) à un fonctionnaire de l’Agence du revenu du
Canada, uniquement pour l’application ou l’exécution
du Régime de pensions du Canada, de la Loi sur l’ac-
cise, de la Loi sur la taxe d’accise, de la Loi de l’impôt
sur le revenu, de la Loi sur l’assurance-emploi, de la
Loi de 2001 sur l’accise ou de la Loi sur la taxe sur les
logements sous-utilisés;
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
L.R., ch. 1 (5e suppl.)
Loi de l’impôt sur le revenu
27 (1) L’alinéa 18(1)t) de la Loi de l’impôt sur le
revenu est modifié par adjonction, après le sous-
alinéa (iii), de ce qui suit :
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
R.S., c. 1 (5th Supp.)
Income Tax Act
27 (1) Paragraph 18(1)(t) of the Income Tax Act is
amended by striking out “or” at the end of sub-
paragraph (ii), by adding “or” at the end of sub-
paragraph (iii) and by adding the following after
subparagraph (iii):
(iv) as interest under the Underused Housing Tax
Act;
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
28 (1) Subsection 164(2.01) of the Act is replaced
by the following:
Withholding of refunds
(2.01) The Minister shall not, in respect of a taxpayer,
refund, repay, apply to other debts or set-off amounts
under this Act at any time unless all returns of which the
Minister has knowledge and that are required to be filed
by the taxpayer at or before that time under this Act, the
Excise Tax Act, the Air Travellers Security Charge Act,
the Excise Act, 2001 and the Underused Housing Tax Act
have been filed with the Minister.
(iv) à titre d’intérêts en vertu de la Loi sur la taxe
sur les logements sous-utilisés;
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
28 (1) Le paragraphe 164(2.01) de la même loi est
remplacé par ce qui suit :
Restriction
(2.01) Une somme n’est remboursée, restituée, appli-
quée en réduction d’autres dettes ou compensée en vertu
de la présente loi à un moment donné relativement à un
contribuable qu’une fois présentées au ministre toutes les
déclarations dont celui-ci a connaissance et que le contri-
buable avait à produire au plus tard à ce moment en ap-
plication de la présente loi, de la Loi sur la taxe d’accise,
de la Loi sur le droit pour la sécurité des passagers du
transport aérien, de la Loi de 2001 sur l’accise et de la
Loi sur la taxe sur les logements sous-utilisés.
2021-2022 103 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PART 2 Underused Housing Tax Act PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Consequential Amendments Modifications corrélatives
Income Tax Act Loi de l’impôt sur le revenu
Sections 28-30 Articles 28-30
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
29 (1) The portion of subsection 221.2(2) of the
Act before paragraph (a) is replaced by the fol-
lowing:
Re-appropriation of amounts
(2) If a particular amount was appropriated to an
amount (in this section referred to as the “debt”) that is
or may become payable by a person under this Act, the
Excise Tax Act, the Air Travellers Security Charge Act,
the Excise Act, 2001 or the Underused Housing Tax Act,
the Minister may, on application by the person, appropri-
ate the particular amount, or a part of it, to another
amount that is or may become payable under any of
those Acts and, for the purposes of any of those Acts,
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
1999, c. 17; 2005, c. 38, s. 35
Canada Revenue Agency Act
30 (1) Paragraph (a) of the definition program
legislation in section 2 of the Canada Revenue
Agency Act is replaced by the following:
(a) that the Governor in Council or Parliament autho-
rizes the Minister, the Agency, the Commissioner or
an employee of the Agency to administer or enforce,
including
(i) the Excise Act,
(ii) the Excise Tax Act,
(iii) the Customs Act,
(iv) the Income Tax Act,
(v) the Air Travellers Security Charge Act,
(vi) the Excise Act, 2001,
(vii) the Softwood Lumber Products Export
Charge Act, 2006,
(viii) the Greenhouse Gas Pollution Pricing Act,
and
(ix) the Underused Housing Tax Act; or
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
29 (1) Le passage du paragraphe 221.2(2) de la
même loi précédant l’alinéa a) est remplacé par
ce qui suit :
Réaffectation de montants
(2) Lorsqu’un montant est affecté à une somme (appelée
« dette » au présent article) qui est ou peut devenir
payable par une personne en application de la présente
loi, de la Loi sur la taxe d’accise, de la Loi sur le droit
pour la sécurité des passagers du transport aérien, de la
Loi de 2001 sur l’accise ou de la Loi sur la taxe sur les lo-
gements sous-utilisés, le ministre peut, à la demande de
la personne, affecter tout ou partie du montant à une
autre somme qui est ou peut devenir ainsi payable. Pour
l’application de ces lois :
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
1999, ch. 17; 2005, ch. 38, art. 35
Loi sur l’Agence du revenu du
Canada
30 (1) L’alinéa a) de la définition de législation fis-
cale, à l’article 2 de la Loi sur l’Agence du revenu
du Canada, est remplacé par ce qui suit :
a) dont le ministre, l’Agence, le commissaire ou un
employé de l’Agence est autorisé par le Parlement ou
le gouverneur en conseil à assurer ou contrôler l’appli-
cation, notamment :
(i) la Loi sur l’accise,
(ii) la Loi sur la taxe d’accise,
(iii) la Loi sur les douanes,
(iv) la Loi de l’impôt sur le revenu,
(v) la Loi sur le droit pour la sécurité des passa-
gers du transport aérien,
(vi) la Loi de 2001 sur l’accise,
(vii) la Loi de 2006 sur les droits d’exportation de
produits de bois d’œuvre,
(viii) la Loi sur la tarification de la pollution cau-
sée par les gaz à effet de serre,
(ix) la Loi sur la taxe sur les logements sous-
utilisés;
2021-2022 104 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Consequential Amendments Modifications corrélatives
Canada Revenue Agency Act Sections 30-34 Articles 30-34
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Loi sur l’Agence du revenu du Canada
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
2002, c. 9, s. 5
Air Travellers Security Charge Act
31 (1) Subsection 40(4) of the Air Travellers Se-
curity Charge Act is replaced by the following:
Restriction
(4) A refund shall not be paid until the person has filed
with the Minister all returns and other records of which
the Minister has knowledge that are required to be filed
under this Act, the Excise Tax Act, the Income Tax Act,
the Excise Act, 2001 and the Underused Housing Tax
Act.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
2002 c. 22
Excise Act, 2001
32 (1) Paragraph 188(6)(a) of the Excise Act, 2001
is replaced by the following:
(a) the Minister under this Act, the Excise Act, the Ex-
cise Tax Act, the Income Tax Act, the Air Travellers
Security Charge Act and the Underused Housing Tax
Act; or
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
33 (1) Clause 188(7)(b)(ii)(A) of the Act is re-
placed by the following:
(A) the Minister under this Act, the Excise Act,
the Excise Tax Act, the Income Tax Act, the Air
Travellers Security Charge Act and the Under-
used Housing Tax Act, or
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
34 (1) Subsection 189(4) of the Act is replaced by
the following:
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
2002, ch. 9, art. 5
Loi sur le droit pour la sécurité des
passagers du transport aérien
31 (1) Le paragraphe 40(4) de la Loi sur le droit
pour la sécurité des passagers du transport aé-
rien est remplacé par ce qui suit :
Restriction
(4) Le remboursement n’est versé qu’une fois présentés
au ministre l’ensemble des déclarations et autres re-
gistres dont il a connaissance et qui sont à produire en
vertu de la présente loi, de la Loi sur la taxe d’accise, de
la Loi de l’impôt sur le revenu, de la Loi de 2001 sur l’ac-
cise et de la Loi sur la taxe sur les logements sous-
utilisés.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
2002, ch. 22
Loi de 2001 sur l’accise
32 (1) L’alinéa 188(6)a) de la Loi de 2001 sur l’ac-
cise est remplacé par ce qui suit :
a) soit au ministre en vertu de la présente loi, de la Loi
sur l’accise, de la Loi sur la taxe d’accise, de la Loi de
l’impôt sur le revenu, de la Loi sur le droit pour la sé-
curité des passagers du transport aérien et de la Loi
sur la taxe sur les logements sous-utilisés;
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
33 (1) La division 188(7)b)(ii)(A) de la même loi
est remplacée par ce qui suit :
(A) soit au ministre en vertu de la présente loi,
de la Loi sur l’accise, de la Loi sur la taxe d’ac-
cise, de la Loi de l’impôt sur le revenu, de la Loi
sur le droit pour la sécurité des passagers du
transport aérien et de la Loi sur la taxe sur les
logements sous-utilisés,
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
34 (1) Le paragraphe 189(4) de la même loi est
remplacé par ce qui suit :
2021-2022 105 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PART 2 Underused Housing Tax Act PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Consequential Amendments Modifications corrélatives
Excise Act, 2001 Loi de 2001 sur l’accise
Sections 34-36 Articles 34-36
Restriction
(4) A refund shall not be paid until the person has filed
with the Minister or the Minister of Public Safety and
Emergency Preparedness all returns and other records of
which the Minister has knowledge and that are required
to be filed under this Act, the Excise Act, the Excise Tax
Act, the Customs Act, the Income Tax Act, the Air Trav-
ellers Security Charge Act and the Underused Housing
Tax Act.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
35 (1) The description of B in paragraph
297(1)(d) of the Act is replaced by the following:
B is the amount, if any, by which the total of all
amounts, if any, the transferee was assessed under
subsection 325(2) of the Excise Tax Act, subsec-
tion 160(2) of the Income Tax Act or subsec-
tion 80(3) of the Underused Housing Tax Act in
respect of the property exceeds the amount paid
by the transferor in respect of the amounts so as-
sessed, and
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
2018, c. 12, s. 186
Greenhouse Gas Pollution Pricing
Act
36 (1) Section 51 of the Greenhouse Gas Pollu-
tion Pricing Act is replaced by the following:
Restriction on rebate
51 A rebate under this Division is not to be paid to a per-
son at any time unless all returns of which the Minister
has knowledge and that are required to be filed at or be-
fore that time by the person under this Part, the Excise
Tax Act, the Income Tax Act, the Air Travellers Security
Charge Act, the Excise Act, 2001 and the Underused
Housing Tax Act have been filed with the Minister.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
Restriction
(4) Un montant de remboursement n’est versé qu’une
fois présentés au ministre ou au ministre de la Sécurité
publique et de la Protection civile l’ensemble des déclara-
tions et autres registres dont le ministre a connaissance
et qui sont à produire en vertu de la présente loi, de la
Loi sur l’accise, de la Loi sur la taxe d’accise, de la Loi
sur les douanes, de la Loi de l’impôt sur le revenu, de la
Loi sur le droit pour la sécurité des passagers du trans-
port aérien et de la Loi sur la taxe sur les logements
sous-utilisés.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
35 (1) L’élément B de la formule figurant à l’ali-
néa 297(1)a) de la même loi est remplacé par ce
qui suit :
B l’excédent éventuel du total des cotisations éta-
blies à l’égard du cessionnaire en application du
paragraphe 325(2) de la Loi sur la taxe d’accise,
du paragraphe 160(2) de la Loi de l’impôt sur le
revenu ou du paragraphe 80(3) de la Loi sur la
taxe sur les logements sous-utilisés relativement
au bien sur la somme payée par le cédant relative-
ment à ces cotisations;
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
2018, ch. 12, art. 186
Loi sur la tarification de la
pollution causée par les gaz à effet
de serre
36 (1) L’article 51 de la Loi sur la tarification de
la pollution causée par les gaz à effet de serre est
remplacé par ce qui suit :
Restriction
51 Un montant visé par la présente section n’est rem-
boursé à une personne à un moment donné que si toutes
les déclarations dont le ministre a connaissance et que la
personne avait à produire au plus tard à ce moment en
application de la présente partie, de la Loi sur la taxe
d’accise, de la Loi de l’impôt sur le revenu, de la Loi sur
le droit pour la sécurité des passagers du transport aé-
rien, de la Loi de 2001 sur l’accise et de la Loi sur la taxe
sur les logements sous-utilisés ont été présentées au mi-
nistre.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
2021-2022 106 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Consequential Amendments Modifications corrélatives
Greenhouse Gas Pollution Pricing Act Sections 37-39 Articles 37-39
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Loi sur la tarification de la pollution causée par les gaz à effet de serre
37 (1) Section 54 of the Act is replaced by the fol-
lowing:
Restriction — bankruptcy
54 If a trustee is appointed under the Bankruptcy and
Insolvency Act to act in the administration of the estate
or succession of a bankrupt, a rebate under this Part that
the bankrupt was entitled to claim before the appoint-
ment must not be paid after the appointment unless all
returns required to be filed in respect of the bankrupt un-
der this Part, the Excise Tax Act, the Income Tax Act, the
Air Travellers Security Charge Act, the Excise Act, 2001
and the Underused Housing Tax Act in respect of peri-
ods ending before the appointment have been filed and
all amounts required under this Part and those Acts to be
paid by the bankrupt in respect of those periods have
been paid.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
38 (1) Subsection 108(7) of the Act is replaced by
the following:
Restriction on rebates
(7) An amount under this section must not be rebated to
a person at any time, unless all returns of which the Min-
ister has knowledge and that are required to be filed at or
before that time by the person under this Part, the Excise
Tax Act, the Income Tax Act, the Air Travellers Security
Charge Act, the Excise Act, 2001 and the Underused
Housing Tax Act have been filed with the Minister.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
39 (1) Subsection 109(5) of the Act is replaced by
the following:
Restriction
(5) An amount under this section must not be rebated to
a person at any time, unless all returns of which the Min-
ister has knowledge and that are required to be filed at or
before that time by the person under this Part, the Excise
Tax Act, the Income Tax Act, the Air Travellers Security
37 (1) L’article 54 de la même loi est remplacé
par ce qui suit :
Restriction — faillite
54 En cas de nomination, en application de la Loi sur la
faillite et l’insolvabilité, d’un syndic pour voir à l’admi-
nistration de l’actif ou de la succession d’un failli, un
remboursement prévu par la présente partie auquel le
failli avait droit avant la nomination n’est effectué après
la nomination que si toutes les déclarations à produire
relativement au failli en application de la présente partie,
de la Loi sur la taxe d’accise, de la Loi de l’impôt sur le
revenu, de la Loi sur le droit pour la sécurité des passa-
gers du transport aérien, de la Loi de 2001 sur l’accise et
de la Loi sur la taxe sur les logements sous-utilisés relati-
vement aux périodes qui ont pris fin avant la nomination
ont été produites et que si les sommes à payer par le failli
en application de la présente partie, de la Loi sur la taxe
d’accise, de la Loi de l’impôt sur le revenu, de la Loi sur
le droit pour la sécurité des passagers du transport aé-
rien, de la Loi de 2001 sur l’accise et de la Loi sur la taxe
sur les logements sous-utilisés relativement à ces pé-
riodes ont été payées.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
38 (1) Le paragraphe 108(7) de la même loi est
remplacé par ce qui suit :
Restriction
(7) Un montant prévu au présent article n’est remboursé
à une personne à un moment donné que si toutes les dé-
clarations dont le ministre a connaissance et que la per-
sonne avait à produire au plus tard à ce moment en ap-
plication de la présente partie, de la Loi sur la taxe d’ac-
cise, de la Loi de l’impôt sur le revenu, de la Loi sur le
droit pour la sécurité des passagers du transport aérien,
de la Loi de 2001 sur l’accise et de la Loi sur la taxe sur
les logements sous-utilisés ont été présentées au mi-
nistre.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
39 (1) Le paragraphe 109(5) de la même loi est
remplacé par ce qui suit :
Restriction
(5) Un montant prévu au présent article n’est remboursé
à une personne à un moment donné que si toutes les dé-
clarations dont le ministre a connaissance et que la per-
sonne avait à produire au plus tard à ce moment en ap-
plication de la présente partie, de la Loi sur la taxe d’ac-
cise, de la Loi de l’impôt sur le revenu, de la Loi sur le
2021-2022 107 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 2 Underused Housing Tax Act Consequential Amendments Modifications corrélatives
Greenhouse Gas Pollution Pricing Act Sections 39-42 Articles 39-42
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 2 Loi sur la taxe sur les logements sous-utilisés
Loi sur la tarification de la pollution causée par les gaz à effet de serre
Charge Act, the Excise Act, 2001 and the Underused
Housing Tax Act have been filed with the Minister.
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
40 (1) The description of B in paragraph
161(1)(d) of the Act is replaced by the following:
B is the amount, if any, by which the amount as-
sessed the transferee under subsection 325(2) of
the Excise Tax Act, paragraph 97.44(1)(b) of the
Customs Act, subsection 160(2) of the Income Tax
Act, subsection 297(3) of the Excise Act, 2001 or
subsection 80(3) of the Underused Housing Tax
Act in respect of the property exceeds the amount
paid by the transferor in respect of the amount so
assessed, and
(2) Subsection (1) comes into force, or is deemed
to have come into force, on January 1, 2022.
droit pour la sécurité des passagers du transport aérien,
de la Loi de 2001 sur l’accise et de la Loi sur la taxe sur
les logements sous-utilisés ont été présentées au mi-
nistre.
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
40 (1) L’élément B de la formule figurant à l’ali-
néa 161(1)a) de la même loi est remplacé par ce
qui suit :
B l’excédent éventuel du montant de la cotisation
établie à l’égard du cessionnaire en application du
paragraphe 325(2) de la Loi sur la taxe d’accise, de
l’alinéa 97.44(1)b) de la Loi sur les douanes, du
paragraphe 160(2) de la Loi de l’impôt sur le reve-
nu, du paragraphe 297(3) de la Loi de 2001 sur
l’accise ou du paragraphe 80(3) de la Loi sur la
taxe sur les logements sous-utilisés relativement
au bien sur la somme payée par le cédant relative-
ment à ce montant;
(2) Le paragraphe (1) entre en vigueur, ou est ré-
puté être entré en vigueur, le 1er janvier 2022.
PART 3
Canada Emergency Business
Account
Definition of CEBA loan
41 In this Part, CEBA loan means a loan provided
by a Canadian financial institution as part of the
Canada Emergency Business Account program
established by Export Development Canada pur-
suant to an authorization made under subsection
23(1) of the Export Development Act.
Limitation or prescription period
42 (1) Subject to subsections (4) and (6), any ac-
tion or proceedings to recover money owing un-
der a CEBA loan must be taken no more than six
years after the date of the default.
Default
(2) For the purposes of subsection (1), the date of
the default is the earlier of the day on which the
person making the claim first knew, or ought
reasonably to have known, that the default had
occurred.
PARTIE 3
Compte d’urgence pour les
entreprises canadiennes
Définition de prêt CUEC
41 Dans la présente partie, prêt CUEC s’entend
d’un prêt accordé par une institution financière
canadienne au titre du programme Compte d’ur-
gence pour les entreprises canadiennes établi
par Exportation et développement Canada aux
termes d’une autorisation accordée au titre du
paragraphe 23(1) de la Loi sur le développement
des exportations.
Prescription
42 (1) Sous réserve des paragraphes (4) et (6),
toute poursuite visant le recouvrement d’une
créance relative à un prêt CUEC se prescrit par
six ans à compter de la date du défaut du prêt.
Défaut
(2) Pour l’application du paragraphe (1), un prêt
est en défaut à compter du jour où la personne
qui recouvre la créance a connaissance du défaut
pour la première fois ou aurait dû raisonnable-
ment en avoir connaissance.
2021-2022 108 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 3 Canada Emergency Business Account Section 42 Article 42
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 3 Compte d’urgence pour les entreprises canadiennes
Deduction, set-off or compensation
(3) Money owing by a person under a CEBA loan
may be recovered at any time by way of deduc-
tion from, set-off against or compensation
against any sum of money that may be payable by
Her Majesty in right of Canada to the person,
other than an amount payable under sec-
tion 122.61 of the Income Tax Act.
Acknowledgment of liability
(4) If a person’s liability for money owing under a
CEBA loan is acknowledged in accordance with
subsection (5) at any time during or after the lim-
itation or prescription period described in sub-
section (1), an action or proceedings to recover
the money may, subject to subsection (6), be
brought within six years after the date of the ac-
knowledgment.
Types of acknowledgment
(5) An acknowledgment of liability means
(a) a promise to pay the money owing, made by
the person or their agent or mandatary or oth-
er representative;
(b) an acknowledgment of the money owing,
made by the person or their agent or man-
datary or other representative, whether or not
a promise to pay can be implied from it and
whether or not it contains a refusal to pay;
(c) a part payment by the person or their agent
or mandatary or other representative of the
money owing; or
(d) an acknowledgment of the money owing,
made in the course of proceedings under the
Bankruptcy and Insolvency Act or any other
legislation dealing with the payment of debts,
by the person, their agent or mandatary or
other representative or the trustee or adminis-
trator.
Limitation or prescription period suspended
(6) The running of a limitation or prescription
period is suspended during any period in which
it is prohibited to commence or continue an ac-
tion or other proceedings against the person to
recover money owing under a CEBA loan.
Compensation et déduction
(3) Le recouvrement, par voie de compensation
ou de déduction, du montant d’une créance exi-
gible d’une personne relative à un prêt CUEC
peut être effectué en tout temps sur toute somme
à verser par Sa Majesté du chef du Canada à la
personne, à l’exception de toute somme à verser
en vertu de l’article 122.61 de la Loi de l’impôt sur
le revenu.
Reconnaissance de responsabilité
(4) Si, pendant la période de prescription visée
au paragraphe (1) — ou après cette période — il
est reconnu, conformément au paragraphe (5),
qu’une personne est responsable d’une créance
exigible relative à un prêt CUEC, des poursuites
en recouvrement peuvent être intentées, sous ré-
serve du paragraphe (6), dans les six ans suivant
la date de la reconnaissance de responsabilité.
Types de reconnaissance de responsabilité
(5) Constituent une reconnaissance de responsa-
bilité :
a) la promesse de payer la créance exigible,
faite par la personne ou par son mandataire
ou autre représentant;
b) la reconnaissance de l’exigibilité de la
créance, faite par la personne ou par son man-
dataire ou autre représentant, que celle-ci
contienne ou non une promesse implicite de
payer ou une déclaration de refus de paie-
ment;
c) le paiement partiel de la créance exigible
par la personne ou par son mandataire ou
autre représentant;
d) la reconnaissance de l’exigibilité de la
créance par la personne, son mandataire ou
autre représentant, le syndic ou l’administra-
teur, dans le cadre de mesures prises confor-
mément à la Loi sur la faillite et l’insolvabilité
ou dans le cadre de toute autre loi relative au
paiement de dettes.
Suspension du délai de prescription
(6) Le délai de prescription ne court pas pendant
la période au cours de laquelle il est interdit d’in-
tenter ou de continuer contre la personne des
poursuites en recouvrement d’une créance exi-
gible relative à un prêt CUEC.
2021-2022 109 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 3 Canada Emergency Business Account Sections 42-44 Articles 42-44
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 3 Compte d’urgence pour les entreprises canadiennes
Enforcement proceedings
(7) This section does not apply in respect of an
action or proceeding relating to the execution,
renewal or enforcement of a judgment.
Application
43 Section 42 applies irrespective of whether
(a) the date of default is before the day on
which this Part comes into force or on or after
that day; and
(b) the limitation or prescription period appli-
cable before that day has expired.
Mise en œuvre de décisions judiciaires
(7) Le présent article ne s’applique pas aux pour-
suites relatives à l’exécution, à la mise en œuvre
ou au renouvellement d’une décision judiciaire.
Application
43 L’article 42 s’applique aux poursuites en re-
couvrement de toute créance relative à un prêt
CUEC, indépendamment du fait que :
a) le prêt était en défaut avant la date d’entrée
en vigueur de la présente partie ou qu’il l’est à
cette date ou après cette date;
b) le délai de prescription applicable au recou-
vrement de la créance avant l’entrée en vi-
gueur de la présente partie est expiré.
PART 4
School Ventilation
Improvement
Maximum payment of $100 million
44 (1) The Minister of Finance may make the fol-
lowing payments to the provinces and territories
for the purpose of supporting ventilation im-
provement projects in schools:
(a) to Ontario, a sum not exceeding $36,226,000;
(b) to Quebec, a sum not exceeding $21,023,000;
(c) to Nova Scotia, a sum not exceed-
ing $2,674,000;
(d) to New Brunswick, a sum not exceed-
ing $2,294,000;
(e) to Manitoba, a sum not exceeding $4,465,000;
(f) to British Columbia, a sum not exceed-
ing $11,906,000;
(g) to Prince Edward Island, a sum not exceed-
ing $898,000;
(h) to Saskatchewan, a sum not exceed-
ing $3,979,000;
(i) to Alberta, a sum not exceeding $12,983,000;
(j) to Newfoundland and Labrador, a sum not
exceeding $1,631,000;
PARTIE 4
Amélioration de la ventilation
dans les écoles
Paiement maximal de 100 000 000 $
44 (1) Le ministre des Finances peut verser aux
provinces et aux territoires ci-après une somme
n’excédant pas celle figurant en regard de leur
nom pour appuyer des projets d’amélioration de
la ventilation dans les écoles :
a) Ontario : 36 226 000 $;
b) Québec : 21 023 000 $;
c) Nouvelle-Écosse : 2 674 000 $;
d) Nouveau-Brunswick : 2 294 000 $;
e) Manitoba : 4 465 000 $;
f) Colombie-Britannique : 11 906 000 $;
g) Île-du-Prince-Édouard : 898 000 $;
h) Saskatchewan : 3 979 000 $;
i) Alberta : 12 983 000 $;
j) Terre-Neuve-et-Labrador : 1 631 000 $;
k) Yukon : 607 000 $;
l) Territoires du Nord-Ouest : 635 000 $;
m) Nunavut : 679 000 $.
2021-2022 110 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 4 School Ventilation Improvement Sections 44-46 Articles 44-46
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 4 Amélioration de la ventilation dans les écoles
(k) to Yukon, a sum not exceeding $607,000;
(l) to the Northwest Territories, a sum not ex-
ceeding $635,000; and
(m) to Nunavut, a sum not exceeding $679,000.
Payments out of C.R.F.
(2) Any amount payable under subsection (1)
may be paid by the Minister of Finance out of the
Consolidated Revenue Fund, at the times and in
the manner, and on any terms and conditions,
that the Minister of Finance considers appropri-
ate.
Prélèvement sur le Trésor
(2) Le ministre des Finances peut prélever sur le
Trésor, selon les conditions et modalités — de
temps et autres — qu’il estime indiquées, les
sommes à payer au titre du paragraphe (1).
PART 5
Proof of Vaccination
Maximum payment of $300 million
45 (1) The Minister of Health may make pay-
ments to the provinces and territories not ex-
ceeding $300 million in total for the purpose of
supporting their coronavirus disease 2019
(COVID-19) proof-of-vaccination initiatives, with
the amount of each payment to be determined by
the Minister of Health.
Payments out of C.R.F.
(2) Any amount payable under subsection (1)
may be paid by the Minister of Health out of the
Consolidated Revenue Fund, at the times and in
the manner, and on any terms and conditions,
that the Minister of Health considers appropri-
ate.
PARTIE 5
Preuve de vaccination
Paiement maximal de 300 000 000 $
45 (1) Le ministre de la Santé peut verser aux
provinces et aux territoires une somme totale
n’excédant pas trois cents millions de dollars
pour appuyer leurs initiatives en matière de
preuve de vaccination contre la maladie à coro-
navirus 2019 (COVID-19). Il détermine le montant
de chaque versement.
Prélèvement sur le Trésor
(2) Le ministre de la Santé peut prélever sur le
Trésor, selon les conditions et modalités — de
temps et autres — qu’il estime indiquées, les
sommes à payer au titre du paragraphe (1).
PART 6
COVID-19 Tests
Payments out of C.R.F.
46 (1) The Minister of Health may make pay-
ments, the total of which may not exceed $1.72
billion, out of the Consolidated Revenue Fund for
any expenses incurred on or after April 1, 2021 in
relation to coronavirus disease 2019 (COVID-19)
tests.
Report
(2) Within three months after the day on which
this section comes into force, and every three
months after that, the Minister of Health must
PARTIE 6
Tests de la COVID-19
Prélèvement sur le Trésor
46 (1) Le ministre de la Santé peut payer sur le
Trésor une somme maximale d’un milliard sept
cent vingt millions de dollars pour toute dépense
relative à des tests de la maladie à coronavirus
2019 (COVID-19) engagée le 1er avril 2021 ou après
cette date.
Rapport
(2) Dans les trois mois suivant la date d’entrée en
vigueur du présent article, et tous les trois mois
par la suite si des paiements sont effectués en
2021-2022 111 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 6 COVID-19 Tests Sections 46-47 Articles 46-47
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 6 Tests de la COVID-19
prepare a report setting out the number of pay-
ments made and the total amount paid under
subsection (1) should any payments be made un-
der the Act during that period, the number of
tests purchased and how they were distributed,
and cause it to be tabled in each House of Parlia-
ment on any of the first 15 days on which that
House is sitting after the report is completed.
vertu de la loi pendant cette période, le ministre
de la Santé établit un rapport indiquant le
nombre de paiements effectués et le montant to-
tal versé en vertu du paragraphe (1), le nombre
de tests achetés et la façon dont ils ont été distri-
bués, et le fait déposer devant chaque chambre
du Parlement dans les quinze premiers jours de
séance de celle-ci suivant l’établissement du rap-
port.
PART 7
1996, c. 23
Employment Insurance Act
47 Subsections 12(2.3) to (2.5) of the Employment
Insurance Act are replaced by the following:
General maximum — exception for seasonal workers
(2.3) Despite subsection (2), the maximum number of
weeks for which benefits may be paid in a benefit period
to a claimant because of a reason other than those men-
tioned in subsection (3) shall be determined in accor-
dance with the table set out in Schedule V by reference to
the regional rate of unemployment that applies to the
claimant and the number of hours of insurable employ-
ment of the claimant in their qualifying period if
(a) the following conditions are met:
(i) the date on which a benefit period for the
claimant is established falls within the period be-
ginning on September 26, 2021 and ending on Octo-
ber 29, 2022,
(ii) on the date on which the benefit period is estab-
lished, the claimant is ordinarily resident in a re-
gion described in Schedule VI,
(iii) in the 260 weeks before the date on which the
benefit period referred to in subparagraph (i) be-
gins, at least three benefit periods were established
during which regular benefits were paid or payable,
and
(iv) at least two of the benefit periods referred to in
subparagraph (iii) began around the same time of
year as the benefit period referred to in subpara-
graph (i) began; or
(b) the conditions referred to in subparagraphs (a)(i)
and (ii) are met and the claimant had met the criteria
set out in paragraphs 77.992(2)(b) to (d) of the Em-
ployment Insurance Regulations — taking into
PARTIE 7
1996, ch. 23
Loi sur l’assurance-emploi
47 Les paragraphes 12(2.3) à (2.5) de la Loi sur
l’assurance-emploi sont remplacés par ce qui
suit :
Maximum : exception pour travailleurs saisonniers
(2.3) Malgré le paragraphe (2), le nombre maximal de
semaines pour lesquelles des prestations peuvent être
versées au prestataire au cours d’une période de presta-
tions — à l’exception de celles qui peuvent être versées
pour l’une des raisons prévues au paragraphe (3) — est
déterminé selon le tableau prévu à l’annexe V en fonction
du taux régional de chômage applicable au prestataire et
du nombre d’heures pendant lesquelles il a occupé un
emploi assurable au cours de sa période de référence si :
a) soit les conditions ci-après sont remplies :
(i) la date à laquelle la période de prestations est
établie à son profit tombe dans la période commen-
çant le 26 septembre 2021 et se terminant le 29 oc-
tobre 2022,
(ii) à la date à laquelle la période de prestations est
établie à son profit, il réside habituellement dans
une région qui est décrite à l’annexe VI,
(iii) au cours des deux cent soixante semaines pré-
cédant la date de début de la période de prestations
visée au sous-alinéa (i) au moins trois périodes de
prestations ont été établies à son profit, à l’égard
desquelles des prestations régulières lui ont été
payées ou doivent l’être,
(iv) au moins deux des périodes de prestations vi-
sées au sous-alinéa (iii) ont commencé environ au
même moment de l’année que celui auquel la pé-
riode de prestations visée au sous-alinéa (i) com-
mence;
2021-2022 112 70-71 Eliz. II
Chapter 5: Economic and Fiscal Update Implementation Act, 2021 PART 7 Employment Insurance Act Sections 47-48 Articles 47-48
Chapitre 5 : Loi d’exécution de la mise à jour économique et budgétaire de 2021
PARTIE 7 Loi sur l’assurance-emploi
account subsections 77.992(3) and (4) of those Regula-
tions — in respect of a benefit period established for
the claimant on a date within the period referred to in
paragraph 77.992(2)(a) of those Regulations.
Establishment of benefit period — presumption
(2.4) For the purposes of subparagraph (2.3)(a)(iii), a
claimant’s benefit period established before the begin-
ning of the 260-week period is considered to have been
established within the 260-week period if the claimant re-
ceived a notification of payment or non-payment with re-
spect to any week that falls within that 260-week period.
Beginning of benefit period — presumption
(2.5) For the purposes of subparagraph (2.3)(a)(iv), a
benefit period in a previous year is considered to have
begun around the same time of year if it began during the
period that begins eight weeks before and ends eight
weeks after the week that is
(a) 52 weeks before the first week of the benefit period
referred to in subparagraph (2.3)(a)(i);
(b) 104 weeks before the first week of the benefit peri-
od referred to in subparagraph (2.3)(a)(i);
(c) 156 weeks before the first week of the benefit peri-
od referred to in subparagraph (2.3)(a)(i);
(d) 208 weeks before the first week of the benefit peri-
od referred to in subparagraph (2.3)(a)(i); or
(e) 260 weeks before the first week of the benefit peri-
od referred to in subparagraph (2.3)(a)(i).
48 Schedule VI to the Act is amended by replac-
ing the reference after the heading “SCHEDULE
VI” with the following:
(Subparagraph 12(2.3)(a)(ii))
b) soit les conditions prévues aux sous-alinéas a)(i) et
(ii) sont remplies et le prestataire remplissait les
conditions prévues aux alinéas 77.992(2)b) à d) du Rè-
glement sur l’assurance-emploi — compte tenu des
paragraphes 77.992(3) et (4) de ce règlement — à
l’égard d’une période de prestations établie à son pro-
fit à une date tombant dans la période visée à l’ali-
néa 77.992(2)a) de ce règlement.
Établissement de la période de prestations —
présomption
(2.4) Pour l’application du sous-alinéa (2.3)a)(iii), une
période de prestations établie au profit du prestataire
avant le début de la période de deux cent soixante se-
maines est considérée comme ayant été établie au cours
de cette période si celui-ci a reçu un avis de paiement ou
de non-paiement à l’égard d’une semaine qui tombe dans
cette période.
Début de la période de prestations — présomption
(2.5) Pour l’application du sous-alinéa (2.3)a)(iv), une
période de prestations d’une année antérieure est consi-
dérée comme ayant commencé environ au même mo-
ment de l’année si elle a commencé durant la période
commençant huit semaines avant la semaine ci-après et
se terminant huit semaines après celle-ci, selon le cas :
a) celle qui tombe cinquante-deux semaines avant la
première semaine de la période de prestations visée au
sous-alinéa (2.3)a)(i);
b) celle qui tombe cent quatre semaines avant la pre-
mière semaine de la période de prestations visée au
sous-alinéa (2.3)a)(i);
c) celle qui tombe cent cinquante-six semaines avant
la première semaine de la période de prestations visée
au sous-alinéa (2.3)a)(i);
d) celle qui tombe deux cent huit semaines avant la
première semaine de la période de prestations visée au
sous-alinéa (2.3)a)(i);
e) celle qui tombe deux cent soixante semaines avant
la première semaine de la période de prestations visée
au sous-alinéa (2.3)a)(i).
48 Le renvoi qui suit le titre « ANNEXE VI », à
l’annexe VI de la même loi, est remplacé par ce
qui suit :
(sous-alinéa 12(2.3)a)(ii))
Published under authority of the Speaker of the House of Commons Publié avec l’autorisation du président de la Chambre des communes
2021-2022 113 70-71 Eliz. II
Available on the House of Commons website at the following address: www.ourcommons.ca
Disponible sur le site Web de la Chambre des communes à l’adresse suivante : www.noscommunes.ca
`;

async function generateResponse(prompt) {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt,
                        },
                    ],
                },
            ],
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to generate response');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

function cleanMarkdown(text) {
    return text
        .replace(/#{1,6}\s?/g, '')
        .replace(/\*\*/g, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}



// function addMessage(message, isUser) {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message');
//     messageElement.classList.add(isUser ? 'user-message' : 'bot-message');

//     const profileImage = document.createElement('img');
//     profileImage.classList.add('profile-image');
//     profileImage.src = isUser ? '../assets/user.jpg' : '../assets/bot.jpg';
//     profileImage.alt = isUser ? 'User' : 'Bot';

//     const messageContent = document.createElement('div');
//     messageContent.classList.add('message-content');
//     messageContent.textContent = message;

//     messageElement.appendChild(profileImage);
//     messageElement.appendChild(messageContent);
//     chatMessages.appendChild(messageElement);
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// }

function formatBoldText(text) {
    // Replaces words wrapped in * with bold HTML tags <b>
    return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
}

function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = isUser ? '../assets/user.png' : '../assets/chatbot.png';
    profileImage.alt = isUser ? 'User' : 'Bot';

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');

    // Apply bold formatting to bot messages
    messageContent.innerHTML = isUser ? message : formatBoldText(message);

    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


async function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, true);
        userInput.value = '';
        sendButton.disabled = true;
        userInput.disabled = true;

        try {
            // Combine developer instructions with user input
            const combinedPrompt = `${developerPrompt}\nUser Query: ${userMessage}`;
            const botMessage = await generateResponse(combinedPrompt);
            addMessage(cleanMarkdown(botMessage), false);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, I encountered an error. Please try again.', false);
        } finally {
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();
        }
    }
}

sendButton.addEventListener('click', handleUserInput);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
    }
});
