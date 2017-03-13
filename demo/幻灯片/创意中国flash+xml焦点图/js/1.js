var so = new SWFObject("flash/viewer.swf", "sotester", "990", "480", "9", "#000000");
so.addParam("wmode", "opaque");
so.addParam("flashvars", "&xmlLocation=images/nifengla.xml");
so.write("loader");