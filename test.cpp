#include<bits/stdc++.h>
using namespace std;
int main() {
    int n, m;
    cin >> n >> m;
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    sort(a.begin(), a.end());
    
    int ans = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] <= m) {
            ans++;
            m -= a[i];
        } else {
            break;
        }
    }
    
    cout << ans << endl;
    return 0;
}