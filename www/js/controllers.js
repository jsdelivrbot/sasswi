angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {

	
/*
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };*/
})
.controller('SplashCtrl',function($timeout,$scope,$state,$ionicHistory){
  $timeout(function(){
    $state.go('app.arabes');
  },5000);
  //$ionicHistory.clearHistory();
})

.controller('ArabesCtrl', function($scope) {
  $scope.arabes = [
    { title: 'جذبالفلوب', image: 1 },
    { title: 'مواهبالنڢع مدالخبير لسانشكر', image: 2 },
	{ title: 'أحببت ڢتح...على من', image: 3 },
	{ title: 'مفدماتالأمداح', image: 4 },
	{ title: 'مدادوأفلام', image: 5 },
	{ title: '...يسررسولآلله رڢعنا', image: 6 },
	{ title: '...يامكرمالضيڢجا ذلت', image: 7 },
	{ title: 'رمناشكو', image: 8 },
  ];
})

.controller('ArabeCtrl', function($scope, $stateParams) {
	
	$scope.title = $stateParams.arabeTitle;
	

	if($scope.title == 'جذبالفلوب'){
		$scope.images = ["0001","0002","0004","0003","0006","0005","0007","0008","0009","0010","0011","0012","0013","0014",
		"0015","0016","0017","0018", "0019", "0020", "0021", "0022"
		, "0023", "0024", "0025", "0026", "0027","0028","0029","0030","0031","0032","0033"];
	}
	if($scope.title == 'مواهبالنڢع مدالخبير لسانشكر'){ //Mawahibou - Maddal Habirou - Lisanou Choukri
		$scope.images = ["0035", "0036", "0037", "0038", "0039","0040","0041","0042","0043","0044","0045","0046","0047","0048","0049","0050",
		"0051", "0052", "0053", "0054", "0055", "0056", "0057","0058","0059","0060","0061","0062","0063","0064","0065","0066","0067","0068","0069","0070"];
	}
	if($scope.title == 'أحببت ڢتح...على من'){
		$scope.images = ["0071","0072","0073","0074","0075","0076","0077","0078","0079","0080","0081","0082","0083","0084","0085","0086","0087","0088"
		,"0089","0090","0091","0092","0093","0094","0095","0096","0097","0098","0099","0100","0101"];
	}
	
	if($scope.title == 'مفدماتالأمداح'){
		$scope.images = ["0102", "0103", "0104", "0105","0106","0107","0108","0109","0110","0111","0112","0113","0114","0115","0116","0117","0118","0119",
		"0120", "0121", "0122", "0123", "0124", "0125","0126","0127","0128","0129",
		"0130", "0131", "0132", "0133", "0134", "0135","0136","0137","0138","0139","0140"];
	}
	
	if($scope.title == 'مدادوأفلام'){
		$scope.images = ["0141", "0142", "0143", "0144", "0145","0146","0147","0148","0149","0248","0249","0150","0151"];
	}
	
	if($scope.title == '...يسررسولآلله رڢعنا'){
		$scope.images = ["0152", "0153", "0154", "0155","0156","0157","0158","0159","0160","0161","0162",
		"0163", "0164", "0165", "0166", "0167", "0168","0169","0170","0171","0172","0173","0174","0175",
		"0176", "0177", "0178", "0179","0180","0181","0182","0183","0184","0185","0186","0187"];
	}
	
	if($scope.title == '...يامكرمالضيڢجا ذلت'){
		$scope.images = ["0241", "0188", "0189","0190","0191","0192","0193","0194","0195","0196","0197","0198","0199","0200",
		"0201", "0202", "0203", "0204", "0205", "0206","0207","0208","0251","0252","0209","0210","0211","0212","0213","0214","0215","0216","0217","0218","0219",
		"0220", "0221", "0222", "0223", "0224", "0225", "0226", "0227", "0228", "0229", "0230","0231","0232","0233","0234","0235","0236","0237",
		"0238","0239","0240"];
	}

	if($scope.title == 'رمناشكو'){
		$scope.images = ["0242", "0243", "0244", "0245", "0246", "0247"];
	}

})

.controller('FrenchsCtrl', function($scope) {
  $scope.frenchs = [
    { title: 'Jazbu', image: 5 },
    { title: 'Mawahibou', image: 3 },
	{ title: 'Maddal Khabirou - Lisanou Choukri', image: 2 },
	{ title: 'Mafatihoul Jinaan', image: 4 },
	{ title: 'Alamane', image: 1 },
	{ title: 'Mukhadimatul Amda', image: 6 },
	{ title: 'Midadi', image: 7 },
	{ title: 'Yassourou - Rafahnaa...', image: 9 },
	{ title: 'Yaa Mukrimad - Zallat...', image: 11 },
	{ title: 'Roumna Choukour', image: 8 },
	{ title: 'Rabbiya Ahmadou', image: 10 },
	{ title: 'Sana ilahi', image: 5 }
  ];
})

.controller('FrenchCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
	$scope.title = $stateParams.frenchTitle;
	if($scope.title == 'Jazbu'){
		$scope.images = ["Jazbou1", "Jazbou2", "Jazbou3", "Jazbou4"
		, "Jazbou5", "Jazbou6", "Jazbou7", "Jazbou8", "Jazbou9", 
		"Jazbou10", "Jazbou11", "Jazbou12", "Jazbou13", "Jazbou14", "Jazbou15", "Jazbou16"];
	}
	if($scope.title == 'Mawahibou'){
		$scope.images = ["Mawahibou1", "Mawahibou2", "Mawahibou3", "Mawahibou4",
		"Mawahibou5", "Mawahibou6", "Mawahibou7", "Mawahibou8", "Mawahibou9", "Mawahibou10",
		"Mawahibou11", "Mawahibou12", "Mawahibou13", "Mawahibou14"];
	}
	if($scope.title == 'Mafatihoul Jinaan'){
		$scope.images = ["Mafatihoul Jinaan1", "Mafatihoul Jinaan2", "Mafatihoul Jinaan3", "Mafatihoul Jinaan4",
		"Mafatihoul Jinaan5", "Mafatihoul Jinaan6", "Mafatihoul Jinaan7", "Mafatihoul Jinaan8", "Mafatihoul Jinaan9"];
	}
	
	if($scope.title == 'Mukhadimatul Amda'){
		$scope.images = ["Mouhaddamat1", "Mouhaddamat2", "Mouhaddamat3", "Mouhaddamat4",
		"Mouhaddamat5", "Mouhaddamat6", "Mouhaddamat7", "Mouhaddamat8", "Mouhaddamat9", 
		"Mouhaddamat10", "Mouhaddamat11", "Mouhaddamat12", "Mouhaddamat13", "Mouhaddamat14",
		"Mouhaddamat15", "Mouhaddamat16"];
	}
	
	if($scope.title == 'Alamane'){
		$scope.images = ["Alamane1", "Alamane2", "Alamane3"];
	}
	
	if($scope.title == 'Maddal Khabirou - Lisanou Choukri'){
		$scope.images = ["Maddal Habirou", "Lisanou Choukri"];
	}
	
	if($scope.title == 'Midadi'){
		$scope.images = ["Midadi1", "Midadi2", "Midadi3", "Midadi4", "Midadi5", "Midadi6"];
	}
	
	if($scope.title == 'Yassourou - Rafahnaa...'){
		$scope.images = ["Rafahnaa1", "Rafahnaa2", "Rafahnaa3", "Rafahnaa4", "Rafahnaa5", "Rafahnaa6", "Rafahnaa7"
		, "Rafahnaa8", "Rafahnaa9", "Rafahnaa10", "Rafahnaa11", "Rafahnaa12", "Rafahnaa13","Rafahnaa14"];
	}
	
	if($scope.title == 'Yaa Mukrimad - Zallat...'){
		$scope.images = ["Beuhrou1" ,"Beuhrou2", "Beuhrou3", "Beuhrou4", "Beuhrou5", "Beuhrou6"
		,"Beuhrou7", "Beuhrou8", "Beuhrou9", "Beuhrou10", "Beuhrou11", "Beuhrou12", "Beuhrou13", "Beuhrou14"
		,"Beuhrou15", "Beuhrou16", "Beuhrou17", "Beuhrou18", "Beuhrou19", "Beuhrou20", "Beuhrou21", "Beuhrou22"
		, "Beuhrou23", "Beuhrou24", "Beuhrou25"];
	}
		
	if($scope.title == 'Roumna Choukour'){
		$scope.images = ["Roumna Choukour1", "Roumna Choukour2", "Roumna Choukour3", "Roumna Choukour4", 
		"Roumna Choukour5", "Roumna Choukour6", "Roumna Choukour7", "Roumna Choukour8"];
	}
	
	if($scope.title == 'Rabbiya Ahmadou'){
		$scope.images = ["Rabbiya Ahmadou1", "Rabbiya Ahmadou2"];
	}

	if($scope.title == 'Sana ilahi'){
		$scope.images = ["Sana ilahi"];
	}
	
	$scope.updateSlideStatus = function (slide) {
            var zoomFactor = $ionicScrollDelegate.$getByHandle("scrollHandle" + slide).getScrollPosition().zoom;
            if (zoomFactor == $scope.zoomMin) {
                $ionicSlideBoxDelegate.enableSlide(true);
            } else {
                $ionicSlideBoxDelegate.enableSlide(false);
            }
        };


});
