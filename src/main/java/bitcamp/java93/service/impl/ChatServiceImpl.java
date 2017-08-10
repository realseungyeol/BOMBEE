package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ChatDao;
import bitcamp.java93.domain.Chat;
import bitcamp.java93.service.ChatService;

@Service
public class ChatServiceImpl implements ChatService {
  @Autowired
  ChatDao chatDao;

  @Override
  public List<Chat> list(int no) throws Exception {
    chatDao.selectAll(no);
  }
  
}







