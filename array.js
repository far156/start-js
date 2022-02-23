var arrName=['rahim','karim','jabbar'];
arrName[3]
arrName.length

//
arrName["rahim","karim","hafi","joba"]
_proto_:Array(0)
concat:f concat()
construction:f Array()

//push
var arrName=['rahim','karim','joba'];
arrName.push('sofiq')
arrName
//pop-delete
var arrName=['rahim','karim','joba'];
arrName.pop()
arrName
//shift
var arrName=['rahim','karim','joba'];
arrName.shift()
arrName
["karim","rafiq","joba"]
// unshift-fist dik nam add korey
var arrName=['rahim','karim','joba'];
arrName.unshift("korim")
arrName
["karim","rafiq","joba"]

//index
var arrName=['rahim','karim','joba'];
arrName.indexOf("korim")
arrName
["karim","rafiq","joba"]

//index remove
var arrName=['rahim','karim','joba'];
arrName.splice(1,2);
arrName
["karim","rafiq","joba"]
//slice

var arrName=['rahim','karim','joba'];
arrName=arrName.slice()
newArr
newArr[0]='changed rahim'
arrName
["karim","rafiq","joba"]
