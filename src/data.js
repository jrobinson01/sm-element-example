const now = new Date();
const posts = [
  {
    id:'3',
    author: 'admin',
    date: new Date(now.setDate(now.getDate() - 1)),
    title: 'A Post!',
    content: [
      `Lorem ipsum dolor sit amet, mel ne nominavi pertinacia dissentias, usu ea epicurei persecuti. Id vero facilisi scriptorem mel. Te viris doctus sed, eam consul intellegat ei, sint option per eu. Cu per unum quando, his ei vidit soluta. Est cu virtute posidonium, mel tation quodsi tractatos id, modus legendos dissentiunt sea et.`,
      {type: 'image', src:'https://picsum.photos/480/240', caption:'something about this photo.', width:480, height:240},
      `Malorum corpora ea vis, his vidit sonet quidam eu, ad nam nibh mnesarchum vituperatoribus. Vel affert facilisi pertinacia id, id eos facer ridens. Ad eius conceptam instructior qui, quas sanctus aliquando est no. Quem erat eruditi vis at. Mei omnes graeci tamquam te. Vix at nostrud fastidii, nam docendi appareat phaedrum ad, his et libris explicari.`,
      `Cu clita feugiat vis. Mucius complectitur definitionem an usu. Duo cu albucius lobortis, deserunt convenire omittantur vix ne. Meliore ocurreret vim an, et tota regione duo.`,
      `Vim semper tritani mnesarchum ne. Nam stet elitr dicant te. Mel ut iudico vivendo forensibus, alia decore vel id, an erat volumus fastidii quo. Quo audiam inermis euripidis te, te nec natum errem nonumy, id audire persius argumentum qui.`,
      {type: 'image', src:'/test.png'},
      `Alia convenire quaerendum ei eum, virtute oportere ne sea, cibo affert oportere ex his. Mutat simul fierent ius id, vel voluptua phaedrum voluptatibus ei. Et usu natum qualisque, cu vix harum utinam ridens. Natum fugit perpetua et qui. Ne viris solet vim, audire discere facilis ea vim. Erant molestie quo cu, eam no autem accusam. Ut quo nisl abhorreant.`,
      `Mei id agam tritani consulatu. Ferri vivendum an has. Eos at dolore veritus scripserit, no vis diam dolorum, nec omnes verterem incorrupte te. Eu aperiam accusamus duo. Dolore nemore iriure usu ut, has labore probatus ei. Brute molestiae comprehensam ea usu, ea eum dolorem accusata.`,
      `Summo liber primis ius ne, ut exerci nonumy nec, ea omnium tamquam tibique vel. Ferri partem et sit, id est qualisque referrentur contentiones. Fabulas consectetuer eos ad, tota alterum eu pro. Nihil eleifend complectitur cum an. Ex nam lobortis laboramus dissentiet, his cu suas habemus erroribus. Eum omnis nonumy id, quot ridens commune vel ut.`,
      `Sea ne tota veniam. Ei cum laoreet accusamus, erant viris incorrupte id mea. Mel in aperiam luptatum, ut omnes viderer conceptam mea, te vix minim postea appellantur. Pertinax consectetuer ius an, no nostro vivendum quo, mel ne idque accusam.`,
      `Pericula suscipiantur no per, primis iisque nec an, qui ei timeam bonorum nominati. Te quas veritus vim, quo ne omnis iusto scribentur. Stet possit vivendo eu per. Sed in offendit verterem salutatus, oratio ceteros mentitum mei id.`,
    ]
  },
  {
    id:'2',
    author: 'admin',
    date: new Date(now.setDate(now.getDate() - 11)),
    title: 'Another Post!',
    content: [
      `Lorem ipsum dolor sit amet, per laudem vulputate an. Has no justo necessitatibus, eu eirmod corrumpit mea. Mei an facer assentior. Sea melius docendi id, sea malis graece intellegat ex, vel nonumy accusam referrentur no. Labitur oporteat usu in, ut tamquam nostrum nam.`,
      `No pro fierent adolescens. Ut vis nulla choro iracundia. Cu nonumy postea voluptatibus cum, ea velit sententiae nec. Qui ut graeci regione, audiam vivendo ex eos. Illud reprimique vis an, vivendo volumus urbanitas usu id, mel cu sonet utroque mentitum. Ea mei iriure dignissim consetetur. Facilis fierent euripidis vim et, lorem posidonium vel cu.`,
      `Ut pri pertinax inimicus. Eum expetenda definiebas ex, te utamur omittam dissentias eum. Vix te nonumy delicata. Solum justo singulis nec ut. Fabulas prodesset definitionem no nam. In eos vero officiis adversarium. Tibique repudiare delicatissimi ea quo, wisi mutat voluptatibus eum cu.`,
      `Ea tollit indoctum est, ut quis omnes nullam est, vis an noster denique. Putant abhorreant sit id, inani animal eu ius. Ne usu justo eripuit adolescens. An wisi dolor dissentias eum, erat inermis scripserit id sit. Ex oratio malorum vim, mel an quas eirmod integre. Ullum legere an eam.`,
      `Diam exerci maiestatis duo no, mutat iusto diceret cum te. Eum ullum postea propriae at, alia labore constituam ex cum. Mei munere nominati ad, sit natum mucius senserit in. Quo eu argumentum elaboraret suscipiantur, urbanitas maiestatis vix ad.`,
      `Ei mea omnes apeirian deterruisset, invenire vituperata vituperatoribus sit ut, meis sanctus an eum. Vix ne veniam maiestatis, minim movet perfecto at est. Eum ea facer mandamus, saepe concludaturque an pri, eam amet commodo et. Cu vis omnis adversarium.`,
      `Mentitum reprehendunt ne nec, ancillae atomorum id eam. Ea his idque torquatos. Adhuc discere sed ea, ne modus debitis hendrerit vim. Sanctus omittantur sed et.`,
      `Hendrerit constituam ei has, in omnis numquam oportere nam. Mea minim probatus insolens ut. Vim luptatum insolens ei, eu viris intellegat deterruisset pro, id usu omnis animal. Vim ut atomorum recteque mediocritatem, vis ex agam debet.`,
    ]
  },
  {
    id:'1',
    author: 'admin',
    date: new Date(now.setDate(now.getDate() - 45)),
    title: 'My first post ever!',
    content: [
      `Lorem ipsum dolor sit amet, an labore iudicabit deterruisset eam. Alii numquam pro eu, ei vim populo molestiae, id sea mucius gubergren posidonium. Ex mel audiam mnesarchum consectetuer. Ea elit veri per, nisl neglegentur definitiones ei vel. Sea no nostrud fastidii nominavi, ea idque explicari percipitur duo.`,
      `Vide accusam legendos mei et, ex eam tota ubique, mea oratio nostrum ut. Praesent aliquando ex vix, in pri labores albucius. Mea et case detraxit petentium, has in possim aliquip fuisset, mazim doming scribentur an qui. Pri et omnes legimus quaerendum. Mea ea accusam apeirian. Est habeo ubique adipisci in, eos ea ubique noluisse reprehendunt.`,
      `Eos utinam labitur expetendis ex. Similique definitiones usu an, te inermis repudiare complectitur mel, qui viris similique te. At saepe possit dolorum his, an eum quis aperiri. Per habeo ornatus in, ne diam molestie detraxit cum, diam inermis alienum ad vim.`
    ]
  }
];
export default posts;
