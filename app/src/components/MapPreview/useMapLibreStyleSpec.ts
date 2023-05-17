import { useMemo } from 'react';

import type { MapConfig } from '../../types/types.js';


export function useMapLibreStyleSpec(config: MapConfig) {
    return useMemo(() => ({
        version: 8,
        name: 'MapLibre',
        metadata: {
            'maptiler:copyright': 'This style was generated on MapTiler Cloud. Usage is governed by the license terms in https://github.com/maplibre/demotiles/blob/gh-pages/LICENSE',
        },
        sources: {
            maplibre: {
                url: 'https://demotiles.maplibre.org/tiles/tiles.json',
                type: 'vector',
            },
            capitals: {
                type: 'geojson',
                data: 'capitals_filtered.geojson',
                attribution: '<a href="https://openstreetmap.org/copyright">City data © OpenStreetMap</a>',
            },
            crimea: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    geometry: {
                        type: 'Polygon',
                        coordinates: [[
                            [34.009052735471810, 46.559259875594250],
                            [33.643252602040260, 46.345335453680380],
                            [33.628682598560204, 46.125697626656830],
                            [33.642928617309510, 46.104763961281290],
                            [33.648473474905984, 46.090330477636510],
                            [33.638764820599360, 46.077976784785335],
                            [33.627826722382450, 46.067479357190110],
                            [33.629113576450720, 46.057081114139490],
                            [33.642686868727424, 46.021929634171870],
                            [33.642972391065400, 46.015211856447080],
                            [33.636224138774026, 46.006705833212465],
                            [33.630526264659070, 45.996929921867920],
                            [33.631938366796930, 45.988472992911284],
                            [33.642766848344420, 45.984575360297384],
                            [33.646928693041986, 45.979819362109820],
                            [33.638745893564305, 45.968297691470040],
                            [33.619581333263940, 45.951176418494185],
                            [33.631813803985270, 45.944540475807800],
                            [33.638921676216000, 45.947370129305540],
                            [33.645615425169180, 45.954032513721390],
                            [33.656664039764480, 45.956871144277360],
                            [33.682581738281100, 45.958781008791990],
                            [33.738791807037614, 45.948369452272630],
                            [33.758180142697000, 45.940729700083010],
                            [33.777359172881690, 45.929239702338580],
                            [33.759277967934850, 45.922411795844710],
                            [33.725298650092210, 45.915873631545650],
                            [33.708750123268260, 45.910087609880580],
                            [33.693788572933810, 45.914808507956650],
                            [33.690926502438430, 45.896573708984020],
                            [33.693592356906805, 45.872714657663180],
                            [33.692267659723880, 45.860413924182180],
                            [33.670481351174800, 45.858427383625100],
                            [33.659363458089160, 45.859446826012490],
                            [33.653870582376726, 45.864259222793720],
                            [33.651073455848430, 45.870899072540030],
                            [33.630673781802330, 45.880406852471820],
                            [33.619453000596960, 45.881472661026490],
                            [33.609874215955390, 45.880489511266860],
                            [33.599069576039340, 45.877610457390375],
                            [33.578288776878680, 45.868102617562330],
                            [33.553573945603860, 45.847006251417780],
                            [33.530220674480375, 45.842219836554590],
                            [33.519229739544100, 45.841216823675070],
                            [33.508320884424960, 45.843130670480830],
                            [33.489011018484090, 45.852682982921750],
                            [33.482152996405716, 45.854578171799005],
                            [33.467199558962930, 45.849912739405056],
                            [33.424474965996810, 45.830758863483030],
                            [33.409401724040950, 45.826919535577020],
                            [33.379183500720670, 45.802867525073566],
                            [33.373621453393980, 45.796192819225180],
                            [33.338055436348640, 45.785778089720710],
                            [33.264988726658030, 45.754107741870940],
                            [33.228875412834270, 45.751312707727240],
                            [33.195482672811320, 45.764488729720600],
                            [33.178920237922200, 45.780103113647780],
                            [33.168845607863600, 45.784702279042050],
                            [33.161012432811674, 45.779215938995490],
                            [33.159515852997570, 45.768644649137770],
                            [33.165962301438725, 45.762685940125465],
                            [33.175088812642600, 45.759218220695715],
                            [33.181464829753000, 45.754904478849480],
                            [33.176139307823520, 45.743796196027600],
                            [33.163691688449060, 45.735912015025065],
                            [32.936926654808760, 45.662114646778264],
                            [32.868391124076450, 45.630443406986640],
                            [32.838039445757230, 45.608340750266110],
                            [32.827027724248040, 45.595761015164980],
                            [32.824334670809860, 45.587051373803350],
                            [32.825639416228850, 45.579605763895614],
                            [32.829936742584380, 45.569783118194690],
                            [32.828519409405630, 45.562278086757490],
                            [32.813310142795274, 45.559309331582570],
                            [32.802135836575160, 45.560145780074464],
                            [32.782586221594360, 45.565158335073846],
                            [32.773339224658230, 45.566893133565260],
                            [32.758306734735356, 45.565030173463356],
                            [32.750177256846115, 45.559437263349680],
                            [32.743407326301850, 45.552618958497930],
                            [32.735245495394990, 45.545987881103540],
                            [32.720317007797010, 45.537359277609570],
                            [32.705360404188470, 45.531691421317330],
                            [32.685894389337730, 45.526633791872570],
                            [32.663705831862840, 45.525631070588670],
                            [32.643120777367980, 45.521889790449790],
                            [32.525284074162556, 45.458381086913650],
                            [32.494904112191560, 45.435249102298540],
                            [32.481076544119250, 45.408986638827514],
                            [32.485145897130250, 45.394580671259690],
                            [32.512569395174240, 45.340606550336250],
                            [32.535915460470335, 45.337772480128820],
                            [32.570271538434810, 45.325108926833590],
                            [32.590830644991826, 45.320387232126620],
                            [32.663803781134390, 45.320421746458976],
                            [32.677607226189170, 45.326092312795540],
                            [32.713162468026070, 45.353283572618125],
                            [32.728171888360780, 45.360746810434020],
                            [32.750518060251466, 45.363717256453130],
                            [32.899739316929980, 45.354123224622270],
                            [32.941197846443885, 45.342455058451690],
                            [32.977016674050080, 45.325967435639910],
                            [33.042960908277620, 45.285398293003200],
                            [33.052743555854790, 45.281542736549230],
                            [33.068502844176350, 45.277034618923520],
                            [33.078252726482390, 45.272210805127315],
                            [33.089426322403455, 45.256563532014920],
                            [33.098974923435460, 45.247820101667884],
                            [33.123846117204350, 45.238235755071685],
                            [33.157671978597450, 45.207552277096480],
                            [33.172959979330074, 45.196816575317940],
                            [33.218376665141420, 45.187878368659824],
                            [33.240174336367090, 45.180191106261134],
                            [33.248571989896675, 45.165882710124580],
                            [33.259649216030766, 45.155918961282026],
                            [33.283097854850470, 45.160648607723120],
                            [33.317679995508940, 45.175355224127910],
                            [33.354584733231090, 45.185986733601480],
                            [33.397256615279190, 45.189736630769090],
                            [33.413445617568240, 45.184907318770880],
                            [33.468468576977216, 45.149132412229676],
                            [33.537128652906205, 45.117197692689730],
                            [33.561613282894430, 45.094099022711475],
                            [33.578376287749280, 45.053145935448015],
                            [33.582477449784420, 45.027377243150454],
                            [33.585141431695800, 45.018164616066740],
                            [33.603102126552100, 44.993103583251695],
                            [33.605922209331794, 44.986905272229734],
                            [33.608435242918150, 44.970399627592740],
                            [33.619431613578510, 44.931849466524540],
                            [33.619484500808824, 44.908193219205540],
                            [33.615497385934250, 44.888940922762570],
                            [33.608561183117274, 44.871288478948514],
                            [33.598894747054940, 44.859790298912856],
                            [33.559042447094640, 44.850057575124595],
                            [33.546675583634710, 44.837245311755080],
                            [33.537018321369940, 44.818719535082350],
                            [33.530315784620200, 44.798338017069625],
                            [33.524911691593700, 44.789186331013010],
                            [33.516690916751430, 44.784809980590666],
                            [33.524785531609865, 44.771832124491110],
                            [33.530290253507500, 44.757245159856750],
                            [33.537107346943230, 44.730342907712470],
                            [33.546509924956210, 44.709892269095350],
                            [33.548128680676200, 44.699106546699085],
                            [33.543995566510915, 44.682305065373580],
                            [33.535802739947430, 44.672608258970600],
                            [33.523374119310970, 44.661863083605255],
                            [33.515320778874354, 44.649126669832700],
                            [33.516377841582795, 44.634649901184330],
                            [33.524669716376480, 44.628639615725720],
                            [33.557474298027785, 44.624730009237370],
                            [33.571064882738600, 44.620853511273225],
                            [33.551058392036790, 44.615064404934060],
                            [33.499905706797676, 44.614525993048970],
                            [33.484511029663310, 44.609924382544930],
                            [33.476584996210110, 44.607143915145740],
                            [33.467050782057470, 44.606162541932520],
                            [33.444765992348980, 44.607062134677875],
                            [33.435346648245800, 44.605099368908210],
                            [33.413591053005575, 44.593500212748125],
                            [33.405435279452350, 44.590555351931360],
                            [33.375109586242220, 44.585646918974250],
                            [33.370744524340780, 44.588510221905150],
                            [33.372237834990756, 44.576810695127364],
                            [33.379130037993010, 44.564126730798590],
                            [33.487591315905260, 44.510240864510310],
                            [33.500112151358880, 44.500410028828330],
                            [33.517917009115365, 44.490741423727880],
                            [33.538363878022150, 44.491642802127560],
                            [33.560418927630310, 44.496641102244100],
                            [33.578223785386770, 44.497542389459795],
                            [33.590629750790950, 44.489758085949830],
                            [33.619577003408466, 44.462299881299740],
                            [33.626354336360150, 44.453362933289070],
                            [33.631753228710380, 44.434828756313124],
                            [33.645537634715026, 44.424985210355910],
                            [33.721007257593925, 44.399466304644360],
                            [33.741683866600850, 44.395608781219040],
                            [33.807274665171290, 44.394541761758430],
                            [33.818417060025610, 44.395526703491640],
                            [33.839093669032480, 44.401436005756720],
                            [33.851499634447920, 44.401436005759450],
                            [33.914678161977180, 44.383870497066510],
                            [33.938111652185000, 44.380832935288110],
                            [33.957065210440874, 44.382721167901420],
                            [34.066149666927630, 44.420199236289790],
                            [34.088893936836286, 44.422004158242830],
                            [34.102793212890390, 44.424875510148210],
                            [34.135933345669000, 44.441635979689520],
                            [34.146960870472670, 44.449590707497780],
                            [34.160589185074030, 44.466287285335795],
                            [34.170123399227776, 44.481861117412960],
                            [34.182759104731986, 44.492678385581030],
                            [34.229234172245240, 44.499497197745510],
                            [34.243018578249860, 44.507444042776970],
                            [34.263903954150294, 44.531868860586060],
                            [34.266316225201650, 44.535553628376110],
                            [34.266316225201650, 44.541530644686560],
                            [34.270336676952440, 44.545378535987936],
                            [34.275735569304800, 44.546442801445410],
                            [34.285384653508004, 44.545624137435940],
                            [34.299973149863405, 44.545542270401740],
                            [34.322602549714960, 44.543577427039224],
                            [34.330873193317700, 44.545460403250870],
                            [34.340292537420794, 44.557984738307540],
                            [34.380421356400060, 44.631830317636684],
                            [34.414952389008560, 44.673669777529994],
                            [34.424193090575585, 44.682394527360940],
                            [34.429591982926810, 44.688846445237740],
                            [34.469399167794535, 44.730194532749294],
                            [34.473764229695970, 44.730112925712520],
                            [34.473764229695970, 44.726358877549670],
                            [34.475142670296464, 44.723502373339585],
                            [34.499724861011515, 44.742923820440410],
                            [34.532800295801195, 44.752620844929055],
                            [34.612175500384180, 44.765345195378470],
                            [34.650656967150810, 44.777088262503725],
                            [34.720842567728710, 44.811080759265764],
                            [34.756796893391225, 44.820940541597480],
                            [34.826469790417660, 44.812086046046090],
                            [34.842896207582070, 44.816893835303176],
                            [34.856910353686715, 44.823738131824680],
                            [34.889648317948144, 44.817871641692506],
                            [34.907338305660260, 44.820886440346584],
                            [34.922960632465504, 44.830500150599650],
                            [34.929508225317110, 44.836528269532240],
                            [34.941799320671780, 44.840193709224820],
                            [34.952826845478970, 44.841415470643284],
                            [34.985679679789910, 44.840275160795755],
                            [35.005322458344100, 44.835387862967280],
                            [35.017958163849414, 44.822190088245520],
                            [35.027032897801890, 44.808907795822850],
                            [35.037933245998005, 44.798697922400890],
                            [35.080733337841340, 44.793525442788905],
                            [35.108020732640400, 44.824553365795765],
                            [35.130368105574235, 44.868798385457470],
                            [35.154852000907680, 44.900712516977480],
                            [35.171112297807580, 44.907463860087720],
                            [35.215220689401490, 44.914214410317950],
                            [35.233163085981715, 44.925728224907715],
                            [35.256366884162360, 44.958966571811970],
                            [35.273000980991950, 44.966901193860280],
                            [35.297484876325340, 44.956056935432710],
                            [35.304960874913860, 44.961214826144410],
                            [35.315240372954605, 44.965711070514175],
                            [35.319352172170880, 44.969413595398010],
                            [35.367572362981120, 44.943623190760860],
                            [35.361030864227930, 44.973644759765960],
                            [35.362152264014156, 44.985939809354190],
                            [35.374674561627444, 44.997835734117416],
                            [35.389439658813274, 45.001800493667590],
                            [35.422707852477630, 45.000875407649230],
                            [35.435043250127450, 45.004707809642410],
                            [35.435043250127450, 45.011446929213974],
                            [35.406319579135840, 45.020158210227010],
                            [35.400899480168960, 45.025046135473445],
                            [35.397909080738910, 45.034820734005480],
                            [35.400525680240150, 45.042216617888045],
                            [35.406319579135840, 45.051328088783805],
                            [35.407440978922150, 45.062946409632050],
                            [35.417346677042130, 45.070866638569300],
                            [35.469304867139925, 45.100689649227320],
                            [35.507026059753400, 45.113341616151644],
                            [35.547583352024160, 45.120199824121330],
                            [35.590196543909090, 45.119936062137950],
                            [35.634118035538620, 45.114396778725790],
                            [35.706697295726770, 45.094802105709220],
                            [35.771782422456766, 45.065729957322620],
                            [35.784304720070000, 45.057941041321754],
                            [35.812500403524720, 45.031852200991295],
                            [35.819415702206670, 45.021152336906454],
                            [35.827639300640160, 44.998953650270040],
                            [35.848198296721705, 44.992080884555860],
                            [35.916977483614176, 45.001728956617310],
                            [35.993606469006810, 44.997896355361604],
                            [36.008932266085710, 45.009261253336290],
                            [36.025399767233640, 45.032886610396730],
                            [36.047827762958946, 45.048074065419456],
                            [36.078666257082034, 45.038830007695650],
                            [36.079137312377895, 45.046610970582435],
                            [36.135020401727616, 45.021251622101260],
                            [36.224171684734100, 45.007510616315560],
                            [36.243983080958060, 45.011474706353084],
                            [36.248281780138770, 45.016495493219650],
                            [36.253328079176950, 45.032479803244940],
                            [36.257439878393260, 45.038423242792590],
                            [36.267158676549116, 45.043573724415154],
                            [36.278372674411800, 45.045554555426380],
                            [36.367408525583360, 45.048332652918250],
                            [36.440299511691390, 45.067872226155260],
                            [36.453756309139950, 45.076319703343190],
                            [36.455251508854985, 45.092023412040620],
                            [36.441420911492910, 45.107096382877360],
                            [36.414320416658140, 45.128725683112890],
                            [36.408526517761570, 45.149160473330085],
                            [36.409997342308856, 45.171615955386955],
                            [36.418312796420764, 45.230016717059530],
                            [36.426723294817750, 45.251862534929810],
                            [36.437564777650890, 45.272274915996120],
                            [36.449713275335400, 45.285426263293430],
                            [36.459058273554290, 45.287530195987130],
                            [36.481486269279600, 45.288450642002630],
                            [36.490955429036800, 45.292131351377580],
                            [36.496375528002830, 45.300940007322055],
                            [36.493945828466820, 45.305015191082816],
                            [36.488712629464260, 45.309352968036050],
                            [36.484600830248010, 45.315924724862185],
                            [36.489647129296515, 45.336413860372005],
                            [36.502169426909745, 45.347317349414510],
                            [36.521046323311910, 45.350338426618150],
                            [36.544281237819945, 45.347317349420250],
                            [36.574559032049050, 45.336019719043150],
                            [36.585399229982954, 45.333917585593355],
                            [36.598100885375490, 45.334837278577254],
                            [36.630808379142394, 45.340486493529540],
                            [36.637536777859964, 45.351126507198900],
                            [36.630995279105890, 45.374107363258900],
                            [36.613595453901130, 45.408952809854210],
                            [36.598456556785690, 45.421547717459106],
                            [36.583317659671990, 45.427319444651290],
                            [36.566309762912795, 45.425483050007670],
                            [36.548367366332540, 45.412101800105890],
                            [36.532854669281390, 45.409084021294600],
                            [36.515659872558730, 45.419579948322510],
                            [36.491175977226160, 45.442795254294080],
                            [36.470430081179390, 45.445811231430300],
                            [36.411182792482634, 45.436107077665040],
                            [36.391371396258705, 45.439910255726520],
                            [36.359598402313650, 45.454071560499330],
                            [36.339600106125260, 45.456955834869630],
                            [36.330255107906370, 45.454464879327446],
                            [36.320536309762250, 45.448564808874070],
                            [36.311565111471250, 45.443844308113600],
                            [36.298855913893620, 45.442795254299995],
                            [36.307266412290600, 45.461150879702530],
                            [36.300164213644250, 45.473209895036090],
                            [36.283717016779036, 45.476355300848866],
                            [36.267082919949445, 45.467049633436260],
                            [36.252130922798360, 45.461150879702530],
                            [36.136813644789410, 45.462199592145110],
                            [36.117002248559860, 45.457218034323350],
                            [36.097003952371466, 45.441483909606006],
                            [36.069529657608030, 45.430467410784530],
                            [36.065544962752600, 45.425530289734550],
                            [36.051340565459040, 45.395352421620910],
                            [36.022557970944945, 45.368441166003805],
                            [35.986486277818386, 45.362926059418186],
                            [35.947237285298260, 45.372380198658874],
                            [35.872202160023790, 45.404075760536614],
                            [35.853885963513930, 45.413916621802144],
                            [35.847157564796280, 45.426379251448395],
                            [35.852404773944700, 45.443864975416830],
                            [35.859506972591930, 45.459336247628810],
                            [35.857824872912545, 45.469953901705000],
                            [35.832780277685030, 45.470871382871680],
                            [35.816706880748600, 45.463924368207390],
                            [35.803623883242180, 45.449634420588640],
                            [35.794693056160380, 45.429802104624290],
                            [35.791889556694684, 45.412092302781560],
                            [35.772265060435046, 45.392145729354210],
                            [35.767405661361295, 45.388733110156690],
                            [35.751892964317930, 45.386632934388984],
                            [35.748154965040700, 45.379938103368545],
                            [35.746846665290036, 45.369960021421576],
                            [35.744230065788740, 45.360768125206480],
                            [35.716195071132180, 45.340409325570820],
                            [35.694514675272870, 45.329898692772790],
                            [35.517206274672160, 45.295068474183580],
                            [35.480386981689830, 45.297960869752700],
                            [35.331940615360960, 45.371562726652314],
                            [35.044913757772320, 45.669545248704424],
                            [35.002300565893450, 45.729069386955300],
                            [34.706312949990430, 46.024929846739866],
                            [34.358688833098060, 46.106725558140795],
                            [34.009052735471810, 46.559259875594250],
                        ]],
                    },
                },
            },
        },
        glyphs: 'memfont://{fontstack}/{range}.pbf',
        layers: [
            {
                id: 'background',
                type: 'background',
                paint: {
                    'background-color': '#d8f2ff',
                },
            },
            {
                id: 'coastline',
                type: 'line',
                source: 'maplibre',
                'source-layer': 'countries',
                layout: {
                    'line-cap': 'round',
                    'line-join': 'round',
                },
                paint: {
                    'line-blur': 0.5,
                    'line-color': '#198ec8',
                    'line-width': [
                        'interpolate', ['linear'], ['zoom'],
                        0, 2,
                        6, 6,
                        14, 9,
                        22, 18,
                    ],
                },
            },
            {
                id: 'countries-fill',
                type: 'fill',
                source: 'maplibre',
                'source-layer': 'countries',
                paint: {
                    'fill-color': [
                        'match',
                        ['get', 'ADM0_A3'],
                        [
                            'ARM', 'ATG', 'AUS', 'BTN', 'CAN',
                            'COG', 'CZE', 'GHA', 'GIN', 'HTI',
                            'ISL', 'JOR', 'KHM', 'KOR', 'LVA',
                            'MLT', 'MNE', 'MOZ', 'PER', 'SAH',
                            'SGP', 'SLV', 'SOM', 'TJK', 'TUV',
                            'UKR', 'WSM',
                        ], '#d6c7ff',
                        [
                            'AZE', 'BGD', 'CHL', 'CMR', 'CSI',
                            'DEU', 'DJI', 'GUY', 'HUN', 'IOA',
                            'JAM', 'LBN', 'LBY', 'LSO', 'MDG',
                            'MKD', 'MNG', 'MRT', 'NIU', 'NZL',
                            'PCN', 'PYF', 'SAU', 'SHN', 'STP',
                            'TTO', 'UGA', 'UZB', 'ZMB',
                        ], '#ebca8a',
                        [
                            'AGO', 'ASM', 'ATF', 'BDI', 'BFA',
                            'BGR', 'BLZ', 'BRA', 'CHN', 'CRI',
                            'ESP', 'HKG', 'HRV', 'IDN', 'IRN',
                            'ISR', 'KNA', 'LBR', 'LCA', 'MAC',
                            'MUS', 'NOR', 'PLW', 'POL', 'PRI',
                            'SDN', 'TUN', 'UMI', 'USA', 'USG',
                            'VIR', 'VUT',
                        ], '#c1e599',
                        [
                            'ARE', 'ARG', 'BHS', 'CIV', 'CLP',
                            'DMA', 'ETH', 'GAB', 'GRD', 'HMD',
                            'IND', 'IOT', 'IRL', 'IRQ', 'ITA',
                            'KOS', 'LUX', 'MEX', 'NAM', 'NER',
                            'PHL', 'PRT', 'RUS', 'SEN', 'SUR',
                            'TZA', 'VAT',
                        ], '#e7e58f',
                        [
                            'AUT', 'BEL', 'BHR', 'BMU', 'BRB',
                            'CYN', 'DZA', 'EST', 'FLK', 'GMB',
                            'GUM', 'HND', 'JEY', 'KGZ', 'LIE',
                            'MAF', 'MDA', 'NGA', 'NRU', 'SLB',
                            'SOL', 'SRB', 'SWZ', 'THA', 'TUR',
                            'VEN', 'VGB',
                        ], '#98dda1',
                        [
                            'AIA', 'BIH', 'BLM', 'BRN', 'CAF',
                            'CHE', 'COM', 'CPV', 'CUB', 'ECU',
                            'ESB', 'FSM', 'GAZ', 'GBR', 'GEO',
                            'KEN', 'LTU', 'MAR', 'MCO', 'MDV',
                            'NFK', 'NPL', 'PNG', 'PRY', 'QAT',
                            'SLE', 'SPM', 'SYC', 'TCA', 'TKM',
                            'TLS', 'VNM', 'WEB', 'WSB', 'YEM',
                            'ZWE',
                        ], '#83d5f4',
                        [
                            'ABW', 'ALB', 'AND', 'ATC', 'BOL',
                            'COD', 'CUW', 'CYM', 'CYP', 'EGY',
                            'FJI', 'GGY', 'IMN', 'KAB', 'KAZ',
                            'KWT', 'LAO', 'MLI', 'MNP', 'MSR',
                            'MYS', 'NIC', 'NLD', 'PAK', 'PAN',
                            'PRK', 'ROU', 'SGS', 'SVN', 'SWE',
                            'TGO', 'TWN', 'VCT', 'ZAF',
                        ], '#b1bbf9',
                        ['ATA', 'GRL'], '#ffffff',
                        '#eab38f',
                    ],
                },
            },
            {
                id: 'countries-boundary',
                type: 'line',
                source: 'maplibre',
                'source-layer': 'countries',
                layout: {
                    'line-cap': 'round',
                    'line-join': 'round',
                },
                paint: {
                    'line-color': 'rgba(255, 255, 255, 1)',
                    'line-width': [
                        'interpolate', ['linear'], ['zoom'],
                        1, 1,
                        6, 2,
                        14, 6,
                        22, 12,
                    ],
                    'line-opacity': [
                        'interpolate', ['linear'], ['zoom'],
                        3, 0.5,
                        6, 1,
                    ],
                },
            },
            {
                id: 'capitals-label',
                type: 'symbol',
                source: 'capitals',
                layout: {
                    'text-font': [config.font],
                    'text-size': config.fontSize,
                    'text-field': config.customText || ['to-string', ['get', config.langCode]],
                },
                paint: {
                    'text-color': 'rgba(8, 37, 77, 1)',
                    'text-halo-blur': [
                        'interpolate', ['linear'], ['zoom'],
                        2, 0.2,
                        6, 0,
                    ],
                    'text-halo-color': 'rgba(255, 255, 255, 1)',
                    'text-halo-width': [
                        'interpolate', ['linear'], ['zoom'],
                        2, 1,
                        6, 1.6,
                    ],
                },
            },
            {
                id: 'crimea-fill',
                type: 'fill',
                source: 'crimea',
                paint: {
                    'fill-color': '#d6c7ff',
                },
            },
        ],
    }), [config]);
}