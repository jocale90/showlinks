// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/convolutionKernel",[],function(){var a={Default:[0,0,0,0,1,0,0,0,0],LineDetectionHorizontal:[-1,-1,-1,2,2,2,-1,-1,-1],LineDetectionVertical:[-1,2,-1,-1,2,-1,-1,2,-1],LineDetectionLeftDiagonal:[2,-1,-1,-1,2,-1,-1,-1,2],LineDetectionRightDiagonal:[-1,-1,2,-1,2,-1,2,-1,-1],GradientNorth:[-1,-2,-1,0,0,0,1,2,1],GradientWest:[-1,0,1,-2,0,2,-1,0,1],GradientEast:[1,0,-1,2,0,-2,1,0,-1],GradientSouth:[1,2,1,0,0,0,-1,-2,-1],GradientNorthEast:[0,-1,-2,1,0,-1,2,1,0],GradientNorthWest:[-2,
-1,0,-1,0,1,0,1,2],SmoothArithmeticMean:[.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111],Smoothing3x3:[.0625,.125,.0625,.125,.25,.125,.0625,.125,.0625],Smoothing5x5:[1,1,1,1,1,1,4,4,4,1,1,4,12,4,1,1,4,4,4,1,1,1,1,1,1],Sharpening3x3:[-1,-1,-1,-1,9,-1,-1,-1,-1],Sharpening5x5:[-1,-3,-4,-3,-1,-3,0,6,0,-3,-4,6,21,6,-4,-3,0,6,0,-3,-1,-3,-4,-3,-1],Laplacian3x3:[0,-1,0,-1,4,-1,0,-1,0],Laplacian5x5:[0,0,-1,0,0,0,-1,-2,-1,0,-1,-2,
17,-2,-1,0,-1,-2,-1,0,0,0,-1,0,0],SobelHorizontal:[-1,-2,-1,0,0,0,1,2,1],SobelVertical:[-1,0,1,-2,0,2,-1,0,1],Sharpen:[0,-.25,0,-.25,2,-.25,0,-.25,0],Sharpen2:[-.25,-.25,-.25,-.25,3,-.25,-.25,-.25,-.25],PointSpread:[-.627,.352,-.627,.352,2.923,.352,-.627,.352,-.627],getKernel:function(b){switch(b){case 0:return a.LineDetectionHorizontal;case 1:return a.LineDetectionVertical;case 2:return a.LineDetectionLeftDiagonal;case 3:return a.LineDetectionRightDiagonal;case 4:return a.GradientNorth;case 5:return a.GradientWest;
case 6:return a.GradientEast;case 7:return a.GradientSouth;case 8:return a.GradientNorthEast;case 9:return a.GradientNorthWest;case 10:return a.SmoothArithmeticMean;case 11:return a.Smoothing3x3;case 12:return a.Smoothing5x5;case 13:return a.Sharpening3x3;case 14:return a.Sharpening5x5;case 15:return a.Laplacian3x3;case 16:return a.Laplacian5x5;case 17:return a.SobelHorizontal;case 18:return a.SobelVertical;case 19:return a.Sharpen;case 20:return a.Sharpen2;case 21:return a.PointSpread;default:return a.Default}}};
return a});