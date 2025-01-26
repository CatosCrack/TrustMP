const API_KEY = 'AIzaSyA2uS7wosx1FDZ6nc6zIyvMQcPMWCAucMw';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Predefined developer instructions
const developerPrompt = `
there is a bill that you would have to read properly and answer me as I ask specific quesions: First Session, Forty-fourth Parliament,
70-71 Elizabeth II – 1 Charles III, 2021-2022
Première session, quarante-quatrième législature,
70-71 Elizabeth II – 1 Charles III, 2021-2022
STATUTES OF CANADA 2022 LOIS DU CANADA (2022)
CHAPTER 17 CHAPITRE 17
An Act to amend the Criminal Code and the
Identification of Criminals Act and to make
related amendments to other Acts (COVID-19
response and other measures)
Loi modifiant le Code criminel et la Loi sur
l’identification des criminels et apportant des
modifications connexes à d’autres lois
(réponse à la COVID-19 et autres mesures)
ASSENTED TO
DECEMBER 15, 2022
BILL S-4
SANCTIONNÉE
LE 15 DÉCEMBRE 2022
PROJET DE LOI S-4
SUMMARY
This enactment amends the Criminal Code to, among other
things,
(a) allow for the use of electronic or other automated means
for the purposes of the jury selection process;
(b) expand, for the accused and offenders, the availability of
remote appearances by audioconference and videoconference in certain circumstances;
(c) provide for the participation of prospective jurors in the
jury selection process by videoconference in certain circumstances;
(d) expand the power of courts to make case management
rules permitting court personnel to deal with administrative
matters for accused not represented by counsel;
(e) permit courts to order fingerprinting at the interim release
stage and at any other stage of the criminal justice process if
fingerprints could not previously have been taken for exceptional reasons; and
(f) replace the existing telewarrant provisions with a process
that permits a wide variety of search warrants, authorizations
and orders to be applied for and issued by a means of
telecommunication.
The enactment makes amendments to the Criminal Code and the
Identification of Criminals Act to correct minor technical errors
and includes transitional provisions on the application of the
amendments. It also makes related amendments to other Acts.
The enactment also provides for one or more independent reviews on the use of remote proceedings in criminal justice matters.
Lastly, the enactment also provides for a parliamentary review of
the provisions enacted or amended by this enactment and of the
use of remote proceedings in criminal justice matters to commence at the start of the fifth year following the day on which it
receives royal assent.
SOMMAIRE
Le texte modifie le Code criminel en vue, notamment :
a) de permettre le recours à des moyens électroniques ou à
d’autres moyens automatisés dans le processus de constitution du jury;
b) d’élargir les possibilités de comparution à distance, par
audioconférence ou vidéoconférence, en certaines circonstances, pour les accusés et les contrevenants;
c) de prévoir, en certaines circonstances, la participation de
candidats-jurés dans le processus de constitution du jury par
vidéoconférence;
d) d’élargir les pouvoirs des tribunaux d’établir des règles
sur la gestion des instances afin de permettre à leurs fonctionnaires de régler des questions de nature administrative
pour les accusés non représentés par avocat;
e) de permettre aux tribunaux d’ordonner la prise des empreintes à l’étape de l’enquête sur mise en liberté provisoire
et à toute autre étape du processus de justice pénale lorsqu’elles n’ont pas pu être prises antérieurement pour des motifs exceptionnels;
f) de remplacer les dispositions existantes sur les télémandats par un processus de demande et de délivrance d’une
grande variété de mandats de perquisition, d’autorisations et
d’ordonnances par des moyens de télécommunication.
Il apporte également des modifications au Code criminel et à la
Loi sur l’identification des criminels afin de corriger des erreurs
mineures de nature technique et comporte des dispositions transitoires concernant l’application des modifications. Enfin, il apporte des modifications connexes à d’autres lois.
Le texte prévoit un ou des examens indépendants sur l’utilisation de procédures à distance dans des affaires de justice pénale.
Enfin, il prévoit également un examen parlementaire des dispositions édictées ou modifiées par la présente loi ainsi que de l’utilisation de procédures à distance dans des affaires de justice
pénale, lequel commence au début de la cinquième année qui
suit sa sanction.
Available on the Senate of Canada website at the following address:
www.sencanada.ca/en
Disponible sur le site Web du Sénat du Canada à l’adresse suivante :
www.sencanada.ca/fr
2021-2022 ii 70-71 Eliz. II – 1 Cha. III
70-71 ELIZABETH II – 1 CHARLES III 70-71 ELIZABETH II – 1 CHARLES III
CHAPTER 17 CHAPITRE 17
An Act to amend the Criminal Code and the Identification of Criminals Act and to make related amendments to other Acts (COVID-19 response and other
measures)
Loi modifiant le Code criminel et la Loi sur l’identification des criminels et apportant des modifications
connexes à d’autres lois (réponse à la COVID-19 et
autres mesures)
[Assented to 15th December, 2022] [Sanctionnée le 15 décembre 2022]
His Majesty, by and with the advice and consent of
the Senate and House of Commons of Canada,
enacts as follows:
R.S., c. C-46
Criminal Code
2019, c. 25, s. 1(3)
1 The definition summons in section 2 of the
Criminal Code is replaced by the following:
summons means, unless a contrary intention appears, a
summons in Form 6 issued by a judge or justice or by the
chairperson of a Review Board as defined in subsection
672.1(1); (sommation)
1995, c. 39, s. 139
2 The portion of subsection 117.04(3) of the Act
before paragraph (a) is replaced by the following:
Report to justice
(3) A peace officer who executes a warrant referred to in
subsection (1) or who conducts a search without a warrant under subsection (2) shall immediately make a report to a justice having jurisdiction in respect of the matter and, in the case of an execution of a warrant, jurisdiction in the province in which the warrant was issued,
showing
1995, c. 39, s. 139
3 Subsection 117.05(1) of the Act is replaced by
the following:
Sa Majesté, sur l’avis et avec le consentement du
Sénat et de la Chambre des communes du Canada,
édicte :
L.R., ch. C-46
Code criminel
2019, ch. 25, par. 1(3)
1 La définition de sommation, à l’article 2 du
Code criminel, est remplacée par ce qui suit :
sommation À moins d’indication contraire, sommation
selon la formule 6 décernée par un juge ou un juge de
paix ou par le président d’une commission d’examen
au sens du paragraphe 672.1(1). (summons)
1995, ch. 39, art. 139
2 Le paragraphe 117.04(3) de la même loi est remplacé par ce qui suit :
Rapport au juge de paix
(3) L’agent de la paix présente, immédiatement soit
après l’exécution du mandat visé au paragraphe (1) soit
après la perquisition effectuée sans mandat en vertu du
paragraphe (2), à un juge de paix compétent et, dans le
cas où un mandat a été exécuté, qui est compétent dans
la province où celui-ci a été délivré, un rapport précisant,
outre les objets ou les documents saisis, le cas échéant, la
date d’exécution du mandat ou les motifs ayant justifié la
perquisition sans mandat, selon le cas.
1995, ch. 39, art. 139
3 Le paragraphe 117.05(1) de la même loi est remplacé par ce qui suit :
2021-2022 1 70-71 Eliz. II – 1 Cha. III
Application for disposition
117.05 (1) If any thing or document has been seized
under subsection 117.04(1) or (2), a justice having jurisdiction in respect of the matter and, in the case of an execution of a warrant, jurisdiction in the province in which
the warrant was issued shall, on application for an order
for the disposition of the thing or document so seized
made by a peace officer within 30 days after the date of
execution of the warrant or of the seizure without a warrant, as the case may be, fix a date for the hearing of the
application and direct that notice of the hearing be given
to the persons or in the manner that the justice may
specify.
4 Subsection 145(2) of the Act is amended by
striking out “or” at the end of paragraph (b), by
adding “or” at the end of paragraph (c) and by
adding the following after that paragraph:
(d) fails, without lawful excuse, to comply with an order made under section 515.01.
1993, c. 40, s. 1(1)
5 The definition authorization in section 183 of the
Act is replaced by the following:
authorization means an authorization to intercept a private communication given under subsection 184.2(3),
section 186 or subsection 188(2); (autorisation)
1993, c. 40, s. 4
6 Section 184.3 of the Act is replaced by the following:
Application — telecommunication producing writing
184.3 (1) A person who is permitted to make one of the
following applications may submit their application by a
means of telecommunication that produces a writing:
(a) an application for an authorization under subsection 184.2(2), 185(1), 186(5.2) or 188(1);
(b) an application for an extension under subsection
185(2), 196(2) or 196.1(2);
(c) an application to renew an authorization under
subsection 186(6).
Sealing
(2) A judge who receives an application submitted by a
means of telecommunication that produces a writing
shall, immediately on the determination of the
Demande d’une ordonnance pour disposer des objets
saisis
117.05 (1) Lorsque l’agent de la paix sollicite, dans les
trente jours suivant la date de l’exécution du mandat ou
de la saisie sans mandat, une ordonnance de disposition
des objets et des documents saisis en vertu des paragraphes 117.04(1) ou (2), un juge de paix compétent et,
dans le cas où un mandat a été exécuté, qui est compétent dans la province où celui-ci a été délivré peut rendre
une telle ordonnance. Le juge de paix fixe la date d’audition de la demande et ordonne que soient avisées les personnes qu’il désigne, de la manière qu’il détermine.
4 Le paragraphe 145(2) de la même loi est modifié par adjonction, après l’alinéa c), de ce qui
suit :
d) omet, sans excuse légitime, de se conformer à une
ordonnance rendue en vertu de l’article 515.01.
1993, ch. 40, par. 1(1)
5 La définition de autorisation, à l’article 183 de la
même loi, est remplacée par ce qui suit :
autorisation Autorisation d’intercepter une communication privée donnée en vertu du paragraphe 184.2(3), de
l’article 186 ou du paragraphe 188(2). (authorization)
1993, ch. 40, art. 4
6 L’article 184.3 de la même loi est remplacé par
ce qui suit :
Demande par un moyen de télécommunication :
forme écrite
184.3 (1) La personne habilitée à présenter l’une des
demandes ci-après peut le faire par un moyen de télécommunication qui rend la communication sous forme
écrite :
a) une demande d’autorisation visée aux paragraphes
184.2(2), 185(1), 186(5.2) ou 188(1);
b) une demande de prolongation visée aux paragraphes 185(2), 196(2) ou 196.1(2);
c) une demande de renouvellement visée au paragraphe 186(6).
Mise sous scellé
(2) Le juge qui reçoit une demande présentée par un
moyen de télécommunication qui rend la communication
sous forme écrite la fait placer, dès qu’une décision est
2021-2022 2 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 3-6 Articles 3-6
application, cause it to be placed and sealed in the packet
referred to in subsection 187(1).
Application — telecommunication not producing
writing
(3) Despite anything in section 184.2 or 188, a person
who is permitted to make an application for an authorization under subsection 184.2(2) or 188(1) may submit
their application by a means of telecommunication that
does not produce a writing if it would be impracticable in
the circumstances to submit the application by a means
of telecommunication that produces a writing.
Statement of circumstances
(4) An application submitted by a means of telecommunication that does not produce a writing shall include a
statement of the circumstances that make it impracticable to submit the application by a means of telecommunication that produces a writing.
Oath
(5) Any oath required in connection with an application
submitted by a means of telecommunication that does
not produce a writing may be administered by a means of
telecommunication.
Recording and sealing
(6) A judge who receives an application submitted by a
means of telecommunication that does not produce a
writing shall record the application verbatim, in writing
or otherwise, and shall, immediately on the determination of the application, cause the writing or recording to
be placed and sealed in the packet referred to in subsection 187(1), and a recording sealed in a packet shall be
treated as if it were a document for the purposes of section 187.
Limitation
(7) If an application is submitted by a means of telecommunication that does not produce a writing, the judge
shall not give the authorization unless he or she is satisfied that the application discloses reasonable grounds for
dispensing with its submission by a means of telecommunication that produces a writing.
Giving authorization, etc.
(8) A judge who gives the authorization, extension or renewal may do so by a means of telecommunication, in
which case
(a) the judge shall complete and sign the document in
question, noting on its face the time and date;
prise à son sujet, dans le paquet visé au paragraphe
187(1), qu’il fait sceller.
Demande par un moyen de télécommunication :
aucune forme écrite
(3) Malgré les articles 184.2 ou 188, la personne habilitée
à présenter une demande d’autorisation visée aux paragraphes 184.2(2) ou 188(1) peut le faire par un moyen de
télécommunication qui ne rend pas la communication
sous forme écrite si les circonstances rendent peu commode pour elle de la présenter par un moyen de télécommunication qui rend la communication sous forme écrite.
Énoncé des circonstances
(4) La demande présentée par un moyen de télécommunication qui ne rend pas la communication sous forme
écrite comporte un énoncé des circonstances mentionnées au paragraphe (3).
Serment
(5) Tout serment à prêter dans le cadre d’une demande
présentée par un moyen de télécommunication qui ne
rend pas la communication sous forme écrite peut être
prêté par un moyen de télécommunication.
Enregistrement et mise sous scellé
(6) Le juge qui reçoit une demande présentée par un
moyen de télécommunication qui ne rend pas la communication sous forme écrite l’enregistre mot à mot par écrit
ou autrement et, dès qu’une décision est prise à son sujet,
fait placer l’enregistrement dans le paquet visé au paragraphe 187(1), qu’il fait sceller; l’enregistrement ainsi
placé est traité comme un document pour l’application de
l’article 187.
Restriction
(7) Si la demande est présentée par un moyen de télécommunication qui ne rend pas la communication sous
forme écrite, le juge n’accorde l’autorisation que s’il est
convaincu que la demande démontre l’existence de motifs raisonnables pour exempter le demandeur de la présenter par un moyen de télécommunication qui rend la
communication sous forme écrite.
Autorisation, etc., accordée
(8) Le juge qui accorde l’autorisation, le renouvellement
ou la prolongation peut le faire par un moyen de télécommunication. Le cas échéant :
a) le juge remplit et signe le document pertinent et y
indique la date et l’heure;
2021-2022 3 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Section 6 Article 6
(b) if the means of telecommunication produces a
writing, the judge shall transmit a copy of the document to the applicant by that means;
(c) if the means of telecommunication does not produce a writing, the applicant shall, as directed by the
judge, transcribe the document, noting on its face the
name of the judge as well as the time and date; and
(d) the judge shall, immediately after the authorization, extension or renewal is given, cause the document to be placed and sealed in the packet referred to
in subsection 187(1).
7 Subsection 185(4) of the Act is replaced by the
following:
If extension not granted
(4) If the judge to whom an application for an authorization and an application referred to in subsection (2) are
made refuses to fix a period in substitution for the period
mentioned in subsection 196(1) or if the judge fixes a
shorter period than the one set out in the application referred to in subsection (2), the person submitting the application for the authorization may withdraw that application and, if it is withdrawn, the judge shall not proceed
to consider it or to give the authorization and shall destroy, or return to that person, both applications and all
other material pertaining to them.
1993, c. 40, s. 7
8 (1) Subsection 187(1.1) of the Act is replaced by
the following:
Exception
(1.1) An authorization given under this Part need not be
placed in the packet except if, under subsection 184.3(8),
the original authorization is in the hands of the judge, in
which case that judge must place it in the packet and the
copy remains with the applicant.
1993, c. 40, s. 7
(2) Subsection 187(3) of the Act is replaced by the
following:
Order of judge
(3) An order under subsection (1.2), (1.3), (1.4) or (1.5)
made with respect to documents relating to an application made under subsection 184.2(2) may only be made
after the Attorney General has been given an opportunity
to be heard.
b) si le moyen rend la communication sous forme
écrite, le juge transmet une copie du document au demandeur par ce moyen;
c) si le moyen ne rend pas la communication sous
forme écrite, le demandeur transcrit le document, sur
l’ordre du juge, et y indique le nom de ce dernier, la
date et l’heure;
d) dès qu’il a accordé l’autorisation, le renouvellement
ou la prolongation, le juge fait placer le document
dans le paquet visé au paragraphe 187(1), qu’il fait
sceller.
7 Le paragraphe 185(4) de la même loi est remplacé par ce qui suit :
Cas où la prolongation n’est pas accordée
(4) Lorsque le juge auquel la demande d’autorisation et
la demande visée au paragraphe (2) sont présentées refuse de modifier la période prévue au paragraphe 196(1)
ou fixe une autre période plus courte que celle indiquée
dans la demande visée au paragraphe (2), la personne qui
présente la demande d’autorisation peut la retirer; le cas
échéant, le juge ne considère pas la demande d’autorisation, n’accorde pas l’autorisation et remet à la personne
les deux demandes et toutes les pièces et tous les documents qui s’y rattachent ou les détruit.
1993, ch. 40, art. 7
8 (1) Le paragraphe 187(1.1) de la même loi est
remplacé par ce qui suit :
Exception
(1.1) L’autorisation donnée en vertu de la présente partie n’a pas à être placée dans le paquet sauf si, conformément au paragraphe 184.3(8), l’original est entre les
mains du juge, auquel cas celui-ci est tenu de placer l’autorisation dans le paquet alors que le demandeur
conserve la copie.
1993, ch. 40, art. 7
(2) Le paragraphe 187(3) de la même loi est remplacé par ce qui suit :
Ordonnance du juge
(3) L’ordonnance visant les documents relatifs à une demande présentée conformément au paragraphe 184.2(2)
ne peut être rendue au titre des paragraphes (1.2), (1.3),
(1.4) ou (1.5) qu’après que le procureur général a eu la
possibilité de se faire entendre.
2021-2022 4 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 6-8 Articles 6-8
2019, c. 25, s. 66
9 Section 188.1 of the Act is replaced by the following:
Execution in Canada
188.1 An authorization given under section 184.2, 186 or
188 may be executed at any place in Canada. Any peace
officer who executes the authorization must have authority to act as a peace officer in the place where it is executed.
2018, c. 21, s. 15
10 (1) The portion of subsection 320.29(1) of the
Act before paragraph (a) is replaced by the following:
Warrants to obtain blood samples
320.29 (1) A justice may issue a warrant authorizing a
peace officer to require a qualified medical practitioner
or a qualified technician to take the samples of a person’s
blood that, in the opinion of the practitioner or technician taking the samples, are necessary to enable a proper
analysis to be made to determine the person’s blood alcohol concentration or blood drug concentration, or both, if
the justice is satisfied, on an information on oath in Form
1, that
2018, c. 21, s. 15
(2) Subsections 320.29(2) and (3) of the Act are replaced by the following:
Form
(2) A warrant issued under subsection (1) may be in
Form 5, varied to suit the case.
2018, c. 21, s. 15
(3) Subsection 320.29(5) of the Act is replaced by
the following:
Copy to person
(5) If a warrant issued under subsection (1) is executed,
the peace officer shall, as soon as practicable, give a copy
of it — as a well as a notice in Form 5.1, varied to suit the
case — to the person from whom the samples of blood are
taken.
11 The portion of subsection 395(2) of the Act before paragraph (a) is replaced by the following:
2019, ch. 25, art. 66
9 L’article 188.1 de la même loi est remplacé par
ce qui suit :
Exécution au Canada
188.1 Les actes autorisés en vertu des articles 184.2, 186
ou 188 peuvent être exécutés en tout lieu au Canada. Tout
agent de la paix qui exécute les actes autorisés doit être
habilité à agir à ce titre dans le lieu où ces actes sont exécutés.
2018, ch. 21, art. 15
10 (1) Le passage du paragraphe 320.29(1) de la
même loi précédant l’alinéa a) est remplacé par
ce qui suit :
Mandat pour le prélèvement d’échantillons de sang
320.29 (1) Le juge de paix peut décerner un mandat autorisant un agent de la paix à exiger d’un médecin qualifié ou d’un technicien qualifié qu’il prélève les échantillons de sang qu’il estime nécessaires à la réalisation
d’une analyse convenable permettant de déterminer l’alcoolémie d’une personne ou la concentration de drogue
dans son sang, ou les deux, s’il est convaincu, à la suite
d’une dénonciation faite sous serment suivant la formule
1, que les éléments suivants sont réunis :
2018, ch. 21, art. 15
(2) Les paragraphes 320.29(2) et (3) de la même loi
sont remplacés par ce qui suit :
Formule
(2) Le mandat décerné en vertu du paragraphe (1) peut
être rédigé suivant la formule 5 en l’adaptant aux circonstances.
2018, ch. 21, art. 15
(3) Le paragraphe 320.29(5) de la même loi est
remplacé par ce qui suit :
Copie à la personne
(5) Après l’exécution d’un mandat décerné en vertu du
paragraphe (1), l’agent de la paix donne, dans les
meilleurs délais, une copie du mandat et un avis rédigé
selon la formule 5.1, en l’adaptant aux circonstances, à la
personne qui fait l’objet de prélèvements d’échantillons
de sang.
11 Le passage du paragraphe 395(2) de la même
loi précédant l’alinéa a) est remplacé par ce qui
suit :
2021-2022 5 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 9-11 Articles 9-11
Power to seize
(2) If, on search, anything mentioned in subsection (1) is
found, it shall be seized and brought before a justice of
the province in which the warrant was issued who has jurisdiction in the matter, and the justice shall order
R.S., c. 42 (4th Supp.), s. 2
12 (1) The portion of subsection 462.32(4) of the
French version of the Act before paragraph (a) is
replaced by the following:
Rapport d’exécution
(4) La personne qui exécute un mandat décerné en vertu
du présent article est tenue, à la fois :
R.S., c. 42 (4th Supp.), s. 2; 2017, c. 7, s. 57(F)
(2) Paragraph 462.32(4)(a) of the Act is replaced
by the following:
(a) during that execution, give the following to any
person who is present and ostensibly in control of the
building, receptacle or place to be searched or, in the
absence of any such person, affix the following in a
prominent location within the building or place or on
or next to the receptacle:
(i) a copy of the warrant, and
(ii) a notice in Form 5.1 setting out the address of
the court from which a copy of the report on the
property seized may be obtained;
(a.1) detain or cause to be detained the property
seized, taking reasonable care to ensure that the property is preserved so that it may be dealt with in accordance with the law;
R.S., c. 42 (4th Supp.), s. 2
(3) Paragraphs 462.32(4)(b) and (c) of the French
version of the Act are replaced by the following:
b) dans les meilleurs délais après l’exécution du mandat mais au plus tard le septième jour qui suit celle-ci,
de faire un rapport, selon la formule 5.3, comportant la
désignation des biens saisis et indiquant le lieu où ils
se trouvent et de le faire déposer auprès du greffier du
tribunal;
c) de faire remettre, sur demande, un exemplaire du
rapport au saisi et à toute autre personne qui, de l’avis
du juge, semble avoir un droit sur les biens saisis.
Pouvoir de saisir
(2) Lorsque la perquisition fait découvrir une chose mentionnée au paragraphe (1), cette chose doit être saisie et
apportée devant un juge de paix compétent de la province où le mandat a été décerné, qui doit ordonner :
L.R., ch. 42 (4e
 suppl.), art. 2
12 (1) Le passage du paragraphe 462.32(4) de la
version française de la même loi précédant l’alinéa a) est remplacé par ce qui suit :
Rapport d’exécution
(4) La personne qui exécute un mandat décerné en vertu
du présent article est tenue, à la fois :
L.R., ch. 42 (4e
 suppl.), art. 2; 2017, ch. 7, art. 57(F)
(2) L’alinéa 462.32(4)a) de la même loi est remplacé par ce qui suit :
a) durant l’exécution du mandat, de remettre à toute
personne présente et apparemment responsable du
bâtiment, du contenant ou du lieu devant faire l’objet
de la perquisition les documents ci-après ou, en l’absence d’une telle personne, d’afficher ces documents
bien en vue dans le bâtiment ou le lieu ou sur le contenant ou près de celui-ci :
(i) une copie du mandat,
(ii) un avis rédigé selon la formule 5.1 indiquant
l’adresse du tribunal où une copie du rapport sur
les biens saisis pourra être obtenue;
a.1) de détenir, ou de faire détenir, les biens saisis en
prenant les précautions normales pour garantir leur
préservation jusqu’à ce qu’il ait été statué à leur égard
conformément au droit applicable;
L.R., ch. 42 (4e
 suppl.), art. 2
(3) Les alinéas 462.32(4)b) et c) de la version française de la même loi sont remplacés par ce qui
suit :
b) dans les meilleurs délais après l’exécution du mandat mais au plus tard le septième jour qui suit celle-ci,
de faire un rapport, selon la formule 5.3, comportant la
désignation des biens saisis et indiquant le lieu où ils
se trouvent et de le faire déposer auprès du greffier du
tribunal;
c) de faire remettre, sur demande, un exemplaire du
rapport au saisi et à toute autre personne qui, de l’avis
du juge, semble avoir un droit sur les biens saisis.
2021-2022 6 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 11-12 Articles 11-12
2002, c. 13, s. 18
13 Paragraph 482.1(1)(b) of the Act is replaced by
the following:
(b) permitting personnel of the court to deal with administrative matters relating to proceedings out of
court; and
2019, c. 25, s. 188
14 Subsection 485(1.1) of the Act is replaced by
the following:
When accused not appearing personally or in person
(1.1) Jurisdiction over an accused is not lost by reason of
the failure of the accused to appear personally or in person, so long as the provisions of this Act or a rule made
under section 482 or 482.1 permitting the accused not to
appear personally or in person apply.
15 The Act is amended by adding the following
after section 485.1:
Summons — Identification of Criminals Act
485.2 (1) A justice or judge may, on application in writing and on oath in Form 6.1, issue a summons, in Form
6.2, requiring an accused or offender to appear at a time
and place stated in it for the purposes of the Identification of Criminals Act if
(a) the accused is charged with, or the offender has
been determined to be guilty of, an offence referred to
in paragraph 2(1)(c) of that Act;
(b) the accused or offender was previously required to
appear for the purposes of that Act and the measurements, processes or operations referred to in that Act
were not completed; and
(c) the justice or judge is satisfied that the reasons for
the measurements, processes or operations not having
been completed were exceptional.
Limitation
(2) Subsection (1) applies in respect of an offender only
if proceedings are ongoing in relation to the matter for
which they were previously required to appear for the
purposes of the Identification of Criminals Act and for
which the sentencing proceedings have not concluded.
2002, ch. 13, art. 18
13 L’alinéa 482.1(1)b) de la même loi est remplacé
par ce qui suit :
b) de permettre à ses fonctionnaires de régler des
questions de nature administrative touchant aux procédures tenues à l’extérieur du tribunal;
2019, ch. 25, art. 188
14 Le paragraphe 485(1.1) de la même loi est remplacé par ce qui suit :
Accusé qui ne comparaît pas personnellement ou en
personne
(1.1) Le tribunal ne perd pas sa compétence à l’égard de
l’accusé qui omet de comparaître personnellement ou en
personne pour autant que s’appliquent les dispositions
de la présente loi — ou une règle établie en vertu des articles 482 ou 482.1 — lui permettant de ne pas comparaître personnellement ou en personne.
15 La même loi est modifiée par adjonction,
après l’article 485.1, de ce qui suit :
Sommation — Loi sur l’identification des criminels
485.2 (1) Le juge de paix ou le juge peut, sur demande
présentée par écrit et sous serment selon la formule 6.1,
décerner une sommation, selon la formule 6.2, pour enjoindre à l’accusé ou au contrevenant de comparaître,
pour l’application de la Loi sur l’identification des criminels, aux date, heure et lieu indiqués, si les conditions
suivantes sont remplies :
a) l’infraction dont l’accusé est inculpé ou à l’égard de
laquelle la culpabilité du contrevenant a été déterminée est une infraction visée à l’alinéa 2(1)c) de cette
loi;
b) l’accusé ou le contrevenant a antérieurement été tenu de comparaître pour l’application de cette loi et les
mensurations ou les autres opérations prévues par
cette loi n’ont pu être prises ou effectuées;
c) le juge de paix ou le juge est convaincu que les motifs pour lesquels les mensurations n’ont pu être prises
ou les autres opérations effectuées sont exceptionnels.
Restriction
(2) Le paragraphe (1) ne s’applique à l’égard d’un contrevenant que si les procédures de l’affaire pour laquelle il
était antérieurement tenu de comparaître aux fins de la
Loi sur l’identification des criminels sont en cours et
dont les procédures de détermination de la peine n’ont
pas été conclues.
2021-2022 7 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 13-15 Articles 13-15
Reasons
(3) The application must state the reasons why the measurements, processes or operations were not completed.
Ex parte application
(4) A justice or judge may proceed ex parte to determine
an application made under subsection (1).
Application — telecommunication
(5) The application may also be made by any means of
telecommunication that produces a writing.
Alternative to oath
(6) A person who uses a means of telecommunication referred to in subsection (5) may, instead of swearing an
oath, make a statement in writing stating that all matters
contained in the application are true to their knowledge
and belief, and that statement is deemed to be a statement made under oath.
Contents of summons
(7) The summons must
(a) be directed to the accused or offender;
(b) set out briefly the offence in respect of which the
accused is charged or the offender has been determined to be guilty; and
(c) set out a summary of subsection 145(3), section
512.1 and subsection 524(4).
Service of summons
(8) The summons must be served by a peace officer who
shall either deliver it personally to the person to whom it
is directed or, if that person cannot conveniently be
found, leave it for the person at their latest or usual place
of residence with any person found there who appears to
be at least 16 years of age.
R.S., c. 27 (1st Supp.), s. 68(2)
16 Paragraph 487(1)(e) of the Act is replaced by
the following:
(e) subject to any other Act of Parliament, to, as soon
as practicable, bring the thing seized before, or make a
report in respect of it to, a justice in accordance with
section 489.1.
1997, c. 18, s. 42(2)
17 Subsection 487.01(7) of the Act is repealed.
Motifs
(3) La demande énonce les motifs pour lesquels les mensurations ou autres opérations prévues à des fins d’identification n’ont pu être prises ou effectuées.
Demande ex parte
(4) Le juge de paix ou le juge peut procéder ex parte
pour trancher une demande visée au paragraphe (1).
Demande par télécommunication
(5) La demande peut également être présentée par un
moyen de télécommunication qui rend la communication
sous forme écrite.
Substitution au serment
(6) Si la demande est présentée par un moyen de télécommunication visé au paragraphe (5), le demandeur
peut, au lieu de prêter serment, faire une déclaration par
écrit selon laquelle il croit vrais, à sa connaissance, les
renseignements fournis à l’appui de la demande. Sa déclaration est réputée être faite sous serment.
Contenu de la sommation
(7) La sommation :
a) est adressée à l’accusé ou au contrevenant;
b) énonce brièvement l’infraction dont l’accusé est inculpé ou à l’égard de laquelle la culpabilité du contrevenant a été déterminée;
c) comporte un résumé du paragraphe 145(3), de l’article 512.1 et du paragraphe 524(4).
Signification de la sommation
(8) La sommation est signifiée par un agent de la paix
soit à personne, soit, si l’intéressé ne peut commodément
être trouvé, à son dernier ou habituel domicile par remise
à quiconque s’y trouve et paraît âgé d’au moins seize ans.
L.R., ch. 27 (1er suppl.), par. 68(2)
16 L’alinéa 487(1)e) de la même loi est remplacé
par ce qui suit :
e) d’autre part, sous réserve de toute autre loi fédérale, dans les plus brefs délais possible, à apporter la
chose devant un juge de paix, ou en faire rapport, en
conformité avec l’article 489.1.
1997, ch. 18, par. 42(2)
17 Le paragraphe 487.01(7) de la même loi est
abrogé.
2021-2022 8 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 15-17 Articles 15-17
2019, c. 25, s. 195
18 Section 487.02 of the Act is replaced by the following:
Assistance order
487.02 (1) If an authorization is given under section
184.2, 186 or 188 or a warrant is issued under this Act, the
judge or justice who gives the authorization or issues the
warrant may order a person to provide assistance, if the
person’s assistance may reasonably be considered to be
required to give effect to the authorization or warrant.
The order has effect throughout Canada.
Telecommunication
(2) If the authorization is given or the warrant is issued
by a means of telecommunication under section 184.3 or
487.1, the order to provide assistance may be issued by a
means of telecommunication and, in that case, section
184.3 or 487.1, as the case may be, applies with respect to
the order.
2019, c. 25, s. 196.1(2)
19 Subparagraph (c)(iv.4) of the definition secondary designated offence in section 487.04 of the
Act is repealed.
1997, c. 18, s. 44
20 Subsection 487.05(3) of the Act is repealed.
1997, c. 18, s. 45
21 Subsection 487.092(4) of the Act is repealed.
R.S, c. 27 (1st Supp.), s. 69; 1994, c. 44, ss. 37(1) to (3) and (5) to (7); 2014, c. 31, s. 21;
2018, c. 21, s. 19
22 Section 487.1 of the Act and the heading before
it are replaced by the following:
Other Provisions Respecting Warrants
and Orders
Duty of person executing certain warrants
487.093 (1) A person who executes a warrant issued
under subsection 117.04(1), 199(1), 395(1) or 487(1) shall,
during that execution,
(a) give the following to any person who is present
and ostensibly in control of the building, receptacle or
place to be searched:
(i) a copy of the warrant, and
2019, ch. 25, art. 195
18 L’article 487.02 de la même loi est remplacé
par ce qui suit :
Ordonnance d’assistance
487.02 (1) Le juge ou le juge de paix qui a donné une
autorisation en vertu des articles 184.2, 186 ou 188 ou a
délivré un mandat en vertu de la présente loi peut ordonner à toute personne de prêter son assistance si celle-ci
peut raisonnablement être jugée nécessaire à l’exécution
des actes autorisés ou du mandat. L’ordonnance a effet
partout au Canada.
Télécommunication
(2) Si l’autorisation est accordée ou le mandat délivré par
un moyen de télécommunication au titre des articles
184.3 ou 487.1, l’ordonnance d’assistance peut également
être ainsi rendue et, le cas échéant, les articles 184.3 ou
487.1, selon le cas, s’applique à l’ordonnance.
2019, ch. 25, par. 196.1(2)
19 Le sous-alinéa c)(iv.4) de la définition de infraction secondaire, à l’article 487.04 de la même
loi, est abrogé.
1997, ch. 18, art. 44
20 Le paragraphe 487.05(3) de la même loi est
abrogé.
1997, ch. 18, art. 45
21 Le paragraphe 487.092(4) de la même loi est
abrogé.
L.R., ch. 27 (1er suppl.), art. 69; 1994, ch. 44, par. 37(1) à (3) et (5) à (7); 2014, ch. 31, art.
21; 2018, ch. 21, art. 19
22 L’article 487.1 de la même loi et l’intertitre le
précédant sont remplacés par ce qui suit :
Autres dispositions : mandats et
ordonnances
Obligation de la personne qui exécute certains
mandats
487.093 (1) Durant l’exécution d’un mandat décerné en
vertu des paragraphes 117.04(1), 199(1), 395(1) ou 487(1),
la personne qui l’exécute :
a) remet à toute personne présente qui est apparemment responsable du bâtiment, du contenant ou du
lieu devant faire l’objet de la perquisition les documents suivants :
(i) une copie du mandat,
2021-2022 9 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 18-22 Articles 18-22
(ii) a notice in Form 5.1 setting out the address of
the court before which anything seized during the
execution may be brought or from which a copy of a
report on anything so seized may be obtained;
(b) affix the copy and the notice in a prominent location within the building or place or on or next to the
receptacle, if there is no person present and ostensibly
in control of the building, receptacle or place; or
(c) give the copy and the notice to the person to be
searched, if the warrant is issued under subsection
395(1) for the search of a person.
Exception
(2) Subsection (1) does not apply if the warrant authorizes the search of anything that is detained under this
Act after it has been lawfully seized.
Warrants, etc., by telecommunication
487.1 (1) Despite anything in this Act, the Attorney
General, a peace officer or a public officer may, if they are
permitted to apply for any of the following, submit their
application by a means of telecommunication:
(a) a warrant under subsection 83.222(1);
(b) an order under subsection 83.223(1);
(c) a warrant under subsection 117.04(1);
(d) a warrant under subsection 164(1);
(e) an order under subsection 164.1(1);
(f) a warrant under subsection 320(1);
(g) an order under subsection 320.1(1);
(h) a warrant under subsection 320.29(1);
(i) a warrant under subsection 395(1);
(j) a warrant under subsection 462.32(1);
(k) an order under subsection 462.33(3);
(l) a warrant under subsection 487(1);
(m) a warrant under subsection 487.01(1) that does
not authorize the observation of a person by means of
a television camera or other similar electronic device;
(n) an extension under subsection 487.01(5.2);
(o) an order under any of sections 487.013 to 487.018;
(ii) un avis rédigé selon la formule 5.1 indiquant,
dans le cas où des choses sont saisies durant l’exécution, l’adresse du tribunal où elles pourront être
apportées ou où une copie du rapport des choses
saisies pourra être obtenue;
b) en l’absence d’une telle personne, affiche les documents dans un endroit bien en vue dans le bâtiment
ou le lieu ou sur le contenant ou près de celui-ci;
c) dans le cas d’un mandat décerné en vertu du paragraphe 395(1) qui autorise la fouille d’une personne,
remet à celle-ci une copie du mandat et l’avis.
Exception
(2) Le paragraphe (1) ne s’applique pas si le mandat autorise la fouille d’une chose détenue au titre de la présente loi à la suite d’une saisie légale.
Mandat, etc., par télécommunication
487.1 (1) Malgré toute autre disposition de la présente
loi, s’il est habilité à présenter une demande visant un
mandat, une ordonnance, une autorisation ou une prolongation ci-après, le procureur général, l’agent de la paix
ou le fonctionnaire public peut le faire par un moyen de
télécommunication :
a) le mandat prévu au paragraphe 83.222(1);
b) l’ordonnance prévue au paragraphe 83.223(1);
c) le mandat prévu au paragraphe 117.04(1);
d) le mandat prévu au paragraphe 164(1);
e) l’ordonnance prévue au paragraphe 164.1(1);
f) le mandat prévu au paragraphe 320(1);
g) l’ordonnance prévue au paragraphe 320.1(1);
h) le mandat prévu au paragraphe 320.29(1);
i) le mandat prévu au paragraphe 395(1);
j) le mandat prévu au paragraphe 462.32(1);
k) l’ordonnance prévue au paragraphe 462.33(3);
l) le mandat prévu au paragraphe 487(1);
m) le mandat prévu au paragraphe 487.01(1) qui n’autorise pas l’observation d’une personne au moyen
d’une caméra de télévision ou d’un autre dispositif
électronique semblable;
n) la prolongation prévue au paragraphe 487.01(5.2);
2021-2022 10 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Section 22 Article 22
(p) an order under subsection 487.019(3);
(q) an order under subsection 487.0191(1);
(r) an order under subsection 487.0191(4);
(s) a warrant under subsection 487.05(1);
(t) a warrant under subsection 487.092(1);
(u) an order under subsection 487.3(1);
(v) an order under subsection 487.3(4);
(w) a warrant under subsection 492.1(1);
(x) a warrant under subsection 492.1(2);
(y) an authorization under subsection 492.1(7);
(z) a warrant under subsection 492.2(1).
Alternative to oath
(2) A person who must swear an oath in connection with
an application submitted by a means of telecommunication that produces a writing may, instead of swearing the
oath, make a statement in writing stating that all matters
submitted in support of the application are true to their
knowledge and belief, and the statement is deemed to be
a statement made under oath.
Certification
(3) A judicial officer who receives an application submitted by a means of telecommunication that produces a
writing shall certify the application as to time and date of
receipt.
Limitation
(4) An application under subsection 487.01(5.2) shall not
be submitted by a means of telecommunication that does
not produce a writing.
Application — telecommunication not producing
writing
(5) An applicant may submit their application by a
means of telecommunication that does not produce a
writing only if it would be impracticable in the circumstances to submit the application by a means of telecommunication that produces a writing.
o) l’ordonnance prévue à l’un des articles 487.013 à
487.018;
p) l’ordonnance prévue au paragraphe 487.019(3);
q) l’ordonnance prévue au paragraphe 487.0191(1);
r) l’ordonnance prévue au paragraphe 487.0191(4);
s) le mandat prévu au paragraphe 487.05(1);
t) le mandat prévu au paragraphe 487.092(1);
u) l’ordonnance prévue au paragraphe 487.3(1);
v) l’ordonnance prévue au paragraphe 487.3(4);
w) le mandat prévu au paragraphe 492.1(1);
x) le mandat prévu au paragraphe 492.1(2);
y) l’autorisation prévue au paragraphe 492.1(7);
z) le mandat prévu au paragraphe 492.2(1).
Substitution au serment
(2) La personne qui doit prêter serment dans le cadre
d’une demande présentée par un moyen de télécommunication qui rend la communication sous forme écrite
peut, au lieu de prêter serment, faire une déclaration par
écrit selon laquelle elle croit vrais, à sa connaissance, les
renseignements fournis à l’appui de la demande. La déclaration est réputée être faite sous serment.
Certification
(3) Le fonctionnaire judiciaire qui reçoit une demande
présentée par un moyen de télécommunication qui rend
la communication sous forme écrite en certifie la date et
l’heure de réception.
Restriction
(4) Aucune demande ne peut être présentée au titre du
paragraphe 487.01(5.2) par un moyen de télécommunication qui ne rend pas la communication sous forme écrite.
Demande par un moyen de télécommunication :
aucune forme écrite
(5) Le demandeur ne peut présenter sa demande par un
moyen de télécommunication qui ne rend pas la communication sous forme écrite que si les circonstances
rendent peu commode pour lui de la présenter par un
moyen de télécommunication qui rend la communication
sous forme écrite.
2021-2022 11 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Section 22 Article 22
Statement of circumstances
(6) An application submitted by a means of telecommunication that does not produce a writing shall include a
statement of the circumstances that make it impracticable to submit the application by a means of telecommunication that produces a writing.
Oath
(7) Any oath required in connection with an application
submitted by a means of telecommunication that does
not produce a writing may be administered by a means of
telecommunication.
Certification
(8) A judicial officer who receives an application submitted by a means of telecommunication that does not produce a writing shall record the application verbatim, in
writing or otherwise, and certify the record or a transcription of it as to time, date and contents.
Limitation on issuance
(9) If an application is submitted by a means of telecommunication that does not produce a writing, the judicial
officer shall not issue the warrant, order, extension or authorization unless he or she is satisfied that the application discloses reasonable grounds for dispensing with its
submission by a means of telecommunication that produces a writing.
Warrant, etc.
(10) A judicial officer who issues the warrant, order, extension or authorization may do so by a means of
telecommunication, in which case
(a) the judicial officer shall complete and sign the document in question, noting on its face the time and
date;
(b) if the means of telecommunication produces a
writing, the judicial officer shall transmit a copy of the
document to the applicant by that means; and
(c) if the means of telecommunication does not produce a writing, the applicant shall, as directed by the
judicial officer, transcribe the document, noting on its
face the name of the judicial officer as well as the time
and date.
Definitions
(11) The following definitions apply in this section.
Énoncé des circonstances
(6) La demande présentée par un moyen de télécommunication qui ne rend pas la communication sous forme
écrite comporte un énoncé des circonstances mentionnées au paragraphe (5).
Serment
(7) Tout serment à prêter dans le cadre d’une demande
présentée par un moyen de télécommunication qui ne
rend pas la communication sous forme écrite peut être
prêté par un moyen de télécommunication.
Certification
(8) Le fonctionnaire judiciaire qui reçoit la demande présentée par un moyen de télécommunication qui ne rend
pas la communication sous forme écrite l’enregistre mot
à mot par écrit ou autrement et certifie le contenu, la date
et l’heure de l’enregistrement.
Restriction sur la délivrance
(9) Si la demande est présentée par un moyen de télécommunication qui ne rend pas la communication sous
forme écrite, le fonctionnaire judiciaire ne doit décerner
le mandat, rendre l’ordonnance ou accorder l’autorisation ou la prolongation que s’il est convaincu que la demande démontre l’existence de motifs raisonnables pour
exempter le demandeur de la présenter par un moyen de
télécommunication qui rend la communication sous
forme écrite.
Mandat, etc.
(10) Le fonctionnaire judiciaire qui décerne un mandat,
rend une ordonnance ou accorde une autorisation ou une
prolongation peut le faire par un moyen de télécommunication. Le cas échéant :
a) il remplit et signe le document pertinent et y indique la date et l’heure;
b) si le moyen rend la communication sous forme
écrite, il transmet une copie du document au demandeur par ce moyen;
c) si le moyen ne rend pas la communication sous
forme écrite, le demandeur transcrit le document, sur
l’ordre du fonctionnaire judiciaire, et y indique le nom
de ce dernier, la date et l’heure.
Définitions
(11) Les définitions qui suivent s’appliquent au présent
article.
2021-2022 12 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Section 22 Article 22
judicial officer means a judge or justice who is authorized, under the applicable provision of this Act, to issue
a warrant, order, extension or authorization referred to
in subsection (1). (fonctionnaire judiciaire)
public officer means a public officer who is appointed or
designated to administer or enforce a federal or provincial law and whose duties include the enforcement of this
Act or any other Act of Parliament. (fonctionnaire public)
2005, c. 32, s. 16(1)
23 The portion of section 487.2 of the Act before
paragraph (a) is replaced by the following:
Restriction on publication
487.2 If a search warrant is issued under section 487 or
a search is made under such a warrant, everyone who
publishes in any document, or broadcasts or transmits in
any way, any information with respect to
1997, c. 18, s. 47
24 The portion of section 488 of the Act before
paragraph (a) is replaced by the following:
Execution of search warrant
488 A warrant issued under section 487 shall be executed by day, unless
2017, c. 22, s. 3
25 Subsection 488.01(2) of the Act is replaced by
the following:
Warrant, authorization and order
(2) Despite any other provision of this Act, if an applicant for a warrant under section 487.01, 492.1 or 492.2, a
search warrant under this Act, notably under section 487,
an authorization under section 184.2, 186 or 188, or an order under any of sections 487.014 to 487.017 knows that
the application relates to a journalist’s communications
or an object, document or data relating to or in the possession of a journalist, they shall make the application to
a judge of a superior court of criminal jurisdiction or to a
judge as defined in section 552. That judge has exclusive
jurisdiction to dispose of the application.
fonctionnaire judiciaire Le juge ou le juge de paix habilité au titre de la disposition applicable de la présente loi
à décerner le mandat, à rendre l’ordonnance ou à accorder l’autorisation ou la prolongation visé au paragraphe
(1). (judicial officer)
fonctionnaire public Fonctionnaire public nommé ou
désigné pour l’exécution ou le contrôle d’application
d’une loi fédérale ou provinciale et chargé notamment de
faire observer la présente loi ou toute autre loi fédérale.
(public officer)
2005, ch. 32, par. 16(1)
23 Le passage de l’article 487.2 de la même loi
précédant l’alinéa a) est remplacé par ce qui
suit :
Non-publication
487.2 Dans le cas où un mandat de perquisition est décerné en vertu de l’article 487, ou une perquisition est effectuée en vertu d’un tel mandat, est coupable d’une infraction punissable sur déclaration de culpabilité par
procédure sommaire, à moins qu’une accusation n’ait été
portée à l’égard d’une infraction visée par le mandat, quiconque publie ou diffuse de quelque façon que ce soit,
sans la permission de chaque personne visée à l’alinéa b),
des renseignements concernant :
1997, ch. 18, art. 47
24 Le passage de l’article 488 de la même loi précédant l’alinéa a) est remplacé par ce qui suit :
Exécution d’un mandat de perquisition
488 Le mandat décerné en vertu de l’article 487 est exécuté de jour, à moins que les conditions suivantes ne
soient réunies :
2017, ch. 22, art. 3
25 Le paragraphe 488.01(2) de la même loi est
remplacé par ce qui suit :
Mandat, autorisation et ordonnance
(2) Malgré les autres dispositions de la présente loi,
s’agissant d’un mandat prévu aux articles 487.01, 492.1 ou
492.2, d’un mandat de perquisition prévu par la présente
loi, notamment à l’article 487, d’une autorisation prévue
aux articles 184.2, 186 ou 188 ou d’une ordonnance prévue à l’un des articles 487.014 à 487.017, s’il sait que sa
demande concerne les communications d’un journaliste
ou une chose, un document ou des données concernant
un journaliste ou en la possession de celui-ci, le demandeur la présente à un juge d’une cour supérieure de juridiction criminelle ou à un juge, au sens de l’article 552,
qui ont compétence exclusive pour statuer à cet égard.
2021-2022 13 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 22-25 Articles 22-25
R.S., c. 27 (1st Supp.), s. 72; 1997, c. 18, s. 49
26 Section 489.1 of the Act is replaced by the following:
Restitution of thing or report
489.1 (1) Subject to this or any other Act of Parliament,
if a peace officer has seized anything under a warrant issued under this Act, under section 487.11 or 489, or otherwise in the execution of duties under this or any other
Act of Parliament, the peace officer shall, as soon as is
practicable,
(a) return the thing seized, on being issued a receipt
for it, to the person lawfully entitled to its possession
and report to a justice having jurisdiction in respect of
the matter and, in the case of a warrant, jurisdiction in
the province in which the warrant was issued, if the
peace officer is satisfied that
(i) there is no dispute as to who is lawfully entitled
to possession of the thing seized, and
(ii) the continued detention of the thing seized is
not required for the purposes of any investigation
or a preliminary inquiry, trial or other proceeding;
or
(b) bring the thing seized before a justice referred to
in paragraph (a), or report to the justice that the thing
has been seized and is being detained, to be dealt with
in accordance with subsection 490(1), if the peace officer is not satisfied as described in subparagraphs (a)(i)
and (ii).
Person other than peace officer
(2) Subject to this or any other Act of Parliament, if a
person other than a peace officer has seized anything under a warrant issued under this Act, under section 487.11
or 489, or otherwise in the execution of duties under this
or any other Act of Parliament, that person shall, as soon
as is practicable and so that the thing seized may be dealt
with in accordance with subsection 490(1),
(a) bring the thing before a justice having jurisdiction
in respect of the matter and, in the case of a warrant,
jurisdiction in the province in which the warrant was
issued; or
(b) report to the justice referred to in paragraph (a)
that the thing has been seized and is being detained.
L.R., ch. 27 (1er suppl.), art. 72; 1997, ch. 18, art. 49
26 L’article 489.1 de la même loi est remplacé par
ce qui suit :
Remise des biens ou rapports
489.1 (1) Sous réserve des autres dispositions de la présente loi ou de toute autre loi fédérale, l’agent de la paix
qui a saisi des biens en vertu d’un mandat décerné sous
le régime de la présente loi, en vertu des articles 487.11
ou 489 ou autrement dans l’exercice des fonctions que lui
confère la présente loi ou une autre loi fédérale prend,
dans les plus brefs délais possible, les mesures ci-après à
l’égard des choses saisies :
a) il les remet, sur remise d’un reçu, à la personne qui
a droit à leur possession légitime et en fait rapport à
un juge de paix compétent et, dans le cas où un mandat a été décerné, qui est compétent dans la province
où celui-ci a été décerné, s’il est convaincu :
(i) d’une part, qu’il n’y a aucune contestation quant
à leur possession légitime,
(ii) d’autre part, que leur détention n’est pas nécessaire aux fins d’enquête, d’enquête préliminaire, de
procès ou autres procédures;
b) il les apporte devant le juge de paix visé à l’alinéa a)
ou lui fait rapport du fait qu’elles ont été saisies et
qu’elles sont détenues, s’il n’est pas convaincu de
l’existence des circonstances visées aux sous-alinéas
a)(i) et (ii), pour qu’il en soit disposé en conformité
avec le paragraphe 490(1).
Personne autre qu’un agent de la paix
(2) Sous réserve des autres dispositions de la présente loi
ou d’une autre loi fédérale, la personne qui n’est pas un
agent de la paix et qui a saisi des choses en vertu d’un
mandat décerné sous le régime de la présente loi, en vertu des articles 487.11 ou 489 ou autrement dans l’exercice
des fonctions que lui confère la présente loi ou une autre
loi fédérale prend, dans les plus brefs délais possible, l’une des mesures ci-après à l’égard des choses saisies pour qu’il en soit disposé en conformité avec le paragraphe 490(1) :
a) il les apporte devant un juge de paix compétent et,
dans le cas où un mandat a été décerné, qui est compétent dans la province où celui-ci a été décerné;
b) il fait rapport au juge de paix visé à l’alinéa a) du
fait qu’elles ont été saisies et qu’elles sont détenues.
2021-2022 14 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Section 26 Article 26
Form
(3) A report to a justice under this section shall be in
Form 5.2, varied to suit the case.
R.S., c. 27 (1st Supp.), s. 70
27 Subsection 492(1) of the Act is replaced by the
following:
Seizure of explosives
492 (1) Every person who executes a warrant issued under section 487 may seize any explosive substance that
they suspect is intended to be used for an unlawful purpose, and shall, as soon as possible, remove to a place of
safety anything that they seize under this section and detain it until they are ordered by a judge of a superior
court to deliver it to some other person or an order is
made under subsection (2).
2019, c. 25, s. 215
28 Subsection 500(3) of the Act is replaced by the
following:
Attendance for purposes of Identification of Criminals
Act
(3) An appearance notice may require the accused to appear at the time and place stated in it for the purposes of
the Identification of Criminals Act, if the accused is alleged to have committed an offence referred to in paragraph 2(1)(c) of that Act.
2019, c. 25, s. 215
29 Subsection 501(4) of the Act is replaced by the
following:
Attendance for purposes of Identification of Criminals
Act
(4) The undertaking may require the accused to appear
at the time and place stated in it for the purposes of the
Identification of Criminals Act, if the accused is alleged
to have committed an offence referred to in paragraph
2(1)(c) of that Act.
2019, c. 25, s. 216
30 (1) Subsection 502.1(1) of the English version
of the Act is amended by replacing “personally”
with “in person”.
2019, c. 25, s. 216
(2) Subsections 502.1(4) and (5) of the English version of the Act are replaced by the following:
Formule
(3) Le rapport à un juge de paix visé au présent article
est rédigé selon la formule 5.2, adaptée aux circonstances.
L.R., ch. 27 (1er suppl.), art. 70
27 Le paragraphe 492(1) de la même loi est remplacé par ce qui suit :
Saisie d’explosifs
492 (1) Toute personne qui exécute un mandat décerné
en vertu de l’article 487 peut saisir une substance explosive qu’elle soupçonne être destinée à servir à une fin illégale et elle doit, dès que possible, transporter dans un endroit sûr tout ce qu’elle saisit en vertu du présent article
et le détenir jusqu’à ce qu’elle reçoive, d’un juge d’une
cour supérieure, l’ordre de le livrer à une autre personne
ou un ordre rendu en conformité avec le paragraphe (2).
2019, ch. 25, art. 215
28 Le paragraphe 500(3) de la même loi est remplacé par ce qui suit :
Comparution pour l’application de la Loi sur
l’identification des criminels
(3) La citation à comparaître peut enjoindre au prévenu
de comparaître, pour l’application de la Loi sur l’identification des criminels, aux date, heure et lieu indiqués,
lorsqu’il est allégué que le prévenu a commis une infraction visée à l’alinéa 2(1)c) de cette loi.
2019, ch. 25, art. 215
29 Le paragraphe 501(4) de la même loi est remplacé par ce qui suit :
Comparution pour l’application de la Loi sur
l’identification des criminels
(4) La promesse peut enjoindre au prévenu de comparaître, pour l’application de la Loi sur l’identification des
criminels, aux date, heure et lieu indiqués, lorsqu’il est
allégué que le prévenu a commis une infraction visée à
l’alinéa 2(1)c) de cette loi.
2019, ch. 25, art. 216
30 (1) Au paragraphe 502.1(1) de la version anglaise de la même loi, « personally » est remplacé
par « in person ».
2019, ch. 25, art. 216
(2) Les paragraphes 502.1(4) et (5) de la version
anglaise de la même loi sont remplacés par ce qui
suit :
2021-2022 15 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 26-30 Articles 26-30
Participants
(4) A participant, as defined in subsection 715.25(1),
who is to participate in a proceeding under this Part shall
participate in person but may participate by audioconference or videoconference, if it is satisfactory to the justice.
Justice
(5) The justice who is to preside at a proceeding under
this Part shall preside in person but may preside by audioconference or videoconference, if the justice considers
it necessary in the circumstances.
1992, c. 47, s. 71; 1996, c. 7, s. 38
31 Subsection 509(5) of the Act is replaced by the
following:
Attendance for purposes of Identification of Criminals
Act
(5) A summons may require the accused to appear at a
time and place stated in it for the purposes of the Identification of Criminals Act, if the accused is alleged to have
committed an offence referred to in paragraph 2(1)(c) of
that Act.
2019, c. 25, s. 225(2)
32 Subsection 515(2.2) of the English version of
the Act is replaced by the following:
Appearance of the accused
(2.2) If, by this Act, the appearance of an accused is required for the purposes of judicial interim release, the accused shall appear in person but the justice may allow
the accused to appear by videoconference or, subject to
subsection (2.3), by audioconference, if the technological
means is satisfactory to the justice.
33 The Act is amended by adding the following
after section 515:
Attendance — Identification of Criminals Act
515.01 When a release order is made under section 515,
the judge or justice may also make an order, in Form
11.1, requiring the accused to appear at the time and
place stated in it for the purposes of the Identification of
Criminals Act if the accused is charged with an offence
referred to in paragraph 2(1)(c) of that Act.
1997, c. 39, s. 2
34 Section 529.5 of the Act is replaced by the following:
Participants
(4) A participant, as defined in subsection 715.25(1),
who is to participate in a proceeding under this Part shall
participate in person but may participate by audioconference or videoconference, if it is satisfactory to the justice.
Justice
(5) The justice who is to preside at a proceeding under
this Part shall preside in person but may preside by audioconference or videoconference, if the justice considers
it necessary in the circumstances.
1992, ch. 47, art. 71; 1996, ch. 7, art. 38
31 Le paragraphe 509(5) de la même loi est remplacé par ce qui suit :
Comparution aux fins de la Loi sur l’identification des
criminels
(5) Une sommation peut enjoindre au prévenu de comparaître, pour l’application de la Loi sur l’identification
des criminels, aux temps et lieu indiqués, lorsqu’il est allégué que le prévenu a commis une infraction visée à
l’alinéa 2(1)c) de cette loi.
2019, ch. 25, par. 225(2)
32 Le paragraphe 515(2.2) de la version anglaise
de la même loi est remplacé par ce qui suit :
Appearance of the accused
(2.2) If, by this Act, the appearance of an accused is required for the purposes of judicial interim release, the accused shall appear in person but the justice may allow
the accused to appear by videoconference or, subject to
subsection (2.3), by audioconference, if the technological
means is satisfactory to the justice.
33 La même loi est modifiée par adjonction,
après l’article 515, de ce qui suit :
Comparution — Loi sur l’identification des criminels
515.01 Lorsqu’une ordonnance de mise en liberté est
rendue en application de l’article 515, le juge de paix ou le
juge peut également rendre une ordonnance, selon la formule 11.1, pour enjoindre à l’accusé de comparaître pour
l’application de la Loi sur l’identification des criminels
aux date, heure et lieu indiqués dans l’ordonnance, s’il
est accusé d’avoir commis une infraction visée à l’alinéa
2(1)c) de cette loi.
1997, ch. 39, art. 2
34 L’article 529.5 de la même loi est remplacé par
ce qui suit :
2021-2022 16 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 30-34 Articles 30-34
Means of telecommunication
529.5 An application for a warrant under section 529.1
or an authorization under section 529 or 529.4 may be
submitted, and the warrant or authorization may be issued, by a means of telecommunication, and section
487.1 applies for those purposes with any necessary modifications.
2019, c. 25, s. 242(1)
35 (1) Paragraph 537(1)(j) of the Act is replaced
by the following:
(j) if the prosecutor and the accused consent, allow
the accused to appear by counsel for any part of the inquiry, other than a part in which the evidence of a witness is taken; and
2019, c. 25, s. 242(2)
(2) Subsection 537(1) of the Act is amended by
striking out “and” at the end of paragraph (j.1)
and by repealing paragraph (k).
2019, c. 25, s. 252(1)
36 (1) Subsections 555(1) and (1.1) of the Act are
replaced by the following:
If charge should be prosecuted by indictment
555 (1) If in any proceedings under this Part an accused
is before a provincial court judge and it appears to the
provincial court judge that for any reason the charge
should be prosecuted by indictment, the provincial court
judge may, at any time before the accused has entered a
defence, decide not to adjudicate and shall then inform
the accused of the decision.
Election before justice
(1.1) If the provincial court judge has decided not to adjudicate, the judge shall put the accused to an election in
the following words:
You have the option to elect to be tried by a judge without a jury or
you may elect to be tried by a court composed of a judge and jury. If
you do not elect now, you are deemed to have elected to be tried by a
court composed of a judge and jury. If you elect to be tried by a judge
without a jury or by a court composed of a judge and jury or if you are
deemed to have elected to be tried by a court composed of a judge
and jury, you will have a preliminary inquiry only if you are entitled
to one and you or the prosecutor requests one. How do you elect to be
tried?
2019, c. 25, s. 252(2)
(2) Paragraph 555(3)(a) of the Act is replaced by
the following:
Moyens de télécommunication
529.5 La demande visant le mandat prévu à l’article
529.1 ou l’autorisation prévue aux articles 529 ou 529.4
peut être présentée par un moyen de télécommunication
et le mandat ou l’autorisation peut être délivré par l’un de
ces moyens; l’article 487.1 s’applique alors avec les adaptations nécessaires.
2019, ch. 25, par. 242(1)
35 (1) L’alinéa 537(1)j) de la même loi est remplacé par ce qui suit :
j) avec le consentement du poursuivant et de l’accusé,
permettre à ce dernier de comparaître par avocat, durant toute l’enquête sauf durant la présentation de la
preuve testimoniale;
2019, ch. 25, par. 242(2)
(2) L’alinéa 537(1)k) de la même loi est abrogé.
2019, ch. 25, par. 252(1)
36 (1) Les paragraphes 555(1) et (1.1) de la même
loi sont remplacés par ce qui suit :
Inculpation désormais poursuivie par mise en
accusation
555 (1) Lorsque, dans toutes procédures prévues par la
présente partie, un prévenu est devant un juge de la cour
provinciale et qu’il apparaît à celui-ci que, pour une raison quelconque, l’inculpation devrait être poursuivie par
mise en accusation, le juge de la cour provinciale peut, à
tout moment avant que le prévenu ait commencé sa défense, décider de ne pas juger et doit, dès lors, informer
le prévenu de sa décision.
Choix
(1.1) Dans le cas où le juge de la cour provinciale décide
de ne pas juger le prévenu, le juge, après que la dénonciation a été lue au prévenu, l’appelle à faire son choix dans
les termes suivants :
Vous pouvez choisir d’être jugé par un juge sans jury; ou encore vous
pouvez choisir d’être jugé par un tribunal composé d’un juge et d’un
jury. Si vous ne faites pas ce choix maintenant, vous êtes réputé avoir
choisi d’être jugé par un tribunal composé d’un juge et d’un jury. Si
vous choisissez d’être jugé par un juge sans jury ou par un tribunal
composé d’un juge et d’un jury ou êtes réputé avoir choisi d’être jugé
par un tribunal composé d’un juge et d’un jury, une enquête préliminaire ne sera tenue que si vous avez droit de demander une enquête
préliminaire et que vous ou le poursuivant en faites la demande.
Comment choisissez-vous d’être jugé?
2019, ch. 25, par. 252(2)
(2) L’alinéa 555(3)a) de la même loi est remplacé
par ce qui suit :
2021-2022 17 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 34-36 Articles 34-36
(a) if the accused elects to be tried by a judge without
a jury or a court composed of a judge and jury or does
not elect when put to their election, the provincial
court judge shall endorse on the information a record
of the nature of the election or deemed election; and
2002, c. 13, s. 49(2)
37 Subsection 606(5) of the Act is repealed.
38 The Act is amended by adding the following
after section 631:
Electronic or automated means
631.1 Any electronic or other automated means may be
used to select jurors so long as the jurors would be randomly selected as required by the jury selection process
described in subsections 631(1) to (5).
2003, c. 21, s. 12; 2019, c. 25, s. 274
39 Subsections 650(1) to (1.2) of the Act are replaced by the following:
Accused to be present
650 (1) Subject to subsections (1.1) and (2) and section
650.01, an accused, other than an organization, shall be
present in court during the whole of their trial, either in
person or, if authorized under any of sections 715.231 to
715.241, by audioconference or videoconference.
Appearance by counsel
(1.1) The court may, with the consent of the prosecutor
and the accused, allow the accused to appear by counsel
for any part of the trial, other than a part in which the evidence of a witness is taken.
1994, c. 44, s. 65
40 Subsection 669.2(5) of the English version of
the Act is replaced by the following:
Where trial continued
(5) Where a trial is continued under subsection (4), any
evidence that was adduced before a judge referred to in
paragraph (1)(c) is deemed to have been adduced before
the judge before whom the trial is continued but, if the
prosecutor and the accused consent, any part of that evidence may be adduced again before the judge before
whom the trial is continued.
a) si le prévenu choisit d’être jugé par un juge sans jury ou par un tribunal composé d’un juge et d’un jury,
ou ne fait pas de choix, le juge de la cour provinciale
renvoie le prévenu pour subir son procès et inscrit sur
la dénonciation une mention de la nature du choix du
prévenu réel ou réputé;
2002, ch. 13, par. 49(2)
37 Le paragraphe 606(5) de la même loi est abrogé.
38 La même loi est modifiée par adjonction,
après l’article 631, de ce qui suit :
Moyens électroniques ou automatisés
631.1 Des moyens électroniques et d’autres moyens automatisés peuvent être utilisés pour la sélection des jurés,
pourvu que cette sélection soit aléatoire, comme le requiert le processus de constitution du jury prévu aux paragraphes 631(1) à (5).
2003, ch. 21, art. 12; 2019, ch. 25, art. 274
39 Les paragraphes 650(1) à (1.2) de la même loi
sont remplacés par ce qui suit :
Présence de l’accusé
650 (1) Sous réserve des paragraphes (1.1) et (2) et de
l’article 650.01, l’accusé, autre qu’une organisation, doit
être présent au tribunal pendant tout son procès, soit en
personne, soit, lorsque autorisé conformément à l’un des
articles 715.231 à 715.241, par audioconférence ou vidéoconférence.
Comparution par avocat
(1.1) Le tribunal peut, avec le consentement du poursuivant et de l’accusé, permettre à ce dernier de comparaître
par avocat durant tout le procès, sauf durant la présentation de la preuve testimoniale.
1994, ch. 44, art. 65
40 Le paragraphe 669.2(5) de la version anglaise
de la même loi est remplacé par ce qui suit :
Where trial continued
(5) Where a trial is continued under subsection (4), any
evidence that was adduced before a judge referred to in
paragraph (1)(c) is deemed to have been adduced before
the judge before whom the trial is continued but, if the
prosecutor and the accused consent, any part of that evidence may be adduced again before the judge before
whom the trial is continued.
2021-2022 18 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 36-40 Articles 36-40
2019, c. 25, s. 278
41 Paragraph (b) of the definition sentence in
section 673 of the Act is replaced by the following:
(b) an order made under subsection 109(1) or 110(1),
section 161, subsection 164.2(1) or 194(1), section
320.24 or 462.37, subsection 491.1(2), 730(1) or 737(2.1)
or (3) or section 738, 739, 742.1, 742.3, 743.6, 745.4 or
745.5,
2019, c. 25, s. 402(14)
42 Subsection 680(1) of the Act is replaced by the
following:
Review by court of appeal
680 (1) A decision made by a judge under section 522, a
decision made under subsections 524(3) to (5) with respect to an accused referred to in paragraph 524(1)(a) or
a decision made by a judge of the court of appeal under
section 320.25 or 679 may, on the direction of the chief
justice or acting chief justice of the court of appeal, be reviewed by that court and that court may, if it does not
confirm the decision,
(a) vary the decision; or
(b) substitute another decision that, in its opinion,
should have been made.
2002, c. 13, s. 68
43 The portion of subsection 688(2.1) of the English version of the Act before paragraph (a) is
replaced by the following:
Manner of appearance
(2.1) In the case of an appellant who is in custody and
who is entitled to be present at any proceedings on an appeal, the court may order that, instead of the appellant
appearing in person,
2019, c. 25, s. 290
44 Paragraph 714.1(b) of the English version of
the Act is replaced by the following:
(b) the costs that would be incurred if the witness
were to appear in person;
2019, c. 25, s. 292
45 Section 715.21 of the English version of the Act
is replaced by the following:
2019, ch. 25, art. 278
41 L’alinéa b) de la définition de sentence, peine
ou condamnation, à l’article 673 de la même loi, est
remplacé par ce qui suit :
b) l’ordonnance rendue en vertu des paragraphes
109(1) ou 110(1), de l’article 161, des paragraphes
164.2(1) ou 194(1), des articles 320.24 ou 462.37, des
paragraphes 491.1(2), 730(1) ou 737(2.1) ou (3) ou des
articles 738, 739, 742.1, 742.3, 743.6, 745.4 ou 745.5;
2019, ch. 25, par. 402(14)
42 Le paragraphe 680(1) de la même loi est remplacé par ce qui suit :
Révision par la cour d’appel
680 (1) La décision rendue par un juge en vertu de l’article 522, la décision rendue en vertu de tels des paragraphes 524(3) à (5) à l’égard du prévenu visé à l’alinéa
524(1)a) ou la décision rendue par un juge de la cour
d’appel en vertu des articles 320.25 ou 679 peut, sur
l’ordre du juge en chef ou du juge en chef suppléant de la
cour d’appel, faire l’objet d’une révision par ce tribunal et
celui-ci peut, s’il ne confirme pas la décision :
a) ou bien modifier la décision;
b) ou bien y substituer la décision qui, à son avis, aurait dû être rendue.
2002, ch. 13, art. 68
43 Le passage du paragraphe 688(2.1) de la version anglaise de la même loi précédant l’alinéa a)
est remplacé par ce qui suit :
Manner of appearance
(2.1) In the case of an appellant who is in custody and
who is entitled to be present at any proceedings on an appeal, the court may order that, instead of the appellant
appearing in person,
2019, ch. 25, art. 290
44 L’alinéa 714.1b) de la version anglaise de la
même loi est remplacé par ce qui suit :
(b) the costs that would be incurred if the witness
were to appear in person;
2019, ch. 25, art. 292
45 L’article 715.21 de la version anglaise de la
même loi est remplacé par ce qui suit :
2021-2022 19 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 41-45 Articles 41-45
Attendance
715.21 Except as otherwise provided in this Act, a person who appears at, participates in or presides at a proceeding shall do so in person.
2019, c. 25, s. 292
46 The heading before section 715.23 and sections
715.23 and 715.24 of the Act are replaced by the following:
General
Reasons
715.221 If the court denies a request respecting a person’s appearance or participation by audioconference or
videoconference under this Part, it shall include in the
record a statement of the reasons for the denial.
Cessation
715.222 If the court allows or requires a person’s appearance or participation by audioconference or videoconference under this Part, it may, at any time, cease the
use of those technological means and take any measure
that it considers appropriate in the circumstances to have
the person appear at or participate in the proceedings.
Accused and Offenders
Considerations — appearance by audioconference or
videoconference
715.23 Before making a determination to allow or require an accused or offender to appear by audioconference or videoconference under any of sections 715.231 to
715.241, the court must be of the opinion that the appearance by those means would be appropriate having regard
to all the circumstances, including
(a) the location and personal circumstances of the accused or offender;
(b) the costs that would be incurred if the accused or
offender were to appear in person;
(c) the suitability of the location from where the accused or offender will appear;
(d) the accused’s or offender’s right to a fair and public hearing; and
(e) the nature and seriousness of the offence.
Attendance
715.21 Except as otherwise provided in this Act, a person who appears at, participates in or presides at a proceeding shall do so in person.
2019, ch. 25, art. 292
46 L’intertitre précédant l’article 715.23 et les articles 715.23 et 715.24 de la même loi sont remplacés par ce qui suit :
Dispositions générales
Motifs
715.221 S’il rejette une demande visant la comparution
ou la participation d’une personne par audioconférence
ou vidéoconférence au titre de la présente partie, le tribunal porte au dossier les motifs du rejet.
Cessation
715.222 S’il permet ou exige la comparution ou la participation d’une personne par audioconférence ou vidéoconférence au titre de la présente partie, le tribunal peut,
en tout temps, mettre fin à l’utilisation du moyen en
cause et prendre toute mesure qu’il estime indiquée dans
les circonstances en vue de la comparution ou de la participation de la personne.
Accusés et contrevenants
Considérations — comparution par audioconférence
ou vidéoconférence
715.23 Avant de rendre une décision permettant ou exigeant la comparution de l’accusé ou du contrevenant par
audioconférence ou vidéoconférence au titre de l’un des
articles 715.231 à 715.241, le tribunal doit estimer que la
comparution par ces moyens est indiquée, eu égard aux
circonstances, notamment :
a) le lieu où se trouve l’accusé ou le contrevenant et sa
situation personnelle;
b) les coûts que sa comparution en personne impliquerait;
c) le caractère approprié du lieu à partir duquel il
comparaîtra;
d) son droit à un procès public et équitable;
e) la nature et la gravité de l’infraction.
2021-2022 20 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 45-46 Articles 45-46
Preliminary inquiry
715.231 The court may, with the consent of the prosecutor and the accused, allow an accused to appear by
videoconference at the preliminary inquiry.
Trial — summary conviction offence
715.232 The court may allow an accused to appear by
videoconference at a trial for a summary conviction offence
(a) if the accused is not in custody, with the consent of
the accused and the prosecutor; and
(b) if the accused is in custody, with the consent of the
accused.
Trial — indictable offence
715.233 The court may, with the consent of the prosecutor and the accused, allow an accused to appear by
videoconference at a trial for an indictable offence. However, an accused must not appear by videoconference
during a jury trial when evidence is being presented to
the jury.
Plea
715.234 (1) The court may, with the consent of the
prosecutor and the accused, allow an accused to appear
by audioconference or videoconference for the purpose of
making a plea.
Limitation
(2) The court may allow the accused to appear by audioconference only if it is satisfied that
(a) videoconferencing is not readily available; and
(b) the appearance by audioconference would permit
the court to inquire into the conditions for accepting a
plea of guilty under subsection 606(1.1) despite the
fact that the court would not be able to see the accused.
Sentencing
715.235 (1) The court may, with the consent of the
prosecutor and the offender, allow an offender to appear
by audioconference or videoconference for sentencing
purposes.
Limitation
(2) The court may allow the offender to appear by audioconference only if videoconferencing is not readily available.
Enquête préliminaire
715.231 Avec le consentement du poursuivant et de
l’accusé, le tribunal peut permettre à ce dernier de comparaître par vidéoconférence durant l’enquête préliminaire.
Procès — procédure sommaire
715.232 Le tribunal peut permettre à l’accusé de comparaître par vidéoconférence à son procès pour une infraction punissable sur déclaration de culpabilité par
procédure sommaire avec le consentement :
a) de l’accusé et du poursuivant, dans le cas où l’accusé n’est pas sous garde;
b) de l’accusé, dans le cas où ce dernier est sous garde.
Procès — acte criminel
715.233 Avec le consentement du poursuivant et de
l’accusé, le tribunal peut permettre à ce dernier de comparaître par vidéoconférence à son procès pour un acte
criminel. Toutefois, s’il s’agit d’un procès devant jury,
l’accusé ne peut comparaître par vidéoconférence durant
la présentation de la preuve au jury.
Plaidoyer
715.234 (1) Avec le consentement du poursuivant et de
l’accusé, le tribunal peut permettre à ce dernier de comparaître par audioconférence ou vidéoconférence pour
enregistrer son plaidoyer.
Restriction
(2) Toutefois, le tribunal ne peut permettre à l’accusé de
comparaître par audioconférence que s’il est convaincu, à
la fois, que :
a) la vidéoconférence n’est pas facilement accessible;
b) la comparution par audioconférence lui permettrait
de vérifier si les conditions pour accepter un plaidoyer
de culpabilité qui sont prévues au paragraphe 606(1.1)
sont remplies, même s’il ne peut voir l’accusé.
Détermination de la peine
715.235 (1) Avec le consentement du poursuivant et du
contrevenant, le tribunal peut permettre à ce dernier de
comparaître par audioconférence ou vidéoconférence
pour la détermination de la peine.
Restriction
(2) Toutefois, le tribunal ne peut permettre au contrevenant de comparaître par audioconférence que si la vidéoconférence n’est pas facilement accessible.
2021-2022 21 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Section 46 Article 46
Proceedings not expressly provided for
715.24 In any proceedings in respect of which this Act
does not expressly authorize the court to allow an accused or offender to appear by audioconference or videoconference or limit or prohibit their appearance by those
means, the court may allow the accused or offender to
appear by either of those means.
Accused in custody — no evidence taken
715.241 Despite sections 715.231 to 715.233, the court
may allow or require an accused who is in custody and
who has access to legal advice to appear by videoconference in any proceeding referred to in those sections, other than a part in which the evidence of a witness is taken.
Conditions — no access to legal advice
715.242 Despite anything in this Act, before allowing an
accused or offender who does not have access to legal advice during the proceedings to appear by audioconference or videoconference, the court must be satisfied that
they will be able to understand the proceedings and that
any decisions made by them during the proceedings will
be voluntary.
Communication with counsel
715.243 An accused or offender who appears by audioconference or videoconference must be given the opportunity to communicate privately with counsel if they are
represented by counsel.
2019, c. 25, s. 292
47 (1) Subsection 715.25(1) of the Act is replaced
by the following:
Definition of participant
715.25 (1) In this section, participant means any person, other than an accused, an offender, a witness, a juror, a judge or a justice, who may participate in a proceeding.
2019, c. 25, s. 292
(2) The portion of subsection 715.25(2) of the Act
before paragraph (a) is replaced by the following:
Participation by audioconference or videoconference
(2) Except as otherwise provided in this Act, the court
may allow a participant to participate in a proceeding by
audioconference or videoconference, if the court is of the
opinion that it would be appropriate having regard to all
the circumstances, including
Procédure non expressément visée
715.24 Le tribunal peut permettre à l’accusé ou au
contrevenant de comparaître par audioconférence ou vidéoconférence lors de toute procédure à l’égard de laquelle la présente loi, à la fois, n’autorise pas expressément le tribunal à permettre à l’accusé ou au contrevenant de comparaître par ces moyens, ni ne limite ou ne
prohibe la comparution par ces moyens.
Accusé sous garde — aucune preuve présentée
715.241 Malgré les articles 715.231 à 715.233, le tribunal
peut permettre ou exiger la comparution par vidéoconférence de l’accusé qui est sous garde et qui a accès à des
conseils juridiques lors de toute procédure visée à ces articles, sauf durant la présentation de la preuve testimoniale.
Conditions — aucun accès à des conseils juridiques
715.242 Malgré toute autre disposition de la présente
loi, avant de permettre à l’accusé ou au contrevenant qui
n’a pas accès à des conseils juridiques de comparaître par
audioconférence ou vidéoconférence au cours de l’instance, le tribunal doit être convaincu que l’accusé ou le
contrevenant pourra comprendre la nature de la procédure et que ses décisions seront volontaires.
Communication avec un avocat
715.243 L’accusé ou le contrevenant qui comparaît par
audioconférence ou vidéoconférence et qui est représenté
par un avocat doit avoir la possibilité de communiquer en
privé avec lui.
2019, ch. 25, art. 292
47 (1) Le paragraphe 715.25(1) de la même loi est
remplacé par ce qui suit :
Définition de participant
715.25 (1) Au présent article, participant s’entend de
toute personne, à l’exception de l’accusé, d’un contrevenant, d’un témoin, d’un juré ou du juge ou juge de paix,
qui pourrait participer à une procédure.
2019, ch. 25, art. 292
(2) Le passage du paragraphe 715.25(2) de la
même loi précédant l’alinéa a) est remplacé par
ce qui suit :
Participation par audioconférence ou vidéoconférence
(2) Sauf disposition contraire de la présente loi, le tribunal peut permettre à tout participant de participer à la
procédure par audioconférence ou vidéoconférence s’il
l’estime indiqué, eu égard aux circonstances, notamment :
2021-2022 22 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 46-47 Articles 46-47
2019, c. 25, s. 292
(3) Paragraph 715.25(2)(b) of the English version
of the Act is replaced by the following:
(b) the costs that would be incurred if the participant
were to participate in person;
2019, c. 25, s. 292
(4) Subsections 715.25(3) and (4) of the Act are repealed.
48 The Act is amended by adding the following
after section 715.26:
Prospective Jurors
Definition of prospective juror
715.27 (1) In this section, prospective juror means a
person who has been summoned as a juror and who has
not yet been sworn in accordance with Part XX.
Participation by videoconference
(2) The court may, with the consent of the prosecutor
and the accused, allow or require any or all prospective
jurors to participate in the jury selection process by
videoconference if the court is of the opinion that it
would be appropriate having regard to all the circumstances, including
(a) the challenges related to the in-person participation of prospective jurors;
(b) the nature of the participation;
(c) the suitability of the location from where the
prospective jurors will participate;
(d) the privacy and security of the prospective jurors;
(e) the accused’s right to a fair and public hearing;
and
(f) the nature and seriousness of the offence.
Location provided
(3) The court may require prospective jurors to participate by videoconference only if the court has approved a
location that will be provided for their participation
where the technology for videoconferencing is available.
No location provided
(4) The court shall give prospective jurors the option to
participate in person if it allows for their participation by
2019, ch. 25, art. 292
(3) L’alinéa 715.25(2)b) de la version anglaise de la
même loi est remplacé par ce qui suit :
(b) the costs that would be incurred if the participant
were to participate in person;
2019, ch. 25, art. 292
(4) Les paragraphes 715.25(3) et (4) de la même loi
sont abrogés.
48 La même loi est modifiée par adjonction,
après l’article 715.26, de ce qui suit :
Candidats-jurés
Définition de candidat-juré
715.27 (1) Au présent article, candidat-juré s’entend
de toute personne qui a été assignée à titre de juré, mais
qui n’a pas encore été assermentée en conformité avec la
partie XX.
Participation par vidéoconférence
(2) Avec le consentement du poursuivant et de l’accusé,
le tribunal peut permettre ou exiger la participation par
vidéoconférence de tout candidat-juré ou de l’ensemble
des candidats-jurés lors de la constitution du jury, s’il
l’estime indiqué, eu égard aux circonstances, notamment :
a) les difficultés liées à la participation en personne
des candidats-jurés;
b) la nature de la participation;
c) le caractère approprié du lieu à partir duquel les
candidats-jurés participeront;
d) la vie privée et la sécurité des candidats-jurés;
e) le droit de l’accusé à un procès public et équitable;
f) la nature et la gravité de l’infraction.
Mise à disposition d’un lieu
(3) Le tribunal ne peut exiger la participation des candidats-jurés par vidéoconférence que s’il a approuvé un lieu
qui sera mis à leur disposition pour leur participation et
dans lequel la technologie de vidéoconférence est disponible.
Aucune mise à disposition d’un lieu
(4) S’il permet la participation des candidats-jurés par
vidéoconférence mais qu’aucun lieu approuvé par lui
2021-2022 23 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 47-48 Articles 47-48
videoconference but no location approved by the court is
provided for their participation by those means.
1999, c. 5, s. 41(1)
49 (1) Paragraph 742.6(1)(f) of the Act is replaced
by the following:
(f) any judge of a superior court of criminal jurisdiction or of a court of criminal jurisdiction or any justice
of the peace may issue a warrant to arrest no matter
which court, judge or justice sentenced the offender.
(2) Section 742.6 of the Act is amended by adding
the following after subsection (1):
Warrant — means of telecommunication
(1.1) A warrant may be issued under paragraph (1)(f) by
a means of telecommunication, and the provisions in section 487.1 on the issuance of a warrant apply for those
purposes, with any necessary modifications.
2002, c. 13, s. 77
50 Section 774.1 of the English version of the Act
is replaced by the following:
Appearance in person — habeas corpus
774.1 Despite any other provision of this Act, the person
who is the subject of a writ of habeas corpus must appear
in court in person.
2019, c. 25, s. 314
51 Paragraph (b) of the definition sentence in
section 785 of the Act is replaced by the following:
(b) an order made under subsection 109(1) or 110(1),
section 320.24, subsection 730(1) or 737(2.1) or (3) or
section 738, 739, 742.1 or 742.3,
2011, c. 16, s. 16
52 Section 795 of the Act is replaced by the following:
Application of Parts XVI, XVIII, XVIII.1, XX, XX.1 and
XXII.01
795 The provisions of Parts XVI and XVIII with respect
to compelling the appearance of an accused before a justice, the provisions of Parts XVIII.1, XX and XX.1, insofar as they are not inconsistent with this Part, and the
provisions of Part XXII.01, apply, with any necessary
modifications, to proceedings under this Part.
n’est mis à leur disposition à cette fin, le tribunal leur
donne la possibilité de participer à la constitution du jury
en personne.
1995, ch. 5, par. 41(1)
49 (1) L’alinéa 742.6(1)f) de la même loi est remplacé par ce qui suit :
f) le mandat d’arrestation peut être délivré par un
juge d’une cour supérieure de juridiction criminelle,
un juge d’une cour de juridiction criminelle ou un juge
de paix, quel que soit par ailleurs le juge, tribunal ou
juge de paix qui a prononcé la peine.
(2) L’article 742.6 de la même loi est modifié par
adjonction, après le paragraphe (1), de ce qui
suit :
Mandat — moyens de télécommunication
(1.1) Le mandat visé à l’alinéa (1)f) peut être délivré par
un moyen de télécommunication; les dispositions en la
matière prévues à l’article 487.1 s’appliquent alors avec
les adaptations nécessaires.
2002, ch. 13, art. 77
50 L’article 774.1 de la version anglaise de la
même loi est remplacé par ce qui suit :
Appearance in person — habeas corpus
774.1 Despite any other provision of this Act, the person
who is the subject of a writ of habeas corpus must appear
in court in person.
2019, ch. 25, art. 314
51 L’alinéa b) de la définition de sentence, peine
ou condamnation, à l’article 785 de la même loi, est
remplacé par ce qui suit :
b) l’ordonnance rendue en vertu des paragraphes
109(1) ou 110(1), de l’article 320.24, des paragraphes
730(1) ou 737(2.1) ou (3) ou des articles 738, 739, 742.1
ou 742.3;
2011, ch. 16, art. 16
52 L’article 795 de la même loi est remplacé par
ce qui suit :
Application des parties XVI, XVIII, XVIII.1, XX, XX.1 et
XXII.01
795 Les dispositions des parties XVI et XVIII concernant les moyens de contraindre un prévenu à comparaître devant un juge de paix, celles des parties XVIII.1,
XX et XX.1, dans la mesure où elles ne sont pas incompatibles avec la présente partie, et celles de la partie
2021-2022 24 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 48-52 Articles 48-52
53 (1) Subsection 800(2) of the French version of
the Act is replaced by the following:
Avocat ou représentant
(2) Un défendeur peut comparaître personnellement ou
par l’entremise d’un avocat ou représentant, mais la cour
des poursuites sommaires peut exiger que le défendeur
comparaisse personnellement et, si elle le juge à propos,
décerner un mandat selon la formule 7 pour l’arrestation
du défendeur, et ajourner le procès en attendant sa comparution en application du mandat.
2019, c. 25, s. 317
(2) Subsection 800(2.1) of the Act is repealed.
2019, c. 25, s. 324(1)
54 Subsection 817(2) of the French version of the
Act is replaced by the following:
Conditions
(2) L’engagement contracté en vertu du présent article
est subordonné à la condition que le poursuivant comparaisse personnellement ou par l’intermédiaire de son
avocat, devant la cour d’appel lors des séances au cours
desquelles l’appel doit être entendu.
2002, c. 13, s. 84
55 The heading after section 847 of the Act is repealed.
2007, c. 22, s. 23; 2018, c. 16, s. 224, c. 21, s. 29; 2019, c. 25, s. 331(2)(E)
56 Paragraph (b) of Form 5.04 of Part XXVIII of
the Act is replaced by the following:
(b) has been convicted under the Criminal Code, discharged under section 730 of that Act or, in the case of
a young person, found guilty under the Young Offenders Act, chapter Y-1 of the Revised Statutes of Canada,
1985, or the Youth Criminal Justice Act, of, or has
been found not criminally responsible on account of
mental disorder for, (offence), which, on the day on
which the person was sentenced or discharged or the
finding was made, was a secondary designated offence
within the meaning of section 487.04 of the Criminal
Code;
R.S., c. 27 (1st Supp.), s. 184(3); R.S., c. 1 (4th Supp.), s. 17; 2018, c. 21, ss. 30 and 31
57 Forms 5.1 and 5.2 of Part XXVIII of the Act are
replaced by the following:
XXII.01, s’appliquent, avec les adaptations nécessaires,
aux procédures prévues par la présente partie.
53 (1) Le paragraphe 800(2) de la version française de la même loi est remplacé par ce qui suit :
Avocat ou représentant
(2) Un défendeur peut comparaître personnellement ou
par l’entremise d’un avocat ou représentant, mais la cour
des poursuites sommaires peut exiger que le défendeur
comparaisse personnellement et, si elle le juge à propos,
décerner un mandat selon la formule 7 pour l’arrestation
du défendeur, et ajourner le procès en attendant sa comparution en application du mandat.
2019, ch. 25, art. 317
(2) Le paragraphe 800(2.1) de la même loi est
abrogé.
2019, ch. 25, par. 324(1)
54 Le paragraphe 817(2) de la version française
de la même loi est remplacé par ce qui suit :
Conditions
(2) L’engagement contracté en vertu du présent article
est subordonné à la condition que le poursuivant comparaisse personnellement ou par l’intermédiaire de son
avocat, devant la cour d’appel lors des séances au cours
desquelles l’appel doit être entendu.
2002, ch. 13, art. 84
55 L’intertitre suivant l’article 847 de la même loi
est abrogé.
2007, ch. 22, art. 23; 2018, ch. 16, art. 224, ch. 21, art. 29; 2019, ch. 25, par. 331(2)(A)
56 L’alinéa b) de la formule 5.04 de la partie XXVIII de la même loi est remplacé par ce qui suit :
b) a été déclaré coupable sous le régime du Code criminel, absous en vertu de l’article 730 de cette loi ou,
s’il s’agit d’un adolescent, déclaré coupable sous le régime de la Loi sur les jeunes contrevenants, chapitre
Y-1 des Lois révisées du Canada (1985), ou de la Loi
sur le système de justice pénale pour les adolescents
de (infraction), ou a fait l’objet d’un verdict de nonresponsabilité criminelle pour cause de troubles mentaux à l’égard de (infraction), et que cette infraction, à
la date du prononcé de la peine, de l’absolution ou du
verdict, était une infraction secondaire au sens de l’article 487.04 du Code criminel;
L.R., ch. 27 (1er suppl.), par. 184(3); L.R., ch. 1 (4e
 suppl.), art. 17; 2018, ch. 21, art. 30 et
31
57 Les formules 5.1 et 5.2 de la partie XXVIII de la
même loi sont remplacées par ce qui suit :
2021-2022 25 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 52-57 Articles 52-57
FORM 5.1
(Subsection 320.29(5) and subparagraphs 462.32(4)(a)(ii) and
487.093(1)(a)(ii))
Notice — Execution of Search
Warrant
A warrant under section (section of the Criminal
Code under which the warrant is issued) has been executed (at location or on name of person) on (date).
If anything is seized during the execution of the warrant, the things that were seized may be brought before the court at (address). However, if the peace officer, public officer or other person who executed the
warrant filed with that court a report on the things
that were seized, you may obtain a copy of the report
from the clerk of that court. The report will indicate
the things that were seized and the location at which
they are being held.
FORM 5.2
(Subsection 489.1(3))
Report to a Justice
Canada,
Province of ................. ,
(territorial division).
To a justice having jurisdiction in respect of the matter and jurisdiction in the province in which the warrant referred to below was issued (or, if no warrant
was issued, a justice having jurisdiction in respect of
the matter).
I, (name of the peace officer or other person) have
(state here whether you have acted under a warrant
issued under the Criminal Code, under section 487.11
or 489 of the Criminal Code, or otherwise in the execution of duties under the Criminal Code or other Act
of Parliament to be specified)
1 searched the premises situated at .......................... ;
and
2 seized the following things and dealt with them as
follows:
Thing Seized
(describe each
thing seized)
Disposition
(state, in respect of each thing
seized, whether
FORMULE 5.1
(paragraphe 320.29(5) et sous-alinéas 462.32(4)a)(ii) et
487.093(1)a)(ii))
Avis concernant l’exécution
d’un mandat de perquisition
Un mandat décerné en vertu de (disposition du Code
criminel en vertu de laquelle le mandat est décerné) a
été exécuté (lieu où le mandat est exécuté ou nom de
la personne visée par le mandat), le (date).
Dans le cas où des choses sont saisies au cours de
l’exécution du mandat, ces choses peuvent être apportées au tribunal, à (adresse). Toutefois, si un rapport sur ces choses a été déposé auprès du tribunal
par l’agent de la paix, le fonctionnaire public ou
l’autre personne qui a exécuté le mandat, vous pourrez en obtenir une copie du greffier de ce tribunal; le
rapport mentionnera les choses saisies et l’endroit où
elles sont gardées.
FORMULE 5.2
(paragraphe 489.1(3))
Rapport à un juge de paix
Canada,
Province de ................. ,
(circonscription territoriale).
À tout juge de paix compétent de la province où le
mandat mentionné ci-dessous a été décerné (ou, en
l’absence de mandat, tout juge de paix compétent).
Je soussigné(e), (nom de l’agent de la paix ou de
l’autre personne), déclare que (indiquer ici si la perquisition a été faite en vertu d’un mandat décerné
sous le régime du Code criminel ou en vertu des articles 487.11 ou 489 du Code criminel ou autrement,
dans l’exercice des fonctions conférées par le Code
criminel ou une autre loi fédérale à préciser) :
1 j’ai perquisitionné dans les lieux suivants :
..........................
2 j’ai saisi les choses suivantes et en ai disposé de la
façon suivante :
Chose saisie
(décrire chaque
chose saisie)
Disposition
(indiquer, pour chaque chose
saisie :
2021-2022 26 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Section 57 Article 57
(a) it was returned to the person
lawfully entitled to its possession, in which case the receipt
for it shall be attached to this report; or
(b) it is being detained to be
dealt with according to law, in
which case indicate the location
and manner in which or, if applicable, the person by whom it is
being detained.)
1. ................. ........................................................
2. ................. ........................................................
3. ................. ........................................................
4. ................. ........................................................
Signed on (date), at (place).
............................................
(Signature of peace officer or other person)
58 Part XXVIII of the Act is amended by adding
the following after Form 6:
FORM 6.1
(Subsection 485.2(1))
Application for a Summons
under Section 485.2
Canada,
Province of .................
(territorial division)
I (name), (occupation), of ................. in (territorial division), apply for the issuance of a summons under
section 485.2 of the Criminal Code requiring (name of
accused or offender) to attend at a time and place
stated in it for the purposes of the Identification of
Criminals Act.
(Name of accused or offender) was previously required to appear on (date) at (hour) at (place) for the
purposes of the Identification of Criminals Act under
(a summons or an appearance notice or an undertaking or an order) issued on (date) in relation to (set out
briefly the offence in respect of which the accused or
offender was previously required to appear).
□ (Check if applicable) The offence which is currently the subject of the proceedings, namely (set out
a) si les choses ont été remises
à la personne ayant droit à leur
possession, auquel cas un reçu
doit être joint au présent rapport;
b) si les choses sont détenues
pour qu’il en soit disposé
conformément à la loi, l’endroit
où elles sont détenues et les
modalités de la détention, ou,
le cas échéant, la personne qui
les détient.)
1. ................. ......................................................
2. ................. ......................................................
3. ................. ......................................................
4. ................. ......................................................
Signé le (date), à (lieu).
............................................
(Signature de l’agent de la paix ou de l’autre personne)
58 La partie XXVIII de la même loi est modifiée
par adjonction, après la formule 6, de ce qui suit :
FORMULE 6.1
(paragraphe 485.2(1))
Demande de sommation au titre
de l’article 485.2
Canada,
Province de .................
(circonscription territoriale)
Moi, (nom), (profession ou occupation) de .................
dans (circonscription territoriale), je demande qu’une
sommation soit décernée, au titre de l’article 485.2 du
Code criminel, enjoignant à (nom de l’accusé ou du
contrevenant) de comparaître, pour l’application de
la Loi sur l’identification des criminels, aux date,
heure et lieu indiqués dans la sommation.
(Nom de l’accusé ou du contrevenant) a antérieurement été tenu de comparaître le (date), à (heure), à
(lieu), pour l’application de la Loi sur l’identification
des criminels, au titre d’une (sommation ou citation à
comparaître ou promesse ou ordonnance) décernée
le (date) relativement à (énoncer brièvement
2021-2022 27 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 57-58 Articles 57-58
briefly the offence for which the accused is currently
charged or the offender has been determined to be
guilty) is different from the offence listed above, but
stems from the same matter for which the accused or
offender was previously required to appear under
that Act, and is an offence referred to in paragraph
2(1)(c) of that Act.
The measurements, processes and operations referred to in that Act were not completed for the following reason(s):
(set out reason(s))
Sworn before me on (date), at (place).
(Signature of applicant)
(Signature of judge, justice or clerk of the court)
FORM 6.2
(Subsection 485.2(1))
Summons to Appear for the
Purposes of the Identification of
Criminals Act
Canada,
Province of .................
(territorial division)
To (name of person), of ................. , born on (date of
birth):
Because you were previously required to appear on
(date) at (hour) at (place) for the purposes of the
Identification of Criminals Act under (a summons or
an appearance notice or an undertaking or an order)
issued on (date) and the measurements, processes
and operations referred to in that Act were not completed for exceptional reasons;
You are ordered, in Her Majesty’s name, to appear on
(date) at (hour) at (place) for the purposes of the
Identification of Criminals Act in relation to (set out
briefly the offence in respect of which the accused
was charged or the offender has been determined to
be guilty).
You are warned that, unless you have a lawful excuse, it is an offence under subsection 145(3) of the
Criminal Code to fail to appear for the purposes of
l’infraction pour laquelle l’accusé ou le contrevenant
était antérieurement tenu de comparaître).
□ (Cocher s’il y a lieu) L’infraction qui fait l’objet
des procédures en cours, à savoir (énoncer brièvement l’infraction dont l’accusé est inculpé ou pour laquelle la culpabilité du contrevenant a été déterminée) diffère de l’infraction mentionnée ci-haut, mais
découle de la même affaire pour laquelle l’accusé ou
le contrevenant était antérieurement tenu de comparaître pour l’application de cette loi, et est une infraction visée à l’alinéa 2(1)(c) de cette loi.
Les mensurations ou autres opérations prévues par
cette loi n’ont pu être prises pour les motifs suivants :
(énoncer le(s) motif(s))
Assermenté devant moi ce (date), à (lieu).
(Signature du demandeur)
(Signature du juge de paix, du juge ou du greffier du
tribunal)
FORMULE 6.2
(paragraphe 485.2(1))
Sommation de comparaître
pour l’application de la Loi sur
l’identification des criminels
Canada,
Province de .................
(circonscription territoriale)
À (nom de la personne), de ................. , né(e) le (date
de naissance) :
Attendu que vous avez antérieurement été tenu de
comparaître le (date), à (heure), à (lieu), pour l’application de la Loi sur l’identification des criminels, au
titre d’une (sommation ou citation à comparaître ou
promesse ou ordonnance) décernée le (date) et que
les mensurations ou autres opérations prévues par
cette loi n’ont pu être prises pour des motifs exceptionnels ;
Il vous est enjoint par les présentes, au nom de Sa
Majesté, de comparaître le (date), à (heure), à (lieu),
pour l’application de la Loi sur l’identification des criminels relativement à (énoncer brièvement l’infraction dont l’accusé est inculpé ou pour laquelle la
culpabilité du contrevenant a été déterminée).
Vous êtes averti que, à moins d’avoir une excuse légitime, vous commettez une infraction visée au paragraphe 145(3) du Code criminel si vous omettez de
2021-2022 28 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Section 58 Article 58
the Identification of Criminals Act, as required in this
summons.
If you commit an offence under subsection 145(3) of
the Criminal Code, a warrant for your arrest may be
issued (section 512 or 512.1 of the Criminal Code)
and you may be liable to a fine or to imprisonment,
or to both.
If you are on interim release and do not comply with
this summons or are charged with committing an indictable offence after it has been issued to you, any
summons, appearance notice, undertaking or release
order to which you are subject may be cancelled and,
as a result, you may be detained in custody (section
524 of the Criminal Code).
Signed on (date), at (place).
............................................
(Signature of judge, justice or clerk of the court)
............................................
(Name of the judge or justice)
2019, c. 25, s. 337
59 Item 3 of Form 10 of Part XXVIII of the Act is
replaced by the following:
3 Alleged offence(s)
(set out briefly the offence(s) which the accused is alleged to have committed)
60 Part XXVIII of the Act is amended by adding
the following after Form 11:
FORM 11.1
(Section 515.01)
Order to Appear for the
Purposes of the Identification of
Criminals Act
Canada,
Province of .................
(territorial division)
1 Identification
Surname: ................. Given name(s): .................
comparaître pour l’application de la Loi sur l’identification des criminels comme l’exige la présente sommation.
Si vous commettez l’infraction prévue au paragraphe
145(3) du Code criminel, un mandat pour votre arrestation peut être décerné (articles 512 ou 512.1 du
Code criminel) et vous êtes passible d’une peine
d’emprisonnement et d’une amende, ou de l’une de
ces peines.
Si vous êtes en liberté provisoire et que vous ne vous
conformez pas à la présente sommation ou si vous
êtes accusé d’un acte criminel après qu’elle vous a
été délivrée, toute sommation, citation à comparaître,
promesse ou ordonnance de mise en liberté dont
vous faites l’objet peut être annulée et, par conséquent, vous pourriez être détenu sous garde (article
524 du Code criminel).
Signé le (date), à (lieu).
............................................
(Signature du juge, du juge de paix ou du greffier du
tribunal)
............................................
(Nom du juge ou du juge de paix)
2019, ch. 25, art. 337
59 L’article 3 de la formule 10 de la partie XXVIII
de la même loi est remplacé par ce qui suit :
3 Prétendue(s) infraction(s) :
(énoncer brièvement l’infraction que le prévenu aurait commise)
60 La partie XXVIII de la même loi est modifiée
par adjonction, après la formule 11, de ce qui
suit :
FORMULE 11.1
(article 515.01)
Ordonnance de comparution
pour l’application de la Loi sur
l’identification des criminels
Canada,
Province de .................
(circonscription territoriale)
1 Identification
2021-2022 29 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 58-60 Articles 58-60
Date of birth: .................
2 Contact Information
.................
3 Charge(s)
(set out briefly the offence in respect of which the
accused was charged)
4 Appearance for the purposes of the Identification of Criminals Act
You are ordered, in Her Majesty’s name, to appear
on (date) at (hour) at (place) for the purposes of
the Identification of Criminals Act.
5 Consequence for non-compliance
You are warned that, unless you have a lawful excuse, it is an offence under subsection 145(2) of
the Criminal Code to fail to appear for the purposes of the Identification of Criminals Act, as required by this order.
If you commit an offence under subsection 145(2)
of the Criminal Code, a warrant for your arrest
may be issued (section 512, 512.2 or 512.3 of the
Criminal Code) and you may be liable to a fine or
to imprisonment, or to both.
If you do not comply with this order you may be
arrested and the release order to which you are
subject may be cancelled and, as a result, you may
be detained in custody (section 524 of the Criminal
Code).
6 Signatures
Signed on (date), at (place).
............................................
(Signature of judge, justice or clerk of the court)
............................................
(Name of the judge or justice)
2019, c. 25, s. 348(3)
61 Paragraph (m) under the heading “Liste de
conditions” in Form 32 of Part XXVIII of the
French version of the Act is replaced by the following:
m) Comparaître, personnellement ou par l’intermédiaire de son avocat, devant la cour d’appel lors des
Nom de famille : .......................... Prénom(s) :
.................
Date de naissance : .................
2 Coordonnées
.................
3 Accusation(s)
(énoncer brièvement l’infraction dont l’accusé est
inculpé)
4 Comparution pour l’application de la Loi sur
l’identification des criminels
Les présentes ont pour objet de vous enjoindre, au
nom de Sa Majesté, de comparaître le (date), à
(heure), à (lieu), pour l’application de la Loi sur
l’identification des criminels.
5 Conséquence du non-respect
Vous êtes averti que, à moins d’avoir une excuse
légitime, vous commettez une infraction au paragraphe 145(2) du Code criminel si vous omettez de
comparaître pour l’application de la Loi sur l’identification des criminels comme l’exige la présente
ordonnance.
Si vous commettez l’infraction visée au paragraphe 145(2) du Code criminel, un mandat pour
votre arrestation peut être décerné (articles 512,
512.2 ou 512.3 du Code criminel) et vous êtes passible d’une peine d’emprisonnement et d’une
amende, ou de l’une de ces peines.
Si vous ne vous conformez pas à la présente ordonnance, vous pourriez être arrêté et l’ordonnance de mise en liberté dont vous faites l’objet
pourrait être annulée et, par conséquent, vous
pourriez être détenu sous garde (article 524 du
Code criminel).
6 Signatures
Signé le (date), à (lieu).
............................................
(Signature du juge, du juge de paix ou du greffier
du tribunal)
............................................
(Nom du juge ou du juge de paix)
2019, ch. 25, par. 348(3)
61 L’alinéa m) sous l’intertitre « Liste de conditions » de la formule 32 de la partie XXVIII de la
version française de la même loi est remplacé
par ce qui suit :
m) Comparaître, personnellement ou par l’intermédiaire de son avocat, devant la cour d’appel lors des
2021-2022 30 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 60-61 Articles 60-61
séances au cours desquelles l’appel doit être entendu
(articles 817 et 832 du Code criminel);
R.S., c. I-1
Identification of Criminals Act
1992, c. 47, s. 74(1); 1996, c. 7, s. 39
62 (1) Subparagraph 2(1)(a)(i) of the Identification of Criminals Act is replaced by the following:
(i) an indictable offence — or an offence punishable
on summary conviction if it is an offence that could
also have been prosecuted by indictment — other
than an offence that is designated as a contravention under the Contraventions Act in respect of
which the Attorney General, within the meaning of
that Act, has made an election under section 50 of
that Act, or
2019, c. 25, s. 388(1)
(2) Paragraph 2(1)(a) of the Act is amended by
striking out “or” at the end of subparagraph
2(1)(a)(ii) and by repealing subparagraph
2(1)(a)(iii).
2019, c. 25, s. 388(2)
(3) Paragraph 2(1)(c) of the Act is replaced by the
following:
(c) any person who is required under subsection
485.2(1), 500(3), 501(4) or 509(5) or section 515.01 of
the Criminal Code to appear for the purposes of this
Act by an appearance notice, undertaking, summons
or order because they are alleged to have committed
an indictable offence — or an offence punishable on
summary conviction if it is an offence that could also
have been prosecuted by indictment — other than an
offence that is
(i) an offence that is designated as a contravention
under the Contraventions Act in respect of which
the Attorney General, within the meaning of that
Act, has made an election under section 50 of that
Act, or
(ii) an offence in respect of which proceedings were
commenced by a peace officer under section 51 of
the Cannabis Act; or
séances au cours desquelles l’appel doit être entendu
(articles 817 et 832 du Code criminel);
L.R., ch. I-1
Loi sur l’identification des
criminels
1992, ch. 47, art. 74(1); 1996, ch. 7, art. 39
62 (1) Le sous-alinéa 2(1)a)(i) de la Loi sur
l’identification des criminels est remplacé par ce
qui suit :
(i) un acte criminel — ou une infraction punissable
par voie de procédure sommaire s’il s’agit d’une infraction qui aurait également pu être poursuivie par
voie de mise en accusation — autre qu’une infraction qualifiée de contravention en vertu de la Loi
sur les contraventions et au titre de laquelle le procureur général, au sens de cette loi, se prévaut du
choix prévu à l’article 50 de la même loi;
2019, ch. 25, s. 388(1)
(2) Le sous-alinéa 2(1)a)(iii) de la même loi est
abrogé.
2019, ch. 25, par. 388(2)
(3) L’alinéa 2(1)c) de la même loi est remplacé
par ce qui suit :
c) les personnes qui sont tenues, en application des
paragraphes 485.2(1), 500(3), 501(4) ou 509(5) ou de
l’article 515.01 du Code criminel, de comparaître en
conformité avec une citation à comparaître, une promesse, une sommation ou une ordonnance parce
qu’elles auraient commis un acte criminel — ou une
infraction punissable par voie de procédure sommaire,
s’il s’agit d’une infraction qui aurait également pu être
poursuivie par voie de mise en accusation — autre
qu’une infraction :
(i) qui est qualifiée de contravention en vertu de la
Loi sur les contraventions et à l’égard de laquelle le
procureur général, au sens de cette loi, se prévaut
du choix prévu à l’article 50 de la même loi,
(ii) qui est une infraction à l’égard de laquelle des
poursuites ont été engagées par un agent de la paix
en vertu de l’article 51 de la Loi sur le cannabis;
2021-2022 31 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Criminal Code Code criminel
Sections 61-62 Articles 61-62
Related Amendments
R.S., c. F-27
Food and Drugs Act
2019, c. 29, s. 170
63 Subsection 23(12) of the Food and Drugs Act
is replaced by the following:
Means of telecommunication
(12) An application for a warrant under subsection (10)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
R.S., c. H-3
Hazardous Products Act
2014, c. 20, s. 123
64 Subsection 22.1(4) of the Hazardous Products
Act is replaced by the following:
Means of telecommunication
(4) An application for a warrant under subsection (2)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
R.S., c. P-14
Pilotage Act
2019, c. 29, s. 252
65 Subsection 46.13(4) of the Pilotage Act is replaced by the following:
Means of telecommunication
(4) An application for a warrant under subsection (2)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
1996, c. 19
Controlled Drugs and Substances Act
66 Section 11 of the Controlled Drugs and Substances Act is amended by adding the following
after subsection (3):
Modifications connexes
L.R., ch. F-27
Loi sur les aliments et drogues
2019, ch. 29, art. 170
63 Le paragraphe 23(12) de la Loi sur les aliments et drogues est remplacé par ce qui suit :
Moyens de télécommunication
(12) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être délivré
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
L.R., ch. H-3
Loi sur les produits dangereux
2014, ch. 20, art. 123
64 Le paragraphe 22.1(4) de la Loi sur les produits dangereux est remplacé par ce qui suit :
Moyens de télécommunication
(4) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être délivré
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
L.R., ch. P-14
Loi sur le pilotage
2019, ch. 29, art. 252
65 Le paragraphe 46.13(4) de la Loi sur le pilotage est remplacé par ce qui suit :
Moyens de télécommunication
(4) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être décerné
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
1996, ch. 19
Loi réglementant certaines drogues et
autres substances
66 L’article 11 de la Loi réglementant certaines
drogues et autres substances est modifié par adjonction, après le paragraphe (3), de ce qui suit :
2021-2022 32 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Related Amendments Modifications connexes
Sections 63-66 Articles 63-66
Duty of peace officer executing warrant
(4) Section 487.093 of the Criminal Code, other than
paragraph 487.093(1)(c), applies with respect to a warrant issued under subsection (1).
1997, c. 13; 2018, c. 9, s. 2
Tobacco and Vaping Products Act
2018, c. 9, s. 45
67 Subsection 36(4) of the Tobacco and Vaping
Products Act is replaced by the following:
Means of telecommunication
(4) An application for a warrant under subsection (2)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
2000, c. 9
Canada Elections Act
2018, c. 31, s. 122
68 Subsection 175(9) of the Canada Elections Act
is replaced by the following:
Means of telecommunication
(9) An application for a warrant under subsection (8)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
2002, c. 28
Pest Control Products Act
2016, c. 9, s. 46(2)
69 Subsection 49(4) of the Pest Control Products
Act is replaced by the following:
Means of telecommunication
(4) An application for a warrant under subsection (2)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
Obligation de l’agent de la paix qui exécute le mandat
(4) L’article 487.093 du Code criminel, sauf l’alinéa
487.093(1)c), s’applique à l’égard du mandat délivré en
vertu du paragraphe (1).
1997, ch. 13; 2018, ch. 9, art. 2
Loi sur le tabac et les produits de
vapotage
2018, ch. 9, art. 45
67 Le paragraphe 36(4) de la Loi sur le tabac et
les produits de vapotage est remplacé par ce qui
suit :
Moyens de télécommunication
(4) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être décerné
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
2000, ch. 9
Loi électorale du Canada
2018, ch. 31, art. 122
68 Le paragraphe 175(9) de la Loi électorale du
Canada est remplacé par ce qui suit :
Moyens de télécommunication
(9) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être délivré
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
2002, ch. 28
Loi sur les produits antiparasitaires
2016, ch. 9, par. 46(2)
69 Le paragraphe 49(4) de la Loi sur les produits
antiparasitaires est remplacé par ce qui suit :
Moyens de télécommunication
(4) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être décerné
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
2021-2022 33 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Related Amendments Modifications connexes
Controlled Drugs and Substances Act Loi réglementant certaines drogues et autres substances
Sections 66-69 Articles 66-69
2009, c. 24
Human Pathogens and Toxins Act
70 Subsection 42(4) of the Human Pathogens
and Toxins Act is replaced by the following:
Means of telecommunication
(4) An application for a warrant may be submitted, and
the warrant may be issued, by a means of telecommunication and section 487.1 of the Criminal Code applies for
those purposes with any necessary modifications.
2010, c. 21
Canada Consumer Product Safety Act
71 Subsection 22(4) of the Canada Consumer
Product Safety Act is replaced by the following:
Means of telecommunication
(4) An application for a warrant under subsection (2)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
2012, c. 24
Safe Food for Canadians Act
72 Subsection 26(4) of the Safe Food for Canadians Act is replaced by the following:
Means of telecommunication
(4) An application for a warrant under subsection (2)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
2018, c. 16
Cannabis Act
73 Subsection 86(10) of the Cannabis Act is replaced by the following:
2009, ch. 24
Loi sur les agents pathogènes
humains et les toxines
70 Le paragraphe 42(4) de la Loi sur les agents
pathogènes humains et les toxines est remplacé
par ce qui suit :
Moyens de télécommunication
(4) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être délivré
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
2010, ch. 21
Loi canadienne sur la sécurité des
produits de consommation
71 Le paragraphe 22(4) de la Loi canadienne sur
la sécurité des produits de consommation est
remplacé par ce qui suit :
Moyens de télécommunication
(4) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être délivré
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
2012, ch. 24
Loi sur la salubrité des aliments au
Canada
72 Le paragraphe 26(4) de la Loi sur la salubrité
des aliments au Canada est remplacé par ce qui
suit :
Moyens de télécommunication
(4) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être décerné
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
2018, ch. 16
Loi sur le cannabis
73 Le paragraphe 86(10) de la Loi sur le cannabis
est remplacé par ce qui suit :
2021-2022 34 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Related Amendments Modifications connexes
Human Pathogens and Toxins Act Loi sur les agents pathogènes humains et les toxines
Sections 70-73 Articles 70-73
Means of telecommunication
(10) An application for a warrant under subsection (8)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
74 Section 87 of the Act is amended by adding the
following after subsection (3):
Duty of peace officer executing warrant
(4) Section 487.093 of the Criminal Code, other than
paragraph 487.093(1)(c), applies with respect to a warrant issued under subsection (1).
2019, c. 1
Wrecked, Abandoned or Hazardous
Vessels Act
75 Subsection 75(4) of the Wrecked, Abandoned
or Hazardous Vessels Act is replaced by the following:
Means of telecommunication
(4) An application for a warrant under subsection (2)
may be submitted, and the warrant may be issued, by a
means of telecommunication and section 487.1 of the
Criminal Code applies for those purposes with any necessary modifications.
Transitional Provisions
Clarification — immediate application
76 For greater certainty, but subject to sections
77 and 78, the amendments made by this Act also
apply with respect to proceedings that are ongoing on the day on which this Act comes into force.
Continuation — authorizations and warrants
77 (1) The Criminal Code, as it read immediately
before the day on which this Act comes into
force, continues to apply with respect to
(a) an authorization given under section 184.3
of the Criminal Code before that day;
(b) a warrant issued under section 487.1 of that
Act before that day;
(c) any other warrant issued before that day to
which that section 487.1, as it read immediately
before that day, applied;
Moyens de télécommunication
(10) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être délivré
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
74 L’article 87 de la même loi est modifié par adjonction, après le paragraphe (3), de ce qui suit :
Obligation de l’agent de la paix qui exécute le mandat
(4) L’article 487.093 du Code criminel, sauf l’alinéa
487.093(1)c), s’applique à l’égard du mandat délivré en
vertu du paragraphe (1).
2019, ch. 1
Loi sur les épaves et les bâtiments
abandonnés ou dangereux
75 Le paragraphe 75(4) de la Loi sur les épaves et
les bâtiments abandonnés ou dangereux est
remplacé par ce qui suit :
Moyens de télécommunication
(4) La demande de mandat peut être présentée par un
moyen de télécommunication et le mandat être décerné
par l’un de ces moyens; l’article 487.1 du Code criminel
s’applique alors avec les adaptations nécessaires.
Dispositions transitoires
Clarification : application immédiate
76 Sous réserve des articles 77 et 78, il est entendu que les modifications apportées par la présente loi s’appliquent également à l’égard des
procédures qui sont déjà en cours à la date de
son entrée en vigueur.
Continuation : autorisations et mandats
77 (1) Le Code criminel, dans sa version antérieure à la date d’entrée en vigueur de la présente loi, continue de s’appliquer à l’égard des
documents suivants :
a) toute autorisation accordée en vertu de l’article 184.3 du Code criminel avant cette date;
b) tout mandat décerné en vertu de l’article
487.1 de cette loi avant cette date;
2021-2022 35 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Related Amendments Modifications connexes
Cannabis Act Loi sur le cannabis
Sections 73-77 Articles 73-77
(d) an application for an authorization or warrant referred to in any of paragraphs (a) to (c)
that is submitted, and in respect of which no
decision has been made, before that day; and
(e) any authorization that is given or warrant
that is issued on or after that day on the basis
of an application referred to in paragraph (d).
Certain applications for warrants
(2) Each of the following provisions, as it read
immediately before the day on which this Act
comes into force, continues to apply with respect
to an application made for a warrant under the
provision if the application is submitted, and no
decision has been made in respect of the application, before that day:
(a) subsection 23(12) of the Food and Drugs
Act;
(b) subsection 22.1(4) of the Hazardous Products Act;
(c) subsection 46.13(4) of the Pilotage Act;
(d) subsection 36(4) of the Tobacco and Vaping
Products Act;
(e) subsection 175(9) of the Canada Elections
Act;
(f) subsection 49(4) of the Pest Control Products Act;
(g) subsection 42(4) of the Human Pathogens
and Toxins Act;
(h) subsection 22(4) of the Canada Consumer
Product Safety Act;
(i) subsection 26(4) of the Safe Food for Canadians Act;
(j) subsection 86(10) of the Cannabis Act;
(k) subsection 75(4) of the Wrecked, Abandoned or Hazardous Vessels Act.
c) tout autre mandat décerné avant cette date
auquel s’appliquait cet article 487.1, dans sa
version antérieure à cette date;
d) toute demande visant l’autorisation mentionnée à l’alinéa a) ou le mandat mentionné
aux alinéas b) ou c) qui est présentée avant
cette date et à l’égard de laquelle aucune décision n’a été prise avant cette date;
e) toute autorisation accordée et tout mandat
décerné à cette date ou après cette date au titre
de la demande mentionnée à l’alinéa d).
Certaines demandes de mandat
(2) Chacune des dispositions ci-après, dans sa
version antérieure à la date d’entrée en vigueur
de la présente loi, continue de s’appliquer à
l’égard des demandes de mandat qui ont été présentées sous son régime avant cette date et à
l’égard desquelles aucune décision n’a été prise
avant cette date :
a) le paragraphe 23(12) de la Loi sur les aliments et drogues;
b) le paragraphe 22.1(4) de la Loi sur les produits dangereux;
c) le paragraphe 46.13(4) de la Loi sur le pilotage;
d) le paragraphe 36(4) de la Loi sur le tabac et
les produits de vapotage;
e) le paragraphe 175(9) de la Loi électorale du
Canada;
f) le paragraphe 49(4) de la Loi sur les produits
antiparasitaires;
g) le paragraphe 42(4) de la Loi sur les agents
pathogènes humains et les toxines;
h) le paragraphe 22(4) de la Loi canadienne sur
la sécurité des produits de consommation;
i) le paragraphe 26(4) de la Loi sur la salubrité
des aliments au Canada;
j) le paragraphe 86(10) de la Loi sur le cannabis;
k) le paragraphe 75(4) de la Loi sur les épaves
et les bâtiments abandonnés ou dangereux.
2021-2022 36 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Transitional Provisions Dispositions transitoires
Section 77 Article 77
Continuation — section 489.1 of Criminal Code
78 Section 489.1 of the Criminal Code, as that section read immediately before the day on which
this Act comes into force, continues to apply with
respect to anything seized under a warrant issued under the Criminal Code or another Act of
Parliament if the application for the warrant was
made before that day.
Independent Review
Impact of remote proceedings
78.1 (1) The Minister of Justice must, no later
than three years after the day on which this Act
receives royal assent, initiate one or more independent reviews on the use of remote proceedings in criminal justice matters that must include
an assessment of whether remote proceedings
(a) enhance, preserve or adversely affect access to justice;
(b) maintain fundamental principles of the administration of justice; and
(c) adequately address the rights and obligations of participants in the criminal justice system, including accused persons.
Report
(2) The Minister of Justice must, no later than
five years after the day on which a review is initiated, cause a report on the review — including
any findings or recommendations resulting from
it — to be laid before each House of Parliament.
Review of Act
Review by committee
78.2 (1) At the start of the fifth year after the day
on which this Act receives royal assent, the provisions enacted or amended by this Act are to be
referred to a committee of the Senate and a committee of the House of Commons that may be
designated or established for the purpose of reviewing the provisions.
Report
(2) The committees to which the provisions are
referred are to review them and the use of remote proceedings in criminal justice matters and
submit reports to the Houses of Parliament of
which they are committees, including statements
Continuation : article 489.1 du Code criminel
78 L’article 489.1 du Code criminel, dans sa version antérieure à la date d’entrée en vigueur de la
présente loi, continue de s’appliquer à l’égard de
toute chose saisie en vertu d’un mandat décerné
au titre du Code criminel ou d’une autre loi fédérale si la demande visant ce mandat a été présentée avant cette date.
Examen indépendant
Répercussions des procédures à distance
78.1 (1) Le ministre de la Justice lance, au plus
tard trois ans après la date de sanction de la présente loi, un ou des examens indépendants sur
l’utilisation de procédures à distance dans des affaires de justice pénale afin d’évaluer si les procédures à distance :
a) améliorent, préservent ou compromettent
l’accès à la justice;
b) respectent les principes fondamentaux de
l’administration de la justice;
c) tiennent compte adéquatement des droits et
obligations des personnes associées au système de justice pénale, y compris des accusés.
Rapport
(2) Le ministre de la Justice fait déposer devant
chaque chambre du Parlement, au plus tard cinq
ans après le début de l’examen, un rapport sur
celui-ci qui comporte notamment toute conclusion ou recommandation qui en découle.
Examen de la loi
Examen par un comité
78.2 (1) Au début de la cinquième année suivant
la date de la sanction de la présente loi, les dispositions édictées ou modifiées par la présente loi
sont soumises à l’examen d’un comité du Sénat et
d’un comité de la Chambre des communes,
constitués ou désignés pour les examiner.
Rapport
(2) Les comités procèdent à l’examen de ces dispositions ainsi que de l’utilisation de procédures
à distance dans des affaires de justice pénale et
remettent aux chambres les ayant constitués ou
désignés des rapports comportant les
2021-2022 37 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Transitional Provisions Dispositions transitoires
Sections 78-78.2 Articles 78-78.2
setting out any changes to the provisions that
they recommend.
Coming into Force
30th day after royal assent
79 This Act comes into force on the 30th day after
the day on which it receives royal assent.
Published under authority of the Senate of Canada Publié avec l'autorisation du Sénat du Canada
modifications, s’il en est, qu’ils recommandent
d’y apporter.
Entrée en vigueur
Trentième jour suivant la sanction
79 La présente loi entre en vigueur le trentième
jour suivant la date de sa sanction.
2021-2022 38 70-71 Eliz. II – 1 Cha. III
Chapter 17: An Act to amend the Criminal Code and the Identification of Criminals Act
and to make related amendments to other Acts (COVID-19 response and other
measures)
Chapitre 17 : Loi modifiant le Code criminel et la Loi sur l’identification des criminels et
apportant des modifications connexes à d’autres lois (réponse à la COVID-19 et autres
mesures)
Review of Act Examen de la loi
Sections 78.2-79 Articles 78.2-79

Available on the Senate of Canada website at the following address: www.sencanada.ca/en
Disponible sur le site Web du Sénat du Canada à l’adresse suivante : www.sencanada.ca/fr
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
