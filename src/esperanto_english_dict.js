// dict = open('espdic_small.txt').readlines
// json_dict = dict.map{|e| e.chomp.split(' : ')}.to_json.gsub("],","],\n")
// open('esperanto_english_dict.js','w'){|f| f.puts json_dict}

const esperanto_english_dict = [
  ["Aarono", "Aaron"],
  ["Abadono", "Abaddon (biblical, a compartment of Gehenna)"],
  ["abaĵuro", "lampshade"],
  ["abako", "abacus, ball frame, counting frame, calculating frame, chart"],
  ["abakosimio", "monkey playing with abacus"],
  ["abakteria", "abacterial"]
];

export default esperanto_english_dict.map( pair => pair.map(s => s.toLowerCase() ) )