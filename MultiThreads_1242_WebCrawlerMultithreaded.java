/* Given a url startUrl and an interface HtmlParser, implement a Multi-threaded web crawler to crawl all links that are under the same hostname as startUrl. 

Return all urls obtained by your web crawler in any order.

Your crawler should:

Start from the page: startUrl
Call HtmlParser.getUrls(url) to get all urls from a webpage of given url.
Do not crawl the same link twice.
Explore only the links that are under the same hostname as startUrl.


As shown in the example url above, the hostname is example.org. For simplicity sake, you may assume all urls use http protocol without any port specified. For example, the urls http://leetcode.com/problems and http://leetcode.com/contest are under the same hostname, while urls http://example.org/test and http://example.com/abc are not under the same hostname.

The HtmlParser interface is defined as such: 

interface HtmlParser {
  // Return a list of all urls from a webpage of given url.
  // This is a blocking call, that means it will do HTTP request and return when this request is finished.
  public List<String> getUrls(String url);
}
Note that getUrls(String url) simulates performing a HTTP request. You can treat it as a blocking function call which waits for a HTTP request to finish. It is guaranteed that getUrls(String url) will return the urls within 15ms.  Single-threaded solutions will exceed the time limit so, can your multi-threaded web crawler do better?

Below are two examples explaining the functionality of the problem, for custom testing purposes you'll have three variables urls, edges and startUrl. Notice that you will only have access to startUrl in your code, while urls and edges are not directly accessible to you in code.

 

Follow up:

Assume we have 10,000 nodes and 1 billion URLs to crawl. We will deploy the same software onto each node. The software can know about all the nodes. We have to minimize communication between machines and make sure each node does equal amount of work. How would your web crawler design change?
What if one node fails or does not work?
How do you know when the crawler is done? */

/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface HtmlParser {
 *     public List<String> getUrls(String url) {}
 * }
 */
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

interface HtmlParser {
    public List<String> getUrls(String url);
}

class StreamSolution {
    Set<String> visited = ConcurrentHashMap.newKeySet();
    public List<String> crawl(String startUrl, HtmlParser htmlParser) {
        String hostname = startUrl.substring(7).split("/")[0];
        visited.add(startUrl);
        return dfs(startUrl, htmlParser, "http://" + hostname);
    }
    private List<String> dfs(String startUrl, HtmlParser htmlParser, String hostname){
        return Stream.concat(
            htmlParser.getUrls(startUrl).stream()
            .filter(url -> url.startsWith(hostname))
            .filter(url -> visited.add(url))
            .parallel()
            .flatMap(url -> dfs(url, htmlParser, hostname).stream())
            , 
            Stream.of(startUrl)
        ).collect(Collectors.toList());
    }
}

