Array.prototype.copyWithin||(Array.prototype.copyWithin=function(e,t){if(this==null)throw new TypeError("this is null or not defined");var n=Object(this),r=n.length>>>0,i=e>>0,s=i<0?Math.max(r+i,0):Math.min(i,r),o=t>>0,u=o<0?Math.max(r+o,0):Math.min(o,r),a=arguments[2],f=a===undefined?r:a>>0,l=f<0?Math.max(r+f,0):Math.min(f,r),c=Math.min(l-u,r-s),h=1;u<s&&s<u+c&&(h=-1,u+=c-1,s+=c-1);while(c>0)u in n?n[s]=n[u]:delete n[s],u+=h,s+=h,c--;return n});