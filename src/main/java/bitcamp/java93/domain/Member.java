package bitcamp.java93.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Member {
  int no;
  String id;
  String name;
  String email;
  String pwd;
  int accounttype;
  
  
  @Override
  public String toString() {
    return "Member [no=" + no + ", id=" + id + ", name=" + name + ", email=" + email + ", pwd=" + pwd + ", accounttype="
        + accounttype + "]";
  }

  public int getAccounttype() {
    return accounttype;
  }

  public void setAccounttype(int accounttype) {
    this.accounttype = accounttype;
  }

  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPwd() {
    return pwd;
  }
  public void setPwd(String pwd) {
    this.pwd = pwd;
  }
  
  
  
  
}
